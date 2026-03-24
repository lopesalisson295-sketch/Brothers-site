import Header from "@/components/Header";
import HeroCanvas from "@/components/HeroCanvas";
import ValueProposition from "@/components/ValueProposition";
import MenuGrid from "@/components/MenuGrid";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCanvas />
        <div className="section-divider" />
        <ValueProposition />
        <div className="section-divider" />
        <MenuGrid />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
