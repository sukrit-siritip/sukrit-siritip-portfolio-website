import { ActiveSectionProvider } from "@/components/ActiveSection";
import ConstellationBackground from "@/components/ConstellationBackground";
import MagneticCursor from "@/components/MagneticCursor";
import MobileBar from "@/components/MobileBar";
import ScrollProgress from "@/components/ScrollProgress";
import { About, Contact, Education, Experience, Projects, Skills } from "@/components/Sections";
import Sidebar from "@/components/Sidebar";
import { FEATURES } from "@/lib/data";

export default function Home() {
  return (
    <ActiveSectionProvider>
      <div className="relative min-h-screen bg-page">
        {FEATURES.interactiveBackground && <ConstellationBackground />}
        <MobileBar />
        <div className="relative z-[1] mx-auto box-content flex max-w-[1200px] flex-wrap gap-[clamp(32px,6vw,96px)] px-[clamp(20px,5vw,56px)]">
          <Sidebar />
          <main className="flex min-w-0 flex-[1.4_1_460px] flex-col gap-[clamp(72px,10vw,112px)] pt-[clamp(24px,9vh,96px)] pb-16">
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
      <ScrollProgress />
      {FEATURES.customCursor && <MagneticCursor />}
    </ActiveSectionProvider>
  );
}
