"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function HomePage() {
  const slideImages = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-full">
        <Slide
          easing="ease"
          duration={1500}
          autoplay={true}
          arrows={false}
          infinite={true}
        >
          {slideImages.map((image, index) => (
            <div key={index} className="each-slide h-screen">
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </Slide>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 z-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-6xl md:text-8xl text-red-600 font-extrabold drop-shadow-lg">
            Team Gandiva
          </h1>
          <p className="text-2xl md:text-3xl text-red-600 mt-6 max-w-2xl drop-shadow-lg">
            Experience the Future of Driving
          </p>
          <p className="text-lg md:text-xl text-red-600 mt-4 max-w-2xl drop-shadow-lg">
            Our state-of-the-art electric car, designed by engineering students,
            combines innovation and sustainability.
          </p>
        </div>
      </section>
    </div>
  );
}
