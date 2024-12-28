"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState<number | string>(0);

  const wrapperRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const componentsArray = Array.from(
      wrapperRef.current?.children as HTMLCollectionOf<HTMLElement>
    );
    componentsArray.forEach((component) => {
      observer.observe(component);
    });
  }, []);

  return (
    <>
      <Navbar id={id} />
      <div ref={wrapperRef}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
