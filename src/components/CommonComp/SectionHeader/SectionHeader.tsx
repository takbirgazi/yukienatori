import React from 'react';
import { SectionHeaderType } from './SectionHeaderTye';

const SectionHeader: React.FC<SectionHeaderType> = ({ SectionHeaderData }) => {
    return (
        <div className='flex w-full justify-center items-center'>
            <h2 style={{ color: SectionHeaderData.textColor }} className='text-center text-3xl font-bold py-4 md:py-8'>{SectionHeaderData.heading}</h2>
        </div>
    );
};

export default SectionHeader;