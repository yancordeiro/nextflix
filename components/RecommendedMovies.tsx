import React from "react";
import Image from "next/image";
interface RecommendedItem {
  small: string;
  large: string;
}

interface Thumbnail {
  trending?: RecommendedItem;
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
interface RecommendedMoviesProps {
  data: HomeFeedItem[];
}

const RecommendedMovies: React.FC<RecommendedMoviesProps> = ({ data }) => {
  return (
    <div className="pr-[32px]">
      <h1 className="text-white heading-l">Recommended for you</h1>
      <div className="grid grid-cols-4 gap-x-[20px] gap-y-[32px]">
        {data.map((item, index) => (
          <div className="flex flex-col w-fit" key={index}>
            <div className="relative w-full">
              <Image
                className="rounded-[8px]"
                src={item.thumbnail.regular.large}
                alt={item.title}
                width={280}
                height={174}
              />
              <div className="flex items-center justify-center rounded-full absolute top-4 right-4 bg-darkBlue bg-opacity-70 cursor-pointer w-[32px] h-[32px] top-[16px] right-[24px] self-end">
                <Image
                  src="/icon-bookmark-empty.svg"
                  alt="play"
                  width={12}
                  height={14}
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex flex-row items-center gap-2 text-white">
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
                <span className="body-m text-white">{item.rating}</span>
              </div>
              <span className="heading-s text-white mt-1">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;
