import SectionHeader from "@/components/CommonComp/SectionHeader/SectionHeader";
import Image from "next/image";
import Link from "next/link";


const About = () => {
    const headingData = {
        heading: "JOSIANE LAURE HEAD SPA BY YUKIE NATORI NEW YORK",
        textColor: "white"
    };
    const aboutCont = [
        "A hair stylist and hair diagnostician, owner Yukie Natori encountered Josiane Laure’s head spas at Salon de Sephola, a legendary luxury spa in Japan 20 years ago. In 2019, she received direct instruction and certification in this method from Josiane Laure.",
        `Born in the rich lands of France and certified organic at the highest level, her high quality, highly concentrated aromatic oils deeply penetrate and work on your mind and body.`,
        `The Josian Laure method stimulates the energy points of the head and activates the entire body because the head is the place in the body where nerves and blood vessels are concentrated. `,
        `This luxurious treatment is the only one available here in the United States. We invite you to experience Madame Josiane’s method, which states,  “being physically healthy will lead to true beauty.” `
    ]

    return (
        <div>
            <SectionHeader SectionHeaderData={headingData} />
            <div>
                <div className="flex justify-center items-center">
                    <figure>
                        <Image className="md:max-h-96 md:max-w-xl" src="https://yukienatori-newyork.com/wp-content/uploads/2022/10/head-spa.jpg" height={450} width={680} alt="About" />
                    </figure>
                </div>
                <div className="flex flex-col gap-4 py-8">
                    {
                        aboutCont.map((content, ind) => <p key={ind} className="text-white font-medium text-lg max-w-[1180px] mx-auto">{content}</p>)
                    }
                </div>
                <div className="flex justify-center items-center pb-16">
                    <Link className="md:px-16 px-5 uppercase py-1.5 rounded-xs bg-white font-semibold text-black text-center" href="/" >More About Head Spa</Link>
                </div>
            </div>
        </div>
    );
};

export default About;