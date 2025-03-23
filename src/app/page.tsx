
import Hero from "./components/Hero";
import Work from "./pages/work/work"
import TechStack from "./pages/TechStack/TechStack"
import TapSection from "./components/TapeSection"
import About from "./pages/About/About"
import GetInTouch from "./pages/Contact/GetInTouch"
export default function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <TechStack/>
      <TapSection/>
      <About/>
     
      <GetInTouch/>
    </div>
  );
}
