"use client";

import { useState } from "react";
import { About } from "@/components/nexa/about";
import { Capabilities } from "@/components/nexa/capabilities";
import { Community } from "@/components/nexa/community";
import { Experience } from "@/components/nexa/experience";
import { FinalCTA } from "@/components/nexa/final-cta";
import { Footer } from "@/components/nexa/footer";
import { Hero } from "@/components/nexa/hero";
import { Introduction } from "@/components/nexa/introduction";
import { Journal } from "@/components/nexa/journal";
import { Loader } from "@/components/nexa/loader";
import { Marquee } from "@/components/nexa/marquee";
import { Navbar } from "@/components/nexa/navbar";
import { SmoothScroll } from "@/components/nexa/smooth-scroll";
import { SocialCTA } from "@/components/nexa/social-cta";

export default function Home() {
  const [revealed, setRevealed] = useState(false);

  return (
    <SmoothScroll>
      <Loader onReveal={() => setRevealed(true)} />

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero active={revealed} />
          <Marquee />
          <Introduction />
          <Capabilities />
          <Experience />
          <Community />
          <Journal />
          <About />
          <SocialCTA />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
