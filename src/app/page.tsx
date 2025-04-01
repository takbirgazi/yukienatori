import Hero from "@/components/HomeComp/Hero/Hero";
import Partner from "@/components/HomeComp/Partner/Partner";
import Services from "@/components/HomeComp/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto max-w-[1250px] px-4">
        <Services />
        <Partner />
      </div>
    </div>
  );
}
