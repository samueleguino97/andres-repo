import Image from "next/image";
import React from "react";
type Props = {
  image: any;
  title: string;
  decription: string;
  color?: string;
};
function HomeProject({ image, title, decription, color }: Props) {
  return (
    <div className="w-full aspect-[1.3] md:aspect-auto h-full relative">
      <Image className="w-full h-full object-cover " src={image} alt="" />
      <div
        className={`absolute flex pb-2 gap-1 text-white justify-end items-center flex-col w-full bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(9,80,85,0)_0%,${
          color ?? "#095055"
        }_100%)]`}
      >
        <span className="font-bold">{title}</span>
        <span className="text-xs">{decription}</span>
      </div>
    </div>
  );
}

export default HomeProject;
