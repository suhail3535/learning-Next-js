import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
let featuredWebinars = [
  {
    id: 1,
    title: "Shankar Mahadevan Academy",
    slug: "shankar-mahadevan-academy",
    description:
      "An online music academy founded by the Indian singer Shankar Mahadevan, offering courses in Bollywood, and other music genres.",
    isFeatured: true,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 2,
    title: "KM Music Conservatory",
    slug: "km-music-conservatory",
    description:
      "A premier music institute in Chennai, founded by A. R. Rahman, providing training in Western and Indian classical music.",
    isFeatured: true,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 3,
    title: "Swarnabhoomi Academy of Music",
    slug: "swarnabhoomi-academy-of-music",
    description:
      "An international college of contemporary music offering diploma and degree programs in music performance and production.",
    isFeatured: true,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 4,
    title: "Delhi School of Music",
    slug: "delhi-school-of-music",
    description:
      "One of the premier music schools in India, offering training in Western classical music.",
    isFeatured: false,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 5,
    title: "True School of Music",
    slug: "true-school-of-music",
    description:
      "A contemporary music school in Mumbai, providing professional music education in performance, production, and business.",
    isFeatured: true,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 6,
    title: "Calcutta School of Music",
    slug: "calcutta-school-of-music",
    description:
      "A historic institution offering education in Western classical and contemporary music, located in Kolkata.",
    isFeatured: false,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 7,
    title: "Sangeet Gurugriha",
    slug: "sangeet-gurugriha",
    description:
      "A prominent music school in Bangalore specializing in Indian classical music.",
    isFeatured: false,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 8,
    title: "Eastern Fare Music Foundation",
    slug: "eastern-fare-music-foundation",
    description:
      "A music institute in Bangalore offering courses in guitar, keyboard, and other instruments.",
    isFeatured: false,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
  {
    id: 9,
    title: "Pancham Academy of Music.",
    slug: "pancham-academy-of-music-and-arts",
    description:
      "A music and arts academy in Pune offering training in various music genres and art forms.",
    isFeatured: false,
    image: "https://news.webster.edu/images/ypso_rehearsal_2022_wide.jpg",
  },
];

interface Course {
  title: string;
  slug: string;
  description: string;
  image: string;
  isFeatured: boolean;
}
export function MeteorsDemo() {
  return (
    <>
      <div className="text-center">

        <p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Our Music Centers in India
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center m-auto  w-[90%] place-items-center">
        {featuredWebinars.map((ele: Course) => {
          return (
            <div className=" w-full relative  m-2">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-[1]">
                  {ele.title}
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-[1]">
                  {ele.description}
                </p>
                <p className=" text-base text-slate-500 font-bold mb-4 relative z-[1]">
                  {ele.slug}
                </p>
                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                  Explore
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={25} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
