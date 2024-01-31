import React, { useEffect } from 'react';
import InputField from './InputField';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
interface HomeFeedProps {
    
}

const HomeFeed: React.FC<HomeFeedProps> = () => {

    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    })

    return (
        <div className='flex flex-col w-full'>
            <InputField type={'text'} placeholder={'Search for movies or TV series'} showImage={true} showBorder={false} />
            <h1 className='heading-l text-white'>Trending</h1>
            <div className="swiper swiper-container w-full">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    ...
                </div>
            </div>

        </div>
    );
};

export default HomeFeed;