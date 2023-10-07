import Image from "next/image";
import React from "react";

const Male = () => {
  return (
    <div className=" flex justify-center items-center p-5 bg-emerald-800 gap-5 flex-wrap-reverse h-screen w-full">
      <div>
        <h1 className="text-5xl max-sm:text-4xl font-semiboldbold text-white">
          Software Developer:
        </h1>
        <h1 className="text-5xl max-sm:text-4xl font-semiboldbold text-white">
          Transforming Ideas into
        </h1>
        <h1 className="text-5xl max-sm:text-4xl font-semibold text-red-500">
          Digital Reality
        </h1>
        <p className="text-white font-thin text-lg max-sm:text-base">
          I am aksh patel, you can see my portfolio from bottom of the website.
          click on the button to contact me
        </p>
      </div>
      <div>
        <Image
          src="/images/aksh.jpg"
          width={300}
          height={300}
          alt="alt"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Male;
