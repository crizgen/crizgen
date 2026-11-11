import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Builds from "@/components/Builds";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Builds />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
