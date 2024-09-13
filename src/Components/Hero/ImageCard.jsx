const ImageCard = ({ currentIndex, addedImages }) => {
  return (
    <div className="flex overflow-hidden py-8 items-center gap-5">
      {addedImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="w-[180px] h-[170px] rounded-[24px] object-cover"
        />
      ))}
    </div>
  );
};

export default ImageCard;
