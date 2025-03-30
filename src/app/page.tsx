import Hero from "@/components/HomeComp/Hero/Hero";
import Services from "@/components/HomeComp/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto max-w-[1250px] px-4">
        <Services />
      </div>
    </div>
  );
}
