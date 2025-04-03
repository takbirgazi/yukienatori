import Booking from "@/components/HomeComp/Booking/Booking";
import Image from "next/image";

const Packages = () => {
    return (
        <div className="bg-[#141414] -mt-[68px]">
            <div className="container mx-auto max-w-[1250px] px-4 pb-14">
                <div className='flex w-full justify-center items-center pt-28'>
                    <h2 className='text-white text-center uppercase font-bold py-4 text-2xl md:text-5xl tracking-widest'>PACKAGES AND SPRING SPECIALS</h2>
                </div>
                <div className="pt-10">
                    <div className="flex justify-center">
                        <figure>
                            <Image src="https://yukienatori-newyork.com/wp-content/uploads/2025/03/Spring-specials-724x1024.jpg" height={850} width={680} alt="Image" />
                        </figure>
                    </div>
                    <div className="py-5 flex flex-col gap-10">
                        <div>
                            <h2 className="text-white text-xl md:text-2xl tracking-wider uppercase font-bold text-center py-4">Massage packages</h2>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-white text-lg font-bold text-center py-4">Swedish massage</h2>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex justify-between text-lg items-center text-white "><span>Regular price</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$120</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>3 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$90 each</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>6 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$80 each</span></p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-white text-lg font-bold text-center py-4">Deep tissue massage/Hot stones massage/Aromatherapy</h2>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex justify-between text-lg items-center text-white "><span>Regular price</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$135</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>3 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$110 each</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>6 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$100 each</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-white text-xl md:text-2xl tracking-wider uppercase font-bold text-center py-4">Facial packages</h2>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/3">
                                    <h2 className="text-white text-lg font-bold text-center py-4">European facial</h2>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex justify-between text-lg items-center text-white "><span>Regular price</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$120</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>3 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$90 each</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>6 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$80 each</span></p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <h2 className="text-white text-lg font-bold text-center py-4">Microdermabrasion</h2>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex justify-between text-lg items-center text-white "><span>Regular price</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$135</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>3 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$110 each</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>6 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$100 each</span></p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <h2 className="text-white text-lg font-bold text-center py-4">Hydra facial</h2>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex justify-between text-lg items-center text-white "><span>Regular price</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$135</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>3 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$110 each</span></p>
                                        <p className="flex justify-between text-lg items-center text-white "><span>6 Treatments</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span>$100 each</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="py-4">
                            <h2 className="text-[#8DBFBE] text-2xl md:text-5xl text-center py-4">HYDRA FACIAL</h2>
                            <div className="flex flex-col gap-2">
                                <p className="flex justify-between text-2xl items-center text-white "><span>Hydra-Facial 1 Session</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span className="text-[#ca8fc7] font-bold">$120</span></p>
                                <p className="flex justify-between text-2xl items-center text-white "><span>Hydra-Facial 3 Session</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span className="text-[#ca8fc7] font-bold">$120</span></p>
                                <p className="flex justify-between text-2xl items-center text-white "><span>Hydra-Facial 5 Session</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span className="text-[#ca8fc7] font-bold">$160 each</span></p>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="text-[#8DBFBE] text-2xl md:text-5xl text-center py-4">HEAD SPA</h2>
                            <div className="flex flex-col gap-2">
                                <p className="flex justify-between text-2xl items-center text-white "><span>Head Spa Healing Course 60min 3 tickets</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span className="text-[#ca8fc7] font-bold">$526 (Save $59)</span></p>
                                <p className="flex justify-between text-2xl items-center text-white "><span>Head Spa Healing Course 60min 5 tickets</span> <span className="grow border-t-2 border-dotted mt-1 mx-3"></span> <span className="text-[#ca8fc7] font-bold">$780 (Save $195)</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-5">
                        <a href="tel:6466534924" className="px-16 uppercase hover:bg-[#bba468] transition-all duration-500 py-2 border border-[#D79B89] rounded-sm bg-black text-white hover:text-black tracking-widest text-lg" >Call Us</a>
                    </div>
                </div>
                <Booking />
            </div>
        </div>
    );
};

export default Packages;