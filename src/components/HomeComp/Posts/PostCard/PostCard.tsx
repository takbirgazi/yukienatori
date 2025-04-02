import Image from "next/image";
import { PostCardDataType } from "./PostCardDataType";
import Link from "next/link";

const PostCard: React.FC<PostCardDataType> = ({ postCardData }) => {
    return (
        <div className="border border-black rounded-md shadow-md shadow-white overflow-hidden">
            <div>
                <figure>
                    <Image src={postCardData.imageUrl} width={850} height={680} alt={postCardData.title} />
                </figure>
                <div className="flex flex-col gap-8 p-4 my-4">
                    <h2 className="text-white text-2xl font-medium">{postCardData.title}</h2>
                    <p className="text-white">{postCardData.desc}</p>
                    <Link className="uppercase text-xs border rounded-sm border-[#C2AA6C] text-white p-2 hover:bg-[#C2AA6C] transition-all duration-500" href={`/post/${postCardData.id}`}>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;