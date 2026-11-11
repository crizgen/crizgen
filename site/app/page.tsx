import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import AiSection from "@/components/AiSection";
import Builds from "@/components/Builds";
import Work from "@/components/Work";
import JsonLd from "@/components/JsonLd";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <AiSection />
        <Builds />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
