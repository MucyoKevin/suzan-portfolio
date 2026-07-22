import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import CreativeWork from "@/components/CreativeWork";
import Events from "@/components/Events";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import SiteNav from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <SiteNav />

      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <SelectedWork />
        <CreativeWork />
        <Events />
        <Approach />
      </main>

      <Contact />
    </>
  );
}
