import React from "react";
import aboutImage from "../Assets/galleryImages/aboutImage.jpg";

function About() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <div className="flex flex-col z-40 w-full absolute ml-4 top-32 text-white xl:text-2xl gap-2 xl:end-24 xl:items-end">
          <p>HEIGHT: <span className="font-semibold">5'10"/178cm</span></p>
            <p>NECK: <span className="font-semibold">15½</span></p>
            <p>SLEEVE: <span className="font-semibold">30"</span></p>
            <p>WAIST/INSEAM: <span className="font-semibold">32/30"</span></p>
            <p>COAT: <span className="font-semibold">40 REGULAR</span></p>
            <p>SHOE: <span className="font-semibold">10½</span></p>
            <p>HAIR: <span className="font-semibold">GREY</span></p>
            <p>EYES: <span className="font-semibold">BROWN</span></p>
        </div>
        <img
          src={aboutImage}
          alt="About me background"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(50%)", objectPosition: "30% 35%" }}
        />
      </div>
      <div className="absolute bottom-2 right-2">
      <p className="mt-8 xl:mr-24 mr-4 font-semibold text-stone-700 xl:text-stone-400 ">Website created by: <span>Hassan Wilson</span> </p>
      </div>
    </div>
  );
}

export default About;
