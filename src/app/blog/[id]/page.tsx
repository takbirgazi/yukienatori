import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const page = () => {
    return (
        <div className="bg-[#141414] -mt-[68px] pt-14">
            <div className="container mx-auto max-w-[1250px] px-4 flex flex-col md:flex-row justify-between gap-10 py-20">
                <div className="w-full md:w-9/12">
                    <h2 className="text-white text-5xl font-bold">Anti-Cellulite Massage: Solution For The Smooth Skin</h2>
                    <div className="flex flex-col gap-4 py-4">
                        <div className="flex justify-center">
                            <figure>
                                <Image src="https://yukienatori-newyork.com/wp-content/uploads/2024/03/anticellulite-massage-near-me.jpg" height={480} width={750} alt="Image" />
                            </figure>
                        </div>
                        <p className="text-white">Anti-cellulite massage is commonly recommended as a highly effective solution for diminishing cellulite and enhancing the overall skin appearance.</p>
                        <p className="text-white">Cellulite often affects people of all shapes and sizes and is more prevalent in women due to differences in the structure of their connective tissues. Cellulite is characterized by the dimpled or lumpy appearance of the skin, typically found on the buttocks, thighs, and hips.</p>
                        <p className="text-white">Despite a healthy lifestyle, cellulite can persist, frustrating those seeking to reduce its appearance. Most people are unsatisfied with how their bodies and skin look with cellulite, and it can affect their confidence, especially women’s self-esteem and body image.</p>
                    </div>
                    <div className="border-t border-white flex justify-between py-5 mt-20">
                        <Link className="text-white flex items-center gap-1" href={`/blog/1`}> <MdArrowRightAlt className="rotate-180" /> Previous Post</Link>
                        <Link className="text-white flex items-center gap-1" href={`/blog/3`}>Next Post <MdArrowRightAlt /></Link>
                    </div>
                </div>
                <div className="w-full md:w-3/12">
                    <div>
                        <input className="bg-white p-3.5 w-full rounded-xs" type="text" placeholder="Search..." />
                    </div>
                    <h2 className="text-white py-8 text-4xl font-semibold">Recent Posts</h2>
                    <div className="flex flex-col gap-3">
                        <Link className="text-white" href={`/blog/1`}>Anti-Cellulite Massage: Solution For The Smooth Skin</Link>
                        <Link className="text-white" href={`/blog/2`}>Anti-Cellulite Massage: Solution For The Smooth Skin</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;