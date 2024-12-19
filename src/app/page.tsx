import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Image
        src={"/projects/dev-overflow.png"}
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
}
