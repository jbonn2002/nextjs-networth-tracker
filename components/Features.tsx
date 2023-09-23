"use client";

import { useState } from "react";

import { ChevronUpIcon } from "lucide-react";

const features = [
  {
    name: "Secure Sign in",
    Icon: () => (
      <svg
        className="ml-[-6px] mr-2 mt-[1px]"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        fill="currentColor"
      >
        <path d="M10 18q-.625 0-1.062-.438Q8.5 17.125 8.5 16.5h3q0 .625-.438 1.062Q10.625 18 10 18Zm-3-2.5V14h6v1.5ZM6.688 13q-1.292-.792-1.99-2.135Q4 9.521 4 8q0-2.5 1.75-4.25T10 2q2.5 0 4.25 1.75T16 8q0 1.521-.698 2.865-.698 1.343-1.99 2.135Zm.479-1.5h5.666q.792-.646 1.229-1.562Q14.5 9.021 14.5 8q0-1.875-1.312-3.188Q11.875 3.5 10 3.5q-1.875 0-3.188 1.312Q5.5 6.125 5.5 8q0 1.021.438 1.938.437.916 1.229 1.562Zm2.833 0Z" />
      </svg>
    ),
    description:
      "Use your gmail to securely log in to the application; no password is required.",
    screenshotUrl: "/images//networth-screenshot.png",
  },
  {
    name: "Privacy",
    description:
      "Your private data, such as name, assets, and networth, etc., is securely encrypted in the database.",
    Icon: () => (
      <svg
        className="ml-[-6px] mr-2 mt-[-1px]"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        fill="currentColor"
      >
        <path d="M5.083 18.333q-.729 0-1.239-.521-.511-.52-.511-1.25V8.417q0-.729.511-1.24.51-.51 1.239-.51h.709V5.042q0-1.771 1.218-2.99Q8.229.833 10 .833q1.771 0 2.99 1.219 1.218 1.219 1.218 2.99v1.625h.709q.729 0 1.239.51.511.511.511 1.24v8.145q0 .73-.511 1.25-.51.521-1.239.521ZM7.542 6.667h4.916V5.042q0-1.021-.718-1.74-.719-.719-1.74-.719t-1.74.719q-.718.719-.718 1.74Zm-2.459 9.916h9.834V8.417H5.083v8.166Zm0-8.166v8.166-8.166ZM10 15.812q.354 0 .615-.26.26-.26.26-.614v-1.584h1.583q.354 0 .615-.26.26-.261.26-.615t-.26-.614q-.261-.261-.615-.261h-1.583v-1.583q0-.354-.26-.615-.261-.26-.615-.26t-.615.26q-.26.261-.26.615v1.583H7.542q-.354 0-.615.261-.26.26-.26.614t.26.615q.261.26.615.26h1.583v1.584q0 .354.26.614.261.26.615.26Z" />
      </svg>
    ),
    screenshotUrl: "/images/assetgrid.png",
  },
  {
    name: "Assets",
    description:
      "You can track your assets to get a better understanding of your networth. ",
    Icon: () => (
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em"
        className="ml-[-6px] mr-2 mt-[1px]"
      >
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l89.4-89.3 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
      </svg>
    ),
    screenshotUrl: "/images/dashboard.png",
  },
  {
    name: "liabitlites",
    description:
      "You can track your liabitlites to get a better understanding of your debts and what is holding you back. ",
    Icon: () => (
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em"
        className="ml-[-6px] mr-2 mt-[1px]"
      >
        <path d="M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32zm96 96c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32zm96 64h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm160 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
      </svg>
    ),
    screenshotUrl: "/images/dashboard.png",
  },
];

export default function Features() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="mb-14 mt-10 lg:flex">
        <div className="mx-auto block h-fit max-w-sm rounded-2xl  border-[1px] bg-white p-2 sm:w-96 lg:ml-[-50px]">
          {features.map((feature, index) => {
            const isSelected = index === selected;
            return (
              <div key={`${feature.name}-${index}`}>
                <button
                  className={
                    "flex w-full justify-between rounded-lg bg-black px-4 py-3 text-left text-sm font-medium text-green-400 hover:bg-black/50 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75"
                  }
                  onClick={() => {
                    setSelected(index);
                  }}
                >
                  <div className="flex w-full items-center justify-between ">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <feature.Icon />
                        <h3 className="font-sans font-medium text-white">
                          {feature.name}
                        </h3>
                      </div>
                      {
                        <ChevronUpIcon
                          className={`${
                            isSelected ? "rotate-180 transform" : ""
                          } h-5 w-5 text-green-400`}
                        />
                      }
                    </div>
                  </div>
                </button>

                <p
                  className={`mb-[6px] mt-[6px] overflow-hidden  border-gray-700 bg-white pl-[10px] text-[14px] font-medium text-black transition-all duration-500 ${
                    isSelected ? "max-h-28" : "max-h-0"
                  } `}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="relative max-w-xl overflow-hidden whitespace-nowrap rounded-lg border-[1px] bg-white shadow lg:mt-[30px] lg:h-[360px] lg:w-[860px]">
          <video
            playsInline
            autoPlay
            muted
            loop
            width="1200"
            height="400"
            src={
              features[selected].screenshotUrl
                ? features[selected].screenshotUrl
                : features[selected].screenshotUrl
            }
            poster={features[selected].screenshotUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
