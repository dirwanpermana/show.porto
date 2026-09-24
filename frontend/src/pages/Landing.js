import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Audiences from "@/components/Audiences";
import TemplateSlider from "@/components/TemplateSlider";
import LiveDemo from "@/components/LiveDemo";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import LeadSection from "@/components/LeadSection";
import Footer from "@/components/Footer";
import { LangProvider } from "@/i18n";

const Landing = () => (
    <LangProvider>
        <div className="bg-void text-bone">
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <Audiences />
                <TemplateSlider />
                <LiveDemo />
                <Features />
                <Process />
                <Pricing />
                <Faq />
                <LeadSection />
            </main>
            <Footer />
        </div>
    </LangProvider>
);

export default Landing;
