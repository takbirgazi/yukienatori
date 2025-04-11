import ServiceCarousal from '@/components/CommonComp/ServiceCarousal/ServiceCarousal';
import HeroImage from "@/assets/images/heroHome.webp";
import HeroImage2 from "@/assets/images/about/aboutBanner.jpeg";

const page = () => {
    const carousalData = {
        heading: "Yukie Natori SPA",
        desc: "Re-center yourself & nurture your mind, body & spirit",
        slag: "/",
        buttonData: "Our Service",
        buttonBg: "#8DBFBE",
        slideImages: [
            {
                id: 1,
                imageUrl: HeroImage.src
            },
            {
                id: 2,
                imageUrl: HeroImage2.src
            },
            {
                id: 3,
                imageUrl: HeroImage.src
            },
            {
                id: 4,
                imageUrl: HeroImage2.src
            },
        ]
    }
    return (
        <div className='pb-40'>
            <ServiceCarousal ServiceCarousalData={carousalData} />
        </div>
    );
};

export default page;