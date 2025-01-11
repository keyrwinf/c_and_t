import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};

const Avatar = ({ src, alt, height = 80, width = 80 }: AvatarProps) => {
  return (
    <div className="rounded-full relative" style={{ height, width }}>
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        fill
        sizes="20px, 40px, 60px"
      />
    </div>
  );
};

export default Avatar;
