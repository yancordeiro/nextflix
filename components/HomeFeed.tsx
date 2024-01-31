import React, { useEffect } from 'react';
import InputField from './InputField';
interface HomeFeedProps {
    
}

const HomeFeed: React.FC<HomeFeedProps> = () => {

    useEffect(() => {

    })

    return (
        <div className='flex flex-col w-full'>
            <InputField type={'text'} placeholder={'Search for movies or TV series'} showImage={true} showBorder={false} />
            <h1 className='heading-l text-white'>Trending</h1>

        </div>
    );
};

export default HomeFeed;