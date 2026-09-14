import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HostEmbedSection } from "@/components/HostEmbedSection";
import { Nav } from "@/components/Nav";
import { RiffleFeature } from "@/components/RiffleFeature";
import { Starfield } from "@/components/Starfield";
import { StudioSection } from "@/components/StudioSection";

export default function Home() {
  return (
    <>
      <Starfield />
      <Nav />
      <main>
        <Hero />
        <StudioSection />
        <RiffleFeature />
        <HostEmbedSection />
      </main>
      <Footer />
    </>
  );
}
