import Image from "next/image";
import { PostCardDataType } from "./PostCardDataType";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const PostCard: React.FC<PostCardDataType> = ({ postCardData }) => {
    return (
        <div className="border border-black rounded-md shadow-md shadow-[#ffffff3d] overflow-hidden">
            <div className="flex flex-col">
                <Link className="relative group" href={`/post/${postCardData.id}`}>
                    <figure>
                        <Image className="md:h-72" src={postCardData.imageUrl} width={1020} height={820} alt={postCardData.title} />
                    </figure>
                    <div className="group-hover:flex hidden transition-all duration-700 absolute top-0 left-0 w-full h-full bg-[#00000087] justify-center items-center">
                        <FaLongArrowAltRight className="text-white font-bold text-xl text-center" />
                    </div>
                </Link>
                <div className="flex shrink flex-col gap-8 p-4 my-4">
                    <h2 className="text-white text-2xl hover:text-[#4169e1] transition-all duration-500 font-medium">
                        <Link href={`/post/${postCardData.id}`}>{postCardData.title}</Link>
                    </h2>
                    <p className="text-white">
                        {postCardData.desc.length > 150 
                            ? `${postCardData.desc.substring(0, 150)}...` 
                            : postCardData.desc}
                    </p>
                    <Link className="uppercase text-xs border rounded-sm border-[#C2AA6C] text-white p-2 hover:bg-[#C2AA6C] transition-all duration-500" href={`/post/${postCardData.id}`}>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;