import Image from "next/image";

const ImageBanner = () => {
  return (
    <div className="relative flex grow aspect-[2/1] sm:aspect-[5/2] rounded-lg overflow-clip">
      <Image
        src="/banner_2.png"
        alt="Prismane Logo Banner"
        className="object-cover"
        quality={50}
        fill
      />
    </div>
  );
};

export default ImageBanner;
