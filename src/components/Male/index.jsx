import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "./male.module.css";

const Male = () => {
  return (
    <div className={Style.main}>
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl max-sm:text-3xl font-semiboldbold text-white">
          FrontEnd Developer:
        </h1>
        <h1 className="text-5xl max-sm:text-3xl font-semiboldbold text-white">
          Molding Imagination into
        </h1>
        <h1 className="text-5xl max-sm:text-3xl font-semibold text-[#800080]">
          Digital Form
        </h1>
        <p className="text-white font-thin text-lg max-sm:text-base">
          Aksh Patel, a Frontend Developer with aspirations to evolve into a
          versatile Web Developer, passionate about crafting immersive digital
          experiences.
        </p>

        <div className="flex gap-3">
          <Link href="https://api.whatsapp.com/send/?phone=%2B917016913718&text&type=phone_number&text=I%20want%20to%20understand%20about">
            <button className="text-white bg-[#800080] py-2 px-5 rounded-full hover:bg-[#800080d0] ">
              Contact me
            </button>
          </Link>
          <Link href="https://drive.google.com/file/d/1BQ20hFfGouVhazjeIyY-lj0Ny1REu7Rp/view?usp=drivesdk">
            <button className="text-black bg-white py-2 px-5 rounded-full hover:bg-gray-300 ">
              Resume
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/images/P.png"
          width={350}
          height={350}
          alt="alt"
          className={Style.shape}
        />
      </div>
    </div>
  );
};

export default Male;
