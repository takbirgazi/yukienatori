import SectionHeader from "@/components/CommonComp/SectionHeader/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const Partner = () => {
    const headingData = {
        heading: "PUBLISHED IN",
        textColor: "black"
    };

    return (
        <div className="py-5">
            <SectionHeader SectionHeaderData={headingData} />
            <div>
                <figure>
                    <Image className="md:max-w-5xl mx-auto" width={1250} height={480} src="https://yukienatori-newyork.com/wp-content/uploads/2021/10/fb-1-e1628672112524-1024x358.jpg" alt="Partner" />
                </figure>
            </div>
            <div className="flex flex-col gap-12 justify-center items-center pb-12">
                <div className="flex justify-center items-center">
                    <Link className="px-20 uppercase hover:bg-[#8DBFBE] transition-all duration-500 py-3.5 rounded-xs bg-black text-white" href="/" >Call Us</Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link className="md:px-20 px-4 uppercase hover:bg-[#8DBFBE] transition-all duration-500 py-3.5 rounded-xs bg-black text-white text-center" href="/" >BOOK MASSAGE OR FACIAL ONLINE</Link>
                </div>
            </div>
        </div>
    );
};

export default Partner;