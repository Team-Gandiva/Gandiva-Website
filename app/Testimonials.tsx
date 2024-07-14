"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useSwipeable } from "react-swipeable"; // Import useSwipeable

interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Dolle",
    position: "CEO",
    avatar: "/faculty1.jpg",
    quote:
      "In a professional context it often happens that private or corporate clients.",
  },
  {
    id: 2,
    name: "Mike Silent",
    position: "Manager",
    avatar: "/faculty2.jpg",
    quote: "Think of a news blog that’s filled with content hourly on the day.",
  },
  {
    id: 3,
    name: "John Doe",
    position: "Manager",
    avatar: "/faculty3.jpg",
    quote: "Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 4,
    name: "Maria Dolle",
    position: "CEO",
    avatar: "/faculty1.jpg",
    quote:
      "In a professional context it often happens that private or corporate clients.",
  },
  {
    id: 5,
    name: "John Doe",
    position: "Manager",
    avatar: "/faculty3.jpg",
    quote: "Excepteur sint occaecat cupidatat non proident.",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(1);
  const delay = 4000;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const updateTestimonialsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setTestimonialsPerPage(2);
    } else {
      setTestimonialsPerPage(1);
    }
  };

  useEffect(() => {
    updateTestimonialsPerPage();
    window.addEventListener("resize", updateTestimonialsPerPage);
    return () =>
      window.removeEventListener("resize", updateTestimonialsPerPage);
  }, []);

  const startSlideshow = () => {
    if (!isHovering) {
      intervalRef.current = setInterval(nextPage, delay);
    }
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextPage = () => {
    setCurrent((prev) =>
      prev + testimonialsPerPage >= testimonials.length
        ? 0
        : prev + testimonialsPerPage
    );
  };

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, [testimonialsPerPage, isHovering]);

  const visibleTestimonials = testimonials.slice(
    current,
    current + testimonialsPerPage
  );

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => {
      setCurrent((prev) =>
        prev - testimonialsPerPage < 0
          ? testimonials.length - testimonialsPerPage
          : prev - testimonialsPerPage
      );
    },
    trackMouse: true,
  });

  return (
    <div
      className="flex flex-col items-center justify-center pb-10 pt-24 bg-gray-100 text-black"
      {...handlers}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Testimonials
      </h2>
      <div className="pb-8 w-full max-w-[350px] sm:w-full sm:max-w-[500px] md:w-full md:max-w-[600px] lg:w-full lg:max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between w-full"
            >
              <div className="flex items-start mb-4">
                <div
                  className="w-16 h-16 relative overflow-hidden rounded-full bg-gray-200 transition transform hover:scale-110 mr-4"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    objectFit="cover"
                    className="rounded-full cursor-pointer transition transform hover:scale-110"
                  />
                  <a
                    href="#"
                    className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaLinkedin className="text-white text-2xl" />
                  </a>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-blue-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-lg text-gray-800 flex-1">
                <RiDoubleQuotesL className="inline text-xl text-red-400 mr-1" />
                {testimonial.quote}
                <RiDoubleQuotesR className="inline text-xl text-red-400 ml-1" />
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mt-6">
          {Array.from(
            { length: Math.ceil(testimonials.length / testimonialsPerPage) },
            (_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === current / testimonialsPerPage
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrent(index * testimonialsPerPage)}
              ></span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
