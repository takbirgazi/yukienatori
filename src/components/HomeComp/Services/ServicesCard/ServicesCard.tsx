import Image from 'next/image';
import { ServicesCardType } from './ServicesCardType';
import Link from 'next/link';

const ServicesCard: React.FC<ServicesCardType> = ({ ServicesCardData }) => {
    return (
        <div>
            <figure>
                <Image width={800} height={500} src={ServicesCardData.imageUrl} alt={ServicesCardData.title} />
            </figure>
            <div className='py-4'>
                <h2 className='text-[#ca8fc7] text-center font-bold text-3xl selection:text-black selection:bg-white'>{ServicesCardData.title}</h2>
            </div>
            <div className='flex justify-center'>
                <Link href={`/${ServicesCardData.title}`} className='border px-8 py-3.5 border-[#333333] text-white font-bold bg-[#333333] hover:text-[#333333] hover:bg-transparent transition-all duration-300' >MORE</Link>
            </div>
        </div>
    );
};

export default ServicesCard;