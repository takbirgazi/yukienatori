import Hero from "@/components/AboutComp/Hero/Hero";

const About = () => {
    return (
        <div className="bg-[#141414] -mt-[68px]">
            <Hero />
            <div className="container mx-auto max-w-[1250px] px-4">
                <div className="flex flex-col md:flex-row gap-10">
                    <p className="w-full md:w-1/2 text-white">A blissful escape awaits you at our spa. where you will be greeted by welcoming staff, light relaxing music, and a peaceful aura. Our staff will kindly offer you a selection of fresh lemon waters, red and white wine, organic green tea prior to entering your luxurious experience. Whether you are enjoying a relaxing massage, facial, hair, nail, or any other services, our staff will consult you to learn what your specific needs are and will evaluate them accordingly. Our services have been thoughtfully conceived to allow for your interior and exterior beauty to shine. Arrive at our centrally located Midtown Salon & Spa and let us bring you into a euphoric realm while pampering you.</p>
                </div>
            </div>
        </div>
    );
};

export default About;