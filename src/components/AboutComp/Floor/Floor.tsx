import Image from "next/image";
import { FloorDataType } from "./FloorType";


const Floor: React.FC<FloorDataType> = ({ floorData }) => {
    return (
        <div className="py-5">
            <div className="py-5 flex flex-col gap-6">
                <h2 style={{ color: floorData.headingColor }} className="text-center text-5xl font-bold tracking-widest">{floorData.heading}</h2>
                <p style={{ color: floorData.headingColor }} className="text-center text-xs">{floorData.subtitle}</p>
            </div>
            <div className="w-11/12 mx-auto">
                <figure>
                    <Image src={floorData.imageUrl} width={1080} height={350} alt="Floor 1" className="w-full h-auto" />
                </figure>
                <p className="text-white text-sm leading-6 py-5">{floorData.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        floorData.floorImages.map(image => <figure key={image.id} className="w-full">
                            <Image src={image.imageUrl} width={1080} height={350} alt={image.alt} className="w-full h-auto" />
                        </figure>)
                    }
                </div>
                <p className="text-white text-sm leading-6 py-5">{floorData.floorDesc}</p>
            </div>
        </div>
    );
};

export default Floor;