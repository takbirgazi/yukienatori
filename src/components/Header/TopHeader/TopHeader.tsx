import Link from "next/link";

const TopHeader = () => {
    return (
        <div className="fixed w-full top-0 flex justify-center items-center py-2 bg-[#e0e0e0]">
            <div className="flex justify-center items-center gap-10">
                <p className="font-roboto">Spring Specials</p>
                <Link href="/" className="font-inter bg-[#707070] px-4 py-1 font-medium text-white hover:bg-[#707070ba] transition-all duration-300 ">View More</Link>
            </div>
        </div>
    );
};

export default TopHeader;