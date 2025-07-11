import Image from 'next/image';

const ImageBanner = () => {
  return (
    <div className="relative flex aspect-[2/1] grow overflow-clip rounded-lg sm:aspect-[5/2]">
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
