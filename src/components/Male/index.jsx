import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "./male.module.css";

const Male = () => {
  return (
    <div className={Style.main}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-5xl max-sm:text-3xl font-semiboldbold text-white">
            Software Developer:
          </h1>
          <h1 className="text-5xl max-sm:text-3xl font-semiboldbold text-white">
            Transforming Ideas into
          </h1>
          <h1 className="text-5xl max-sm:text-3xl font-semibold text-[#800080]">
            Digital Reality
          </h1>
          <p className="text-white font-thin text-lg max-sm:text-base">
            I am aksh patel, you can see my portfolio from bottom of the
            website. click on the button to contact me
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="https://api.whatsapp.com/send/?phone=%2B917016913718&text&type=phone_number&text=I%20want%20to%20understand%20about">
            <button className="text-white bg-[#800080] py-2 px-5 rounded-full hover:bg-[#800080d0] ">
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
