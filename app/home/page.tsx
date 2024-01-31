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
  console.log(currentWidget);
  return (
    <div className="h-dvh p-[32px]">
      <LateralBar setCurrentWidget={setCurrentWidget} />
      <CurrentWidget />
    </div>
  );
}
