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
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2025/02/GiftCardNYCSpa-300x232.webp`,
            title: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation`,
            desc: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for.Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for`,
        },
        {
            id: 3,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2025/02/GiftCardNYCSpa-300x232.webp`,
            title: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation`,
            desc: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for.Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for`,
        },
        {
            id: 4,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2025/02/GiftCardNYCSpa-300x232.webp`,
            title: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation`,
            desc: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for.Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for`,
        },
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
                <Link href={`/`} className='uppercase border px-4.5 py-3.5 border-[#C2AA6C] text-white font-bold rounded-sm hover:bg-[#C2AA6C] bg-transparent transition-all duration-300' >View All</Link>
            </div>
        </div>
    );
};

export default Posts;