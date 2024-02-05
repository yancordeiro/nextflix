import React, { useEffect } from "react";
import InputField from "./InputField";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";
import data from "../public/data.json";
import Image from "next/image";
import TrendingCarousel from "./TrendingCarousel";
import RecommendedMovies from "./RecommendedMovies";
interface HomeFeedProps {}

const HomeFeed: React.FC<HomeFeedProps> = () => {
  const trendingData = data
    .filter((item) => item.isTrending)
    .map(
      ({
        thumbnail,
        year,
        category,
        rating,
        title,
        isTrending,
        isBookmarked,
      }) => ({
        thumbnail,
        year,
        category,
        rating,
        title,
        isTrending,
        isBookmarked,
      })
    );
  const regularData = data
    .filter((item) => !item.isTrending)
    .map(
      ({
        thumbnail,
        year,
        category,
        rating,
        title,
        isTrending,
        isBookmarked,
      }) => ({
        thumbnail,
        year,
        category,
        rating,
        title,
        isTrending,
        isBookmarked,
      })
    );
  return (
    <div className="w-full">
      <InputField
        type={"text"}
        placeholder={"Search for movies or TV series"}
        showImage={true}
        showBorder={false}
      />
      <h1 className="heading-l text-white mt-[34px]">Trending</h1>
      <TrendingCarousel data={trendingData} />
      <RecommendedMovies data={regularData} />
    </div>
  );
};

export default HomeFeed;
