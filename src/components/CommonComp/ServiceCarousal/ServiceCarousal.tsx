"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceCarousalType } from './ServiceCarousalType';
import styles from "./ServiceCarousal.module.css";


const ServiceCarousal: React.FC<ServiceCarousalType> = ({ ServiceCarousalData }) => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: "linear",
        arrows: false
    };

    return (
        <div>
            <div className="relative overflow-hidden cursor-pointer -mt-[68px] -z-10">
                <Slider {...settings}>
                    {
                        ServiceCarousalData.slideImages.map((data, index) => (
                            <div key={index} className="relative ">
                                <figure className="h-96 md:h-[80vh] overflow-hidden">
                                    <Image
                                        className={`w-full h-full object-cover ${styles.carousalImageAnim}`}
                                        src={data.imageUrl}
                                        width={1280}
                                        height={640}
                                        alt="Carousel"
                                    />
                                </figure>
                                <div className="absolute top-0 left-0 bottom-0 w-full flex justify-center items-center bg-[#00000052]"></div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="absolute overflow-hidden top-1/3 left-0  w-full flex justify-center items-center">
                <div className="flex flex-col gap-5 md:gap-10">
                    <h2 className="text-white text-center text-3xl md:text-6xl font-bold">{ServiceCarousalData.heading}</h2>
                    <p className="text-white text-center text-xl md:text-3xl">{ServiceCarousalData.desc}</p>
                    <div className="flex justify-center items-center">
                        <button
                            className={`px-7 py-3 cursor-pointer transition duration-700 font-bold text-base rounded-sm`}
                            style={{
                                backgroundColor: ServiceCarousalData.buttonBg,
                                color: "black",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "white";
                                e.currentTarget.style.color = "black";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = ServiceCarousalData.buttonBg;
                                e.currentTarget.style.color = "black";
                            }}
                        >
                            {ServiceCarousalData.buttonData}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCarousal;