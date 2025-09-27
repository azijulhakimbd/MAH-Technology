
import Image from "next/image";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";

export default function Home() {
  return (
    <div>
     {/* Hero Spotlight */}
     <Hero/>
     {/* About Section */}
     <AboutSection />
    </div>
 
  );
}
