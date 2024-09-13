import { useRef, useState } from "react";
import { images } from "../../utils/Constants";
import ImageCard from "./ImageCard";

const GalleryMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addedImages, setAddedImages] = useState(images);
  const inputRef = useRef(null);
  console.log(addedImages);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 3;
      return newIndex >= addedImages.length ? addedImages.length - 1 : newIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const onAddImage = () => {
    inputRef?.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddedImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <div className="py-4 px-12 bg-black text-xl text-[#FFFFFF] rounded-2xl h-fit">
          Gallery
        </div>
        <div className="flex gap-8">
          <div className="flex items-center">
            <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full shadow-gray-900">
              <button
                onClick={onAddImage}
                className="px-8 py-4 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
              >
                + ADD IMAGE
              </button>
              <input
                onChange={handleFileChange}
                ref={inputRef}
                type="file"
                className="hidden"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <button
              onClick={prev}
              className="directionButton-shadow w-[45px] h-[45px] flex items-center justify-center rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3"
            >
              <img src="LeftDirectionImage.svg" />
            </button>
            <button
              onClick={next}
              className="directionButton-shadow w-[45px] h-[45px] flex items-center justify-center rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3"
            >
              <img src="RightDirectionImage.svg" />
            </button>
          </div>
        </div>
      </div>
      <ImageCard
        images={images}
        currentIndex={currentIndex}
        addedImages={addedImages}
      />
    </div>
  );
};

export default GalleryMain;
