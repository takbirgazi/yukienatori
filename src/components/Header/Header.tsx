import Link from "next/link";
import TopHeader from "./TopHeader/TopHeader";
import Image from "next/image";
import MobileMenu from "./MobileMenu/MobileMenu";
import logoMain from "@/assets/images/logoMain.png";

const Header = () => {
    const links = [
        {
            id: 1,
            title: "About",
            slag: "/about-us"
        },
        {
            id: 2,
            title: "Services",
            slag: "/services"
        },
        {
            id: 3,
            title: "Doctors",
            slag: "/doctors"
        },
        {
            id: 4,
            title: "Blog",
            slag: "/blog"
        }
    ]

    return (
        <div>
            <TopHeader />
            <div className="bg-transparent mt-[48px] py-5">
                <div className="container mx-auto max-w-[1250px] px-4 flex justify-between items-center">
                    <Link href="/" className="flex gap-1 items-center">
                        <figure>
                            <Image className="h-7 w-20" src={logoMain} height={200} width={200} alt="Logo" />
                        </figure>
                    </Link>
                    <div className="hidden md:flex justify-center items-center gap-4">
                        {
                            links.map(menu => <Link className="font-semibold text-white" href={menu.slag} key={menu.id}>{menu.title}</Link>)
                        }
                    </div>
                    <MobileMenu links={links} />
                </div>
            </div>
        </div>
    );
};

export default Header;