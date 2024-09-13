import GalleryWidget from "./GalleryWidget";
import IntroWidget from "./IntroWidget";

const HeroRight = () => {
  return (
    <div className="p-10 space-y-2">
      <IntroWidget />
      <div className="bg-color-lines lines-shadow h-[4px] rounded-[3px] !my-5 w-[85%] mx-auto"></div>
      <GalleryWidget />
      <div className="bg-color-lines lines-shadow h-[4px] rounded-[3px] !my-5 w-[85%] mx-auto"></div>
    </div>
  );
};

export default HeroRight;
