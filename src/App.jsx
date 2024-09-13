import HeroRight from "./Components/Hero/HeroRight";

const App = () => {
  return (
    <div className="flex bg-[#202327] w-full">
      {/* // Hero left */}
      <div className="w-[50%]"></div>
      {/* Hero right */}
      <div>
        <HeroRight />
      </div>
    </div>
  );
};

export default App;
