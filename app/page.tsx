import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Studies from "@/components/Studies";

export default function Home() {
  return (
    <div className="snap-container">
      <Nav />
      <Hero />
      <Projects />
      <Studies />
    </div>
  );
}
