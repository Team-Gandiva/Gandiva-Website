"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Mentors = () => {
  const hod = {
    name: "Dr. K.C. RAMYA",
    position: "HOD - EEE",
    image: "/hod.jpg",
    linkedin: "https://www.linkedin.com/in/dr-k-c-ramya",
  };

  const facultyMembers = [
    {
      name: "Dr. RAMJI TIWARI",
      position: "Assistant Professor",
      image: "/faculty1.jpg",
      linkedin: "https://www.linkedin.com/in/dr-ramji-tiwari",
    },
    {
      name: "Mr. BOOBALAN S",
      position: "Assistant Professor",
      image: "/faculty2.jpg",
      linkedin: "https://www.linkedin.com/in/mr-boobalan-s",
    },
    {
      name: "Mrs. GEETHAMANI R",
      position: "Associate Professor",
      image: "/faculty3.jpg",
      linkedin: "https://www.linkedin.com/in/mrs-r-geethamani",
    },
    {
      name: "Ms. KOKILAVANI",
      position: "Associate Professor",
      image: "/faculty4.jpg",
      linkedin: "https://www.linkedin.com/in/ms-kokilavani",
    },
  ];

  return (
    <section className="pt-10 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Mentors</h2>

        {/* HOD Section */}
        <div className="mb-10">
          <div className="flex justify-center">
            <div className="relative max-w-xs bg-white rounded-lg shadow-lg p-6 group">
              <div className="relative transition transform hover:scale-105">
                <Image
                  src={hod.image}
                  alt={hod.name}
                  width={200}
                  height={200}
                  className="rounded-2xl mx-auto mb-4"
                />
                <Link
                  href={hod.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaLinkedin className="text-white text-3xl" />
                </Link>
              </div>
              <h4 className="text-xl font-medium text-gray-800">{hod.name}</h4>
              <p className="text-gray-600">{hod.position}</p>
            </div>
          </div>
        </div>

        {/* Faculty Members Section */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-10">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className="relative max-w-xs bg-white rounded-lg shadow-lg p-6 group"
              >
                <div className="relative transition transform hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto mb-4"
                  />
                  <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaLinkedin className="text-white text-3xl" />
                </Link>
                </div>
                <h4 className="text-xl font-medium text-gray-800">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
