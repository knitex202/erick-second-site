import React from "react";
import marleyLogo from "../Assets/campaignLogos/bobMarleyLogo.png";
import NikeJordan from "../Assets/campaignLogos/Nike_Jordan.png"
import { marleyImages, nikeJordanImages } from "../data";

function Campaigns() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col w-full py-8 mt-80 bg-white">
        <img src={marleyLogo} alt="Bob Marley Logo" className="w-96 h-full" />
        <div className="flex flex-cols justify-center mt-16">
          <div className="flex overflow-hidden">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marleyImages.map((image, index) => {
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
      </div>
      <div className="flex flex-col w-full py-8 mt-16 bg-white">
        <img src={NikeJordan} alt="Bob Marley Logo" className="w-96 h-full self-end" />
        <div className="flex flex-cols justify-center mt-16">
          <div className="flex overflow-hidden">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nikeJordanImages.map((image, index) => {
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
      </div>
      <div className="flex justify-end">
      <p className="mt-8 xl:mr-24 mr-4 font-semibold text-stone-200 xl:text-stone-400 ">Website created by: <span>Hassan Wilson</span> </p>
      </div>
    </div>
  );
}

export default Campaigns;
