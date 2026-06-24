import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { TerminalShowcase } from "@/components/portfolio/Terminal";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppFab } from "@/components/portfolio/WhatsAppFab";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <TerminalShowcase />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-right" />
    </div>
  );
}
