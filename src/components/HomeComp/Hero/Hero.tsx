import HeroImage from "@/assets/images/heroHome.webp";

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url('${HeroImage.src}')` }} className="bg-cover bg-center bg-no-repeat flex items-center justify-center -mt-[68px]">
            <div className="h-96 md:min-h-[550px] flex justify-center items-center flex-col gap-5">
                <h2 className="text-center text-white selection:text-black selection:bg-white text-3xl md:text-5xl font-bold tracking-widest">YUKIE NATORI NEW YORK</h2>
                <p className="text-center text-white selection:text-black selection:bg-white tracking-[15px]">SALON & SPA</p>
            </div>
        </div>
    );
};

export default Hero;