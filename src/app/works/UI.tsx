"use client";

import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { WORKS } from "public/data/works";
import { Key, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "components/motion-primitives/carousel";

import { IMAGE_PATH } from "@/utils/assetPaths";

export default function UI() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const onClickTab = (index: number, id: number) => {
    setActiveIndex(index);
    router.replace(`${pathname}?id=${id}`, { scroll: false });
  };

  useEffect(() => {
    if (!id) return;
    const idNum = Number(id);
    if (isNaN(idNum)) return;
    const idx = WORKS.findIndex((item) => item.id === idNum);
    if (idx >= 0) setActiveIndex(idx);
  }, [id]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.slice(1);
    if (!hash) return;

    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (tryScroll()) return;
  }, [activeIndex]);

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-0 flex space-x-2 flex-wrap gap-1 gap-y-3  pt-6 pb-2 justify-center border-t border-zinc-200 items-center">
        {WORKS.map((item, index) => (
          <button
            key={index}
            onClick={() => onClickTab(index, item.id)}
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

      <div className="mb-0 border-t-1 pt-4">
        {/* <h1 className="mb-2 text-xl  font-semibold lg:text-center ">
            Институты, учавствовавшие в данном направлении
          </h1> */}
        <div className="flex flex-row justify-center flex-wrap">
          {WORKS[activeIndex].institutes.map((item, index) => (
            <p
              key={index}
              className="text-contrast-high-2 font-semibold lg:px-4 p-3 w-fit m-2 lg:m-2 rounded-xl bg-contrast-lower2"
            >
              {item}
            </p>
          ))}
        </div>
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
          {WORKS.map((item, index) => (
            <div key={index} className="flex flex-col gap-14 ">
              {item.works.map((item2, index) => (
                <div
                  id={item2.id?.toString()}
                  key={index}
                  className="flex flex-col  lg:flex-row justify-between mt-8  w-full gap-2 xl:gap-8"
                >
                  <div className="h-full flex flex-col gap-6 justify-between  lg:w-4/10 xl:3/10 mt-3">
                    <div className="">
                      <span className="text-contrast-high-2 font-semibold lg:px-4 p-3 w-fit rounded-xl bg-contrast-lower2 ">
                        {item2.institute}
                      </span>
                      <p className="mt-4 text-contrast-medium text-sm">
                        {item2.field}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-contrast-higher font-semibold text-lg/tight  mb-5">
                        {item2.title}
                      </h3>
                      {item2.authors.map((author, idx) => (
                        <p key={idx} className="text-sm">
                          {author.trim()}
                        </p>
                      ))}
                    </div>
                    <p className=" text-sm font-semibold">2024-2025</p>
                  </div>

                  <div className="w-full flex justify-center  h-full">
                    <Carousel className=" w-full h-full">
                      <CarouselContent className="mb-6 w-full h-full">
                        {item2.images.map((item: string, i: Key) => (
                          <CarouselItem
                            key={`${item2.title}-${i}`}
                            className="lg:basis-1/2 pr-2 last:pr-0 "
                          >
                            <Image
                              unoptimized
                              draggable={false}
                              className="object-contain rounded-xl border-1 border-contrast-lower2 object-center  "
                              alt={item2.authors + item2.title}
                              src={IMAGE_PATH + item}
                              width={1200}
                              height={950}
                            ></Image>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* <CarouselNavigation className="z‑20" /> */}
                      <CarouselIndicator />
                    </Carousel>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
