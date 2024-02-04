import React, { useEffect } from "react";
import InputField from "./InputField";
import "@splidejs/splide/css";
import Splide from '@splidejs/splide';
import { fetchData } from "@/pages/api/dataService";

interface HomeFeedProps {}

const HomeFeed: React.FC<HomeFeedProps> = () => {
  useEffect(() => {
    new Splide( '.splide', {
      type   : 'loop',
      perPage3: 3,
      height: 230,
      pagination: false,
      arrows: false,
    } ).mount();

    fetchData();
  }, []);
  return (
    <div className="w-full">
      <InputField
        type={"text"}
        placeholder={"Search for movies or TV series"}
        showImage={true}
        showBorder={false}
      />
      <h1 className="heading-l text-white">Trending</h1>
      <section className="splide h-full w-full text-white" aria-label="Splide Basic HTML Example">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">

            </li>
            <li className="splide__slide">Slide 02</li>
            <li className="splide__slide">Slide 03</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomeFeed;
