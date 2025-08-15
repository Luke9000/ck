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
  CarouselItem
} from "components/motion-primitives/carousel";

import { IMAGE_PATH } from "@/utils/assetPaths";

export default function TabsTransitionPanel() {
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

  return (
    <div className="flex flex-col ">
      <div className="mb-4 flex space-x-2 flex-wrap gap-1 gap-y-3  pt-6 pb-2 justify-center border-t border-zinc-200">
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
            <div key={index} className="flex flex-col gap-14">
              {item.works.map((item2, index) => (
                <div
                  key={index}
                  className="h-80 flex flex-col lg:flex-row   lg:items-center justify-between mt-8  w-full gap-2 xl:gap-8"
                >
                  <div className="flex flex-col justify-between h-full w-1/4">
                    <div className="flex flex-col">
                      <h3 className="text-contrast-higher font-semibold text-lg  mb-5">
                        {item2.title}
                      </h3>

                      {item2.authors.map((author, idx) => (
                        <p key={idx} className="text-sm">
                          {author.trim()}
                        </p>
                      ))}
                    </div>
                    <p className="w-fit text-sm border-3 p-3 rounded-2xl font-semibold border-contrast-high">
                      {item.title}
                    </p>
                  </div>

                  <div className="w-full flex justify-center  h-full">
                    <Carousel className="h-full w-full">
                      <CarouselContent className="h-full w-full 123">
                        {item2.images.map(
                          (item: string, i: Key) => (
                            <CarouselItem
                             key={`${item2.title}-${i}`}
                              className="  md:pl-2 md:basis-1/2 h-full"
                            >
                              <Image
                                unoptimized
                                draggable={false}
                                className="object-contain  rounded-xl border-contrast-lower2 object-center"
                                alt={item2.authors + item2.title}
                                src={IMAGE_PATH + item}
                                width={1200}
                                height={950}
                              ></Image>
                            </CarouselItem>
                          )
                        )}
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
