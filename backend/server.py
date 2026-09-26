from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

# show.porto is a static frontend (GitHub Pages ready).
# This stub only exists so the Emergent preview/deploy pipeline has a healthy backend process.
app = FastAPI(title="show.porto (static)")
api_router = APIRouter(prefix="/api")


@api_router.get("/")
@api_router.get("/health")
async def health():
    return {"status": "ok", "note": "show.porto frontend is fully static; no API is used."}


app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
