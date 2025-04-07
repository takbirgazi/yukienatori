import Hero from "@/components/AboutComp/Hero/Hero";
import banner from "@/assets/images/about/floorImage.jpeg";
import Image from "next/image";
import image_1 from "@/assets/images/about/floorImage_1.jpeg";
import image_2 from "@/assets/images/about/floorImage_2.jpeg";
import image_3 from "@/assets/images/about/floorImage_3.jpeg";
import image_4 from "@/assets/images/about/floorImage_4.jpeg";
import image_5 from "@/assets/images/about/floorImage_5.jpeg";
import image_6 from "@/assets/images/about/floorImage_6.jpeg";

const Gallery = () => {
    const heroData = {
        heading: "GALLERY",
        imageUrl: banner.src,
    }
    const galleryData = [
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
    ]

    return (
        <div className="bg-[#141414] -mt-[68px]">
            <Hero heroData={heroData} />
            <div className="container mx-auto max-w-[1250px] px-4">
                <div className="flex flex-col md:flex-row gap-10">
                    <p className="w-full md:w-1/2 text-white text-lg">We share most uptodate information of Yukie Natori New York.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
                    {
                        galleryData.map(image => <figure key={image.id} className="w-full">
                            <Image src={image.imageUrl} width={1080} height={350} alt={image.alt} className="w-full h-auto" />
                        </figure>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;