import About from "@/components/Landing/About";
import Calls from "@/components/Landing/Calls";
import Hero from "@/components/Landing/Hero";
import Nav from "@/components/Landing/Nav";
import Doctors from "@/components/Landing/Doctors";
import Footer from "@/components/Landing/Footer";

export default function Home() {
  return (
    <section>
      <div>
        <Nav />
        <Hero />
        <About />
        <Calls />
        <Doctors />
        <Footer />
      </div>
    </section>
  );
}
