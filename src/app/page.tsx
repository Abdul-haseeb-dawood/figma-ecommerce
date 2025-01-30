import BestsellerProducts from "./components/BestSelling-products";
import EditorPic from "./components/EditorPic";
import HeroSection from "./components/Hero-section";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";


export default function Home() {
  return (
   <div>
    
    <HeroSection/>
    <EditorPic/>
    <BestsellerProducts/>
    <Hero1/>
    <Hero2 />
    <Hero3/>
  
   </div>
  );
}
