import IntroLeft from "./IntroLeft";
import IntroMain from "./IntroMain";

const IntroWidget = () => {
  return (
    <>
      <div className="w-[720px] px-[16px] py-7 h-[330px] rounded-[18.89px] cardShadow bg-[#363C43] flex gap-4">
        <IntroLeft />
        <IntroMain />
        <div className="flex items-center justify-center h-full">
          <div className="h-[64px] w-2 scrollBg rounded-lg m-5"></div>
        </div>
      </div>
    </>
  );
};

export default IntroWidget;
