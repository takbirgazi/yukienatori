import Image from "next/image";
import owner from "@/assets/images/about/owner.jpg";

const Owner = () => {
    return (
        <div className="mt-24">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-6xl text-white font-medium tracking-widest">YUKIE <br /> NATORI</h2>
                        <p className="text-white text-lg pt-10">OWNER <br /> INTERNATIONAL <br /> BEAUTY CONSULTANT</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <figure>
                        <Image src={owner} height={680} width={320} alt="Owner" />
                    </figure>
                </div>
            </div>
            <div className="py-5">
                <div>
                    <div>
                        <p className="text-white text-lg py-0.5">-Empire Nail School of Tokyo Ginza, Aoyama, Dean</p>
                        <p className="text-white text-lg py-0.5">-N.Y Cosmo Co,Ltd, A Representative Director</p>
                        <p className="text-white text-lg py-0.5">-The State of New York Nail Specialist License, New York</p>
                        <p className="text-white text-lg py-0.5">-The State of New York Cosmetology Licence, New York</p>
                        <p className="text-white text-lg py-0.5">-NPO corp. of Japan Nailist (Specialist) Association main office, an official member, Japan</p>
                        <p className="text-white text-lg py-0.5">-Official Proctor for qualifying nail specialty exam held by NPO corp. of Japan Nailist (Specialist) Association, Japan</p>
                        <p className="text-white text-lg py-0.5">-Official Judge for Nail & Beauty Contests held by NPO corp. of Japan Nailist (Specialist) Association, Japan</p>
                        <p className="text-white text-lg py-0.5">-Official Judge for International Nail Expo held by NPO corp. of Japan Nailist (Specialist) Association, Japan</p>
                        <p className="text-white text-lg py-0.5">-Guest Instructor at PAN MAKEUP SCHOOL in Minami-Aoyama in Tokyo, Japan</p>
                        <p className="text-white text-lg py-0.5">-Japanese Cosmetologist License, Japan</p>
                        <p className="text-white text-lg py-0.5">-Administer of Japanese Cosmetologist License, Japan</p>
                        <p className="text-white text-lg py-0.5">-License for Hair Adviser, Japan</p>
                        <p className="text-white text-lg py-0.5">-License for Japan Association of Kimono Dresser, Japan</p>
                        <p className="text-white text-lg py-0.5">-License for Aroma Therapist, Japan</p>
                        <p className="text-white text-lg py-0.5">-License for Reflexologist, Japan</p>
                        <p className="text-white text-lg py-0.5">-License for Color Coordinate, Japan</p>
                    </div>
                    <p className="py-7 text-white text-lg">Business:</p>
                    <div className="pt-3 flex flex-col gap-1">
                        <p className="flex items-center gap-2 text-white">
                            <span className="h-3.5 w-3.5 bg-white rounded-full"></span>
                            <span className="text-sm">Beauty Salon Operation Japan/America/China</span>
                        </p>
                        <p className="flex items-center gap-2 text-white">
                            <span className="h-3.5 w-3.5 bg-white rounded-full"></span>
                            <span className="text-sm">Beauty School Operation Japan/China</span>
                        </p>
                        <p className="flex items-center gap-2 text-white">
                            <span className="h-3.5 w-3.5 bg-white rounded-full"></span>
                            <span className="text-sm">Overseas Study Placement</span>
                        </p>
                        <p className="flex items-center gap-2 text-white">
                            <span className="h-3.5 w-3.5 bg-white rounded-full"></span>
                            <span className="text-sm">ASA College New York Japan Official Distributor</span>
                        </p>
                        <p className="flex items-center gap-2 text-white">
                            <span className="h-3.5 w-3.5 bg-white rounded-full"></span>
                            <span className="text-sm">Christine Valmy Esthetic School Japan</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owner;