import Image from "next/image";
import Link from "next/link";
import React from "react";

const Male = () => {
  return (
    <div className=" flex justify-center items-center p-5 bg-emerald-800 gap-5 flex-wrap-reverse w-full max-sm:h-screen">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-5xl max-sm:text-3xl font-semiboldbold text-white">
            Software Developer:
          </h1>
          <h1 className="text-5xl max-sm:text-3xl font-semiboldbold text-white">
            Transforming Ideas into
          </h1>
          <h1 className="text-5xl max-sm:text-3xl font-semibold text-red-500">
            Digital Reality
          </h1>
          <p className="text-white font-thin text-lg max-sm:text-base">
            I am aksh patel, you can see my portfolio from bottom of the
            website. click on the button to contact me
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact-me">
            <button className="text-white bg-red-500 py-2 px-5 rounded-full hover:bg-red-600 ">
              Contact me
            </button>
          </Link>
          <Link href="/products">
            <button className="text-black bg-white py-2 px-5 rounded-full hover:bg-gray-300 ">
              Products
            </button>
          </Link>
        </div>
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
