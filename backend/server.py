from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict
from typing import Optional
from datetime import datetime, timezone
import os
import logging
from pathlib import Path


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class LeadBase(BaseModel):
    name: str
    contact: str
    intent: str = "lainnya"
    message: str = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class Lead(LeadBase):
    model_config = ConfigDict(extra="ignore")
    id: Optional[str] = None


@api_router.get("/")
async def root():
    return {"message": "Karyaloka API aktif"}


@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadBase):
    doc = input.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    result = await db.leads.insert_one(doc)
    saved = await db.leads.find_one({"_id": result.inserted_id})
    return Lead(**{**saved, "id": str(saved["_id"])})


@api_router.get("/leads", response_model=list[Lead])
async def get_leads():
    docs = await db.leads.find().sort("created_at", -1).to_list(500)
    return [Lead(**{**d, "id": str(d["_id"])}) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
