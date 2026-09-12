import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Journey />
      <Contact />
    </>
  );
}
