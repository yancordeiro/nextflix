"use client";
import { useState } from "react";
import LateralBar from "@/components/LateralBar";
import HomeFeed from "@/components/HomeFeed";
import MoviesFeed from "@/components/MoviesFeed";
import SeriesFeed from "@/components/SeriesFeed";
import FavoritesFeed from "@/components/FavoritesFeed";

export default function Home() {
  const widgetComponents: { [key: string]: React.FC<any> } = {
    HomeFeed,
    MoviesFeed,
    SeriesFeed,
    FavoritesFeed,
  };

  const [currentWidget, setCurrentWidget] = useState<string>("HomeFeed");
  const CurrentWidget = widgetComponents[currentWidget];
return (
  <div className="flex flex-row h-full p-[32px] pr-0 gap-[36px] w-full">
    <div>
      <LateralBar setCurrentWidget={setCurrentWidget} />
    </div>
    <div className="mt-[32px] w-full">
      {CurrentWidget && <CurrentWidget />}
    </div>
  </div>
);
}
