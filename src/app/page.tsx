import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import CreativeWork from "@/components/CreativeWork";
import Events from "@/components/Events";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import SiteNav from "@/components/SiteNav";
import { structuredDataJson } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      {/*
        Person / WebSite / ProfilePage graph. A plain <script> rather than
        next/script: this is data for crawlers, not code to schedule.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson() }}
      />

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
