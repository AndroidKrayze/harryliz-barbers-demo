import { About } from "@/components/About";
import { ClosingCta, Footer } from "@/components/Closing";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Visit />
      <ClosingCta />
      <Footer />
    </main>
  );
}
