import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <div className="bg-[#141414] py-10 border-t border-[#ca8fc7]">
            <div className="flex flex-col gap-10 container mx-auto max-w-[1250px] px-4">
                <div className="flex justify-center items-center">
                    <figure className="max-h-60 max-w-60">
                        <Image src={logo} alt="nothing" width={500} height={400} />
                    </figure>
                </div>

                <div className="flex flex-col gap-1">
                    <Link href="/" className="text-sm md:text-base text-[#ca8fc7] text-center">39 WEST 56TH STREET NEW YORK, NY 10019</Link>
                    <Link href="tel:2128106900" className="text-sm md:text-base text-[#ca8fc7] text-center">212.810.6900</Link>
                    <Link href="tel:6466495324" className="text-sm md:text-base text-[#ca8fc7] text-center">646.649.5324</Link>
                    <Link href="mailto:INFO@YUKIEBEAUTY.COM" className="text-sm md:text-base text-[#ca8fc7] text-center">INFO@YUKIEBEAUTY.COM</Link>
                    <p className="text-sm md:text-base text-[#ca8fc7] text-center">MON-SAT 10AM-8PM/SUN 10AM-8PM</p>
                </div>

                <div className="flex flex-col gap-1">
                    <Link href="/accessibility" className="text-sm md:text-base text-[#ca8fc7] text-center">Accessibility Statement</Link>
                    <Link href="/privacy-policy" className="text-sm md:text-base text-[#ca8fc7] text-center">Privacy Policy</Link>
                    <p className="text-sm md:text-base text-[#ca8fc7] text-center">FOLLOW US ON</p>
                    <Link href="https://www.instagram.com" className="text-sm md:text-base text-[#ca8fc7] text-center">INSTAGRAM</Link>
                    <Link href="https://www.facebook.com" className="text-sm md:text-base text-[#ca8fc7] text-center">FACEBOOK</Link>
                </div>

                <p className="font-medium text-sm md:text-base text-center text-[#ca8fc7]">&copy; 2023 <Link href="/" className="font-semibold text-white">CHOOSE US AGENCY</Link> ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;