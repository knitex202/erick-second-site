import React from "react";
import erickSideLeft from "../Assets/galleryImages/erickLeftSide.jpg";
import { Images } from "../data";

function Landing() {
  return (
    <div className="w-full h-full mb-4 ">
      <div className="w-full h-screen overflow-hidden">
        <h1 className="flex w-full absolute top-[50%] 2xl:top-80 justify-center text-white text-5xl 2xl:text-8xl font-bold">
          ERICK CEDENO
        </h1>
        <img
          src={erickSideLeft}
          alt="Office Modeling"
          className=" w-full h-full object-left lg:object-center object-cover"
        />
      </div>
      <div className="flex flex-cols justify-center mt-16">
        <div className="flex overflow-hidden">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Images.map((image, index) => {
              return (
                <div className="flex w-[500px] h-[500px] justify-self-center overflow-hidden">
                  <img
                    key={index}
                    src={image.picture}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-125 ease-in-out duration-700"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
      <p className="mt-8 xl:mr-24 mr-4 font-semibold text-stone-600 ">Website created by: <span>Hassan Wilson</span> </p>
      </div>
    </div>
  );
}

export default Landing;
