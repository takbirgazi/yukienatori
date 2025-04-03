import PostCard from "@/components/HomeComp/Posts/PostCard/PostCard";

const About = () => {
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
        },
        {
            id: 4,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2025/02/GiftCardNYCSpa-300x232.webp`,
            title: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation`,
            desc: `Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for.Top Valentine’s Day Spa Packages NYC for Ultimate Relaxation Discover the best Valentine’s Day spa packages in NYC for`,
        },
        {
            id: 5,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2024/03/anticellulite-massage-near-me-300x200.jpg`,
            title: `Anti-Cellulite Massage: Solution For The Smooth Skin`,
            desc: `Anti-Cellulite Massage: Solution For The Smooth Skin Anti-cellulite massage is commonly recommended as a highly effective solution for diminishing cellulite.`,
        },
        {
            id: 6,
            imageUrl: `https://yukienatori-newyork.com/wp-content/uploads/2024/02/body-treatments-in-the-spa-300x200.jpeg`,
            title: `Body Treatments: The Best Way To Revitalize Your Body`,
            desc: `Body Treatments: The Best Way To Revitalize Your Body Body treatments involve a range of therapies and techniques tailored to. Body Treatments: The Best Way To Revitalize Your Body Body treatments involve a range of therapies and techniques tailored to`,
        }
    ]

    return (
        <div className="bg-[#141414] -mt-[68px]">
            <div className="container mx-auto max-w-[1250px] px-4">
                <div className='flex w-full justify-center items-center py-28'>
                    <h2 className='text-white text-center uppercase font-bold py-4 text-5xl tracking-widest'>Blog</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5 md:pb-32">
                    {
                        posts.map(post => <PostCard key={post.id} postCardData={post} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;