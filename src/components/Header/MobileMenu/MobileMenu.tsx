"use client"

import Link from "next/link";
import { useState } from "react";

interface MenuType {
    links: {
        id: number,
        title: string,
        slag: string
    }[]
}

const MobileMenu: React.FC<MenuType> = ({ links }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="block md:hidden z-10">
            <div onClick={() => setIsActive(isActive => !isActive)} className="flex flex-col gap-2 justify-center items-center cursor-pointer">
                <span className={`${isActive && "rotate-45 origin-[25%]"} border bg-white border-white w-7 h-[2px] transition-all duration-500`}></span>
                <span className={`${isActive && "-rotate-45 origin-[25%]"} border bg-white border-white w-7 h-[2px] transition-all duration-500`}></span>
            </div>
            <div className={`${isActive ? "h-56 py-5" : "h-0 py-0"} md:hidden flex flex-col border-r-b-2 border-black gap-5 absolute w-full left-0 top-[115px] bg-white transition-all duration-500 overflow-hidden`}>
                {
                    links.map(menu => <Link className="font-bold text-gray-800 text-center" href={menu.slag} key={menu.id}>{menu.title}</Link>)
                }
            </div>
        </div>
    );
};

export default MobileMenu;