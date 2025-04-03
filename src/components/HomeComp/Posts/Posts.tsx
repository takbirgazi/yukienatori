import SectionHeader from "@/components/CommonComp/SectionHeader/SectionHeader";
import Link from "next/link";
import PostCard from "./PostCard/PostCard";


const Posts = () => {
    const headingData = {
        heading: "RECENTLY POSTED",
        textColor: "white"
    };
    const posts = [
        {
            id: 1,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2025/02/GiftCardNYCSpa-300x232.webp`,
            title: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation`,
            desc: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for.Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for`,
        },
        {
            id: 2,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2024/03/anticellulite-massage-near-me-300x200.jpg`,
            title: `Anti-Cellulite Massage: Solution For The Smooth Skin`,
            desc: `Anti-Cellulite Massage: Solution For The Smooth Skin Anti-cellulite massage is commonly recommended as a highly effective solution for diminishing cellulite.`,
        },
        {
            id: 3,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2024/02/body-treatments-in-the-spa-300x200.jpeg`,
            title: `Body Treatments: The Best Way To Revitalize Your Body`,
            desc: `Body Treatments: The Best Way To Revitalize Your Body Body treatments involve a range of therapies and techniques tailored to. Body Treatments: The Best Way To Revitalize Your Body Body treatments involve a range of therapies and techniques tailored to`,
        }
    ]

    return (
        <div className="pb-24">
            <SectionHeader SectionHeaderData={headingData} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5 md:pb-9">
                {
                    posts.map(post => <PostCard key={post.id} postCardData={post} />)
                }
            </div>
            <div className="flex justify-center items-center">
                <Link href="/blog" className='uppercase border px-4.5 py-3.5 border-[#C2AA6C] text-white font-bold rounded-sm hover:bg-[#C2AA6C] bg-transparent transition-all duration-300' >View All</Link>
            </div>
        </div>
    );
};

export default Posts;