import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FixButton from "../components/FixButton";

function Layout() {
  return (
    <div className="min-h-screen w-full bg-[hsl(220,33%,98%)]">
      <Navbar />
      <FixButton />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
