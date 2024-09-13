import IntroLeft from "./IntroLeft";
import GalleryMain from "./GalleryMain";

const GalleryWidget = () => {
  return (
    <div className="w-[720px] px-[16px] py-7 h-[330px] rounded-[18.89px] cardShadow bg-[#363C43] flex gap-4">
      <IntroLeft />
      <GalleryMain />
      <div className="m-7"></div>
    </div>
  );
};

export default GalleryWidget;
