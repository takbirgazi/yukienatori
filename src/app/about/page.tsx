import Floor from "@/components/AboutComp/Floor/Floor";
import Hero from "@/components/AboutComp/Hero/Hero";
import Owner from "@/components/AboutComp/Owner/Owner";
import banner from "@/assets/images/about/aboutBanner.jpeg";
import floorImage from "@/assets/images/about/floorImage.jpeg";
import secondFloorImage from "@/assets/images/about/secondFloorImage.jpeg";
import image_1 from "@/assets/images/about/floorImage_1.jpeg";
import image_2 from "@/assets/images/about/floorImage_2.jpeg";
import image_3 from "@/assets/images/about/floorImage_3.jpeg";
import image_4 from "@/assets/images/about/floorImage_4.jpeg";
import image_5 from "@/assets/images/about/floorImage_5.jpeg";
import image_6 from "@/assets/images/about/floorImage_6.jpeg";

const About = () => {
    const heroData = {
        heading: "ABOUT",
        imageUrl: banner.src,
    }
    const floorData = [
        {
            id: 1,
            heading: "FIRST FLOOR",
            subtitle: "◎ RECEPTION ◎ PRODUCT SALESN ◎ WAITING LOUNGEN ◎ BAR COUNTERN ◎ SPA PARTY & EVENT",
            headingColor: "#CA8FC7",
            imageUrl: floorImage.src,
            description: `The founder of Yukie Natori New York Salon & Spa, is dedicated to provide Japanese style nail arts to New York City for over 25 years. Japanese style nail arts is not just taking care of nails, but nail services as a whole including pre & after care services. Her passion results the quality of customer services that it is rare to see at a nail salon any other places in New York City. We has over 800 variety of color selections. Yukie Nail is famously known for Gel Nail, and will continuously be the one of the best Gel Nail service provider in New York City. A tailored design approach that is both bold and intricate. Warm, detail-oriented service extending from the beautiful Japanese culture.`,
            floorImages: [
                {
                    id: 1,
                    imageUrl: image_1.src,
                    alt: "Floor 1",
                },
                {
                    id: 2,
                    imageUrl: image_2.src,
                    alt: "Floor 2",
                },
                {
                    id: 3,
                    imageUrl: image_3.src,
                    alt: "Floor 3",
                },
                {
                    id: 4,
                    imageUrl: image_4.src,
                    alt: "Floor 1",
                },
                {
                    id: 5,
                    imageUrl: image_5.src,
                    alt: "Floor 2",
                },
                {
                    id: 6,
                    imageUrl: image_6.src,
                    alt: "Floor 3",
                },
            ],
            floorDesc: `Complimentary drinks and Snacks are served at the bar. Red wine, White wine, Organic Japanese green tea, Black tea, Coffee, Ice lemon tea, Ice green tea, Fresh lemon water Nuts, rice crackers, dried fruits`,
        },
        {
            id: 2,
            heading: "SECOND FLOOR",
            subtitle: "◎ HAIR SERVICE ◎ MAKE-UP ◎ PRIVATE HEAD SPA ROOM ◎ PRIVATE VIP NAIL SERVICE ◎ MEDI-SPA(LASER HAIR REMOVAL, HYDRA FACIAL)",
            headingColor: "#C2AA6C",
            imageUrl: secondFloorImage.src,
            description: `Yukie Natori constantly strives to improve the quality of both skill and service, and seeks to contribute to both the individual and society as proud hair stylists. A tailored design approach that is both bold and intricate. Warm, detail-oriented service extending from the beautiful Japanese culture. Our Hair Salon is the bridge where stylists and customers meet cultural differences with the same desires for high quality of services. Yukie Natori has transported Japanese stylists who has experienced for over 10 years to New York City. Stylists are very articulate and capable of achieving customer’s desired hair style, and location is easily accessible from anywhere in the Manhattan, Our Hair Salon is very convenient salon for all working professionals.`,
            floorImages: [
                {
                    id: 1,
                    imageUrl: image_1.src,
                    alt: "Floor 1",
                },
                {
                    id: 2,
                    imageUrl: image_2.src,
                    alt: "Floor 2",
                },
                {
                    id: 3,
                    imageUrl: image_3.src,
                    alt: "Floor 3",
                },
                {
                    id: 4,
                    imageUrl: image_4.src,
                    alt: "Floor 1",
                },
                {
                    id: 5,
                    imageUrl: image_5.src,
                    alt: "Floor 2",
                },
                {
                    id: 6,
                    imageUrl: image_6.src,
                    alt: "Floor 3",
                },
            ],
            floorDesc: `Complimentary drinks and Snacks are served at the bar. Red wine, White wine, Organic Japanese green tea, Black tea, Coffee, Ice lemon tea, Ice green tea, Fresh lemon water Nuts, rice crackers, dried fruits`,
        },
        {
            id: 3,
            heading: "HEALING SPA ＆SAUNA",
            subtitle: "Massage, body wrap, body scrub, facial, waxing. Steam sauna, water bath, shower room, relaxation room. Salt floating pool. Salt floating cabins.",
            headingColor: "#8DBFBE",
            imageUrl: floorImage.src,
            description: `We are committed to creating a euphoric atmosphere that is conducive to renewing one’s mind, body, and soul. The philosophy at our spa is to provide the utmost care, catered to your needs and desires. No matter what treatment you select, we will provide an inspiring and tranquil experience that will leave you fulfilled and renewed.`,
            floorImages: [
                {
                    id: 1,
                    imageUrl: image_1.src,
                    alt: "Floor 1",
                },
                {
                    id: 2,
                    imageUrl: image_2.src,
                    alt: "Floor 2",
                },
                {
                    id: 3,
                    imageUrl: image_3.src,
                    alt: "Floor 3",
                },
                {
                    id: 4,
                    imageUrl: image_4.src,
                    alt: "Floor 1",
                },
                {
                    id: 5,
                    imageUrl: image_5.src,
                    alt: "Floor 2",
                },
                {
                    id: 6,
                    imageUrl: image_6.src,
                    alt: "Floor 3",
                },
            ],
            floorDesc: ``,
        },
    ]
    return (
        <div className="bg-[#141414] -mt-[68px]">
            <Hero heroData={heroData} />
            <div className="container mx-auto max-w-[1250px] px-4">
                <div className="flex flex-col md:flex-row gap-10">
                    <p className="w-full md:w-1/2 text-white">A blissful escape awaits you at our spa. where you will be greeted by welcoming staff, light relaxing music, and a peaceful aura. Our staff will kindly offer you a selection of fresh lemon waters, red and white wine, organic green tea prior to entering your luxurious experience. Whether you are enjoying a relaxing massage, facial, hair, nail, or any other services, our staff will consult you to learn what your specific needs are and will evaluate them accordingly. Our services have been thoughtfully conceived to allow for your interior and exterior beauty to shine. Arrive at our centrally located Midtown Salon & Spa and let us bring you into a euphoric realm while pampering you.</p>
                </div>
                <Owner />
                {
                    floorData.map(floor => <Floor key={floor.id} floorData={floor} />)
                }
            </div>
        </div>
    );
};

export default About;