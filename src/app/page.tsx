import About from "@/components/HomeComp/About/About";
import Booking from "@/components/HomeComp/Booking/Booking";
import Hero from "@/components/HomeComp/Hero/Hero";
import Partner from "@/components/HomeComp/Partner/Partner";
import Posts from "@/components/HomeComp/Posts/Posts";
import Services from "@/components/HomeComp/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto max-w-[1250px] px-4">
        <Services />
        <Partner />
      </div>
      <div className="bg-[#141414]">
        <div className="container mx-auto max-w-[1250px] px-4">
          <About />
          <Booking />
          <Posts />
        </div>
      </div>
    </div>
  );
}
