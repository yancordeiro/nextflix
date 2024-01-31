import Image from "next/image";
import Link from "next/link";
interface LateralBarProps {
  setCurrentWidget: (widget: string) => void;
}

const LateralBar: React.FC<LateralBarProps> = ({setCurrentWidget}) => {
  return (
    <div className="flex flex-col bg-semiDarkBlue rounded-[20px] w-[96px] h-full max-h-[960px] items-center py-[35px] gap-[74px]">
      <Image src="/logo.svg" alt="profile" width="36" height="26" />
      <div className="flex flex-col gap-[40px]">
        <Image
          className="cursor-pointer"
          src="/icon-nav-home.svg"
          alt="home"
          width="20"
          height="20"
          onClick={() => setCurrentWidget("HomeFeed")}
        />
        <Image
          className="cursor-pointer"
          src="/icon-nav-movies.svg"
          alt="movies"
          width="20"
          height="20"
          onClick={() => setCurrentWidget("MoviesFeed")}

        />
        <Image
          className="cursor-pointer"
          src="/icon-nav-tv-series.svg"
          alt="tv series"
          width="20"
          height="20"
          onClick={() => setCurrentWidget("SeriesFeed")}

        />
        <Image
          className="cursor-pointer"
          src="/icon-nav-bookmark.svg"
          alt="saved"
          width="20"
          height="20"
          onClick={() => setCurrentWidget("FavoritesFeed")}

        />
      </div>
      <Image
        className="cursor-pointer border border-white rounded-full mt-auto"
        src="/image-avatar.png"
        alt="Avatar"
        width="40"
        height="40"
      />
    </div>
  );
};

export default LateralBar;
