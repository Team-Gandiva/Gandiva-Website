"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string; // Add image field
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Electric Car Design Award",
    description:
      "Awarded for innovative electric car design at International Auto Show 2023.",
    date: "March 2023",
    image: "/award1.jpg", // Example image path
  },
  {
    id: 2,
    title: "Best Green Technology Implementation",
    description:
      "Recognition for the use of sustainable materials and green technology in the car.",
    date: "April 2023",
    image: "/award2.jpg", // Example image path
  },
  {
    id: 3,
    title: "Future Mobility Concept",
    description:
      "Honored for pioneering concepts in future mobility and urban transport solutions.",
    date: "June 2023",
    image: "/award3.jpg", // Example image path
  },
];

const Achievements: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [achievementsPerPage, setAchievementsPerPage] = useState(1);
  const delay = 4000;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateAchievementsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setAchievementsPerPage(3);
    } else if (window.innerWidth >= 768) {
      setAchievementsPerPage(2);
    } else {
      setAchievementsPerPage(1);
    }
  };

  useEffect(() => {
    updateAchievementsPerPage();
    window.addEventListener("resize", updateAchievementsPerPage);
    return () =>
      window.removeEventListener("resize", updateAchievementsPerPage);
  }, []);

  const startSlideshow = () => {
    intervalRef.current = setInterval(nextPage, delay);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextPage = () => {
    setCurrent((prev) =>
      prev + achievementsPerPage >= achievements.length
        ? 0
        : prev + achievementsPerPage
    );
  };

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, [achievementsPerPage]);

  const visibleAchievements = achievements.slice(
    current,
    current + achievementsPerPage
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () =>
      setCurrent((prev) =>
        prev - achievementsPerPage < 0
          ? achievements.length - achievementsPerPage
          : prev - achievementsPerPage
      ),
    trackMouse: true,
  });

  return (
    <section className="bg-gray-100 pb-10">
      <div className="container mx-auto px-6" {...handlers}>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Achievements and Honors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col overflow-hidden"
            >
              <div className="mb-4 relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              <p className="text-gray-500">{achievement.date}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mt-6">
          {Array.from(
            { length: Math.ceil(achievements.length / achievementsPerPage) },
            (_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === current / achievementsPerPage
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrent(index * achievementsPerPage)}
              ></span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
