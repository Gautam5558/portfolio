"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ToggleMode from "@/components/ToggleMode";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState<number | string>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const wrapperRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (isMounted) {
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
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Loader />
      <ToggleMode>
        <Navbar id={id} />
        <div ref={wrapperRef}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </ToggleMode>
    </>
  );
}
