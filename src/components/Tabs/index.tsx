"use client";
import React, { useState } from "react";
import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import { PROGRAMS } from "../../../public/data/institutes";
import RedCircle from "../icons/RedCircle";
import Link from "next/link";

export default function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <h1 className="py-2 text-4xl lg:text-center font-semibold">
        Направления подготовки
      </h1>
      <div className="mb-4 flex space-x-2 flex-wrap gap-1 gap-y-3  pt-6 pb-2 justify-center">
        {PROGRAMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-3  font-normal transition duration-300 ease-in-out  ${
              activeIndex === index
                ? "bg-accent-higher text-contrast-lowest dark:bg-zinc-800 dark:text-zinc-100 text-sm"
                : "bg-zinc-100 text-contrast-higher dark:bg-zinc-700 dark:text-zinc-400 text-sm"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {PROGRAMS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-center justify-between mt-8 flex-wrap gap-4"
            >
              <div className="w-full lg:w-45/100">
                <h3 className="text-contrast-higher font-semibold text-lg  pb-4">
                  {item.title}
                </h3>
                {item.skills.map((line, i) => (
                  <div key={i}>
                    <RedCircle className="fill-accent-higher w-2 inline-block"></RedCircle>
                    <span className="ml-2 mb-2 font-normal text-contrast-higher text-sm">
                      {line}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-45/100 mt-4 lg:mt-0 ">
                <h4 className="font-semibold text-sm">
                  Институты, учавствующие в данном направлении
                </h4>
                <div className="flex mt-4 gap-2 flex-wrap">
                  {item.institutes.map((line, i) => (
                    <span
                      key={i}
                      className="bg-contrast-lower2 px-3 py-2 rounded-4xl text-xs"
                    >
                      {line}
                    </span>
                  ))}
                </div>
                <Link
                  scroll={true}
                  className="mt-4 block underline text-xs text-contrast-low"
                  href={{
                    pathname: "/courses",
                    query: {
                      id: item.id,
                    },
                  }}
                >
                  Подробнее про направление {item.title}
                </Link>
              </div>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
