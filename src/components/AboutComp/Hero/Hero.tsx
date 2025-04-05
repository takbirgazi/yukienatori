import Image from "next/image";
import banner from "@/assets/images/aboutBanner.jpeg";

const Hero = () => {
    return (
        <div className="flex gap-5 justify-between flex-col md:flex-row pt-20 pb-12">
            <div className="w-full md:w-4/12 relative pt-20 md:pt-0">
                <h2 className="bg-[#141414] py-2 px-14 text-5xl text-white font-bold tracking-widest md:absolute text-center bottom-0 -right-2/6">ABOUT</h2>
            </div>
            <div className="w-full md:w-8/12">
                <figure>
                    <Image src={banner} width={1080} height={350} alt="Hero" />
                </figure>
            </div>
        </div>
    );
};

export default Hero;