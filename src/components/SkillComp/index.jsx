import Image from "next/image";
import React from "react";

const SkillComp = ({ title, image }) => {
  return (
    <div className="flex flex-col rounded-xl border-green border-2 items-center gap-2 hover:bg-green justify-center">
      <Image src={image} width={100} height={100} alt="alt" />
      <p className="font-thin">{title}</p>
    </div>
  );
};

export default SkillComp;
