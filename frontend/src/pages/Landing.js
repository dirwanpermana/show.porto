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
import { SITE } from "@/i18n";
import { ROUTES } from "@/lib/nav";

const LINKS = [
    { id: "template", label: SITE.nav.template },
    { id: "template", path: ROUTES.umkm, label: SITE.nav.umkm },
    { id: "pratinjau", label: SITE.nav.pratinjau },
    { id: "fitur", label: SITE.nav.fitur },
    { id: "harga", label: SITE.nav.harga },
    { id: "faq", label: SITE.nav.faq },
];

const Landing = () => (
    <div className="bg-void text-bone" data-testid="page-landing">
        <Nav links={LINKS} />
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
);

export default Landing;
