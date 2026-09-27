import { Board } from "@/components/Board";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Performance } from "@/components/Performance";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Mission />
        <Founder />
        <Performance />
        <Board />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
