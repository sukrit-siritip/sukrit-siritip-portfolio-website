import { ActiveSectionProvider } from "@/components/ActiveSection";
import ConstellationBackground from "@/components/ConstellationBackground";
import MagneticCursor from "@/components/MagneticCursor";
import MobileBar from "@/components/MobileBar";
import ScrollProgress from "@/components/ScrollProgress";
import { About, Certifications, Contact, Education, Experience, Projects, SideProjects, Skills } from "@/components/Sections";
import Sidebar from "@/components/Sidebar";
import { FEATURES } from "@/lib/data";

export default function Home() {
  return (
    <ActiveSectionProvider>
      <div className="relative min-h-screen bg-page">
        {FEATURES.interactiveBackground && <ConstellationBackground />}
        <MobileBar />
        <div className="relative z-[1] mx-auto box-content flex max-w-[1200px] flex-wrap gap-x-[clamp(32px,6vw,96px)] gap-y-4 px-[clamp(20px,5vw,56px)]">
          <Sidebar />
          <main className="flex min-w-0 flex-[1.4_1_460px] flex-col gap-8 pt-6 pb-16 tab:gap-[clamp(36px,4vw,52px)] tab:pt-8 wide:pt-[clamp(24px,9vh,96px)]">
            <About />
            <Projects />
            <SideProjects />
            <Experience />
            <Skills />
            <Education />
            <Certifications />
            <Contact />
          </main>
        </div>
      </div>
      <ScrollProgress />
      {FEATURES.customCursor && <MagneticCursor />}
    </ActiveSectionProvider>
  );
}
