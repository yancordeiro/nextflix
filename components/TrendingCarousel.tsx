import React, { useEffect } from "react";
import Image from "next/image";
import Splide from "@splidejs/splide";
interface TrendingItem {
  small: string;
  large: string;
}

interface Thumbnail {
  trending?: TrendingItem;
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}

interface HomeFeedItem {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
}

interface TrendingCarouselProps {
  data: HomeFeedItem[];
}

const TrendingCarousel: React.FC<TrendingCarouselProps> = ({ data }) => {
  useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      perPage: 3,
      height: 230,
      width: "100%",
      fixedWidth: 430,
      pagination: false,
      arrows: false,
      gap: 40,
    }).mount();
  }, []);
  return (
    <section className="splide h-full w-full text-white mt-[25px]">
      <div className="splide__track">
        <ul className="splide__list relative ">
          {data.map((item, index) => (
            <li className="splide__slide w-[430px]" key={index}>
              {item.thumbnail &&
                item.thumbnail.trending &&
                item.thumbnail.trending.large && (
                  <>
                    <div
                      className="flex flex-col justify-between h-full box pt-[24px] pb-[24px] pl-[24px] pr-[24px] rounded-[8px] relative"
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent), url(${item.thumbnail.trending.large})`,
                        backgroundSize: "cover",
                        objectPosition: "center",
                      }}
                    >
                      <div className="flex items-center justify-center rounded-full bg-darkBlue bg-opacity-70 cursor-pointer w-[32px] h-[32px] top-[16px] right-[24px] self-end">
                        <Image
                          src="/icon-bookmark-empty.svg"
                          alt="play"
                          width={12}
                          height={14}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-2">
                          <span className="body-m text-white">{item.year}</span>
                          <span>•</span>
                          <span className="body-m text-white">
                            {item.category === "Movie" ? (
                              <Image
                                src="/icon-category-movie.svg"
                                alt="movie"
                                width={12}
                                height={12}
                              />
                            ) : (
                              <Image
                                src="/icon-category-tv.svg"
                                alt="movie"
                                width={12}
                                height={12}
                              />
                            )}
                          </span>
                          <span className="body-m text-white">
                            {item.rating}
                          </span>
                        </div>
                        <span className="heading-s text-white">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </>
                )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrendingCarousel;
