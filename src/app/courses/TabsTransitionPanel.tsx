"use client";

import Accordion from "@/components/Accordion";
import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import { SlideIn } from "@/components/SlideIn";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PROGRAMS } from "../../../public/data/institutes";

import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
  CarouselIndicator,
} from "components/motion-primitives/carousel";
// import Carousel from "@/components/Carousel"
import { cn } from "@/lib/utils";

// import Video from "next-video";
// import getStarted from "public/videos/promo.mp4";

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
    const idx = PROGRAMS.findIndex((item) => item.id === idNum);
    if (idx >= 0) setActiveIndex(idx);
  }, [id]);

  return (
    <div className="flex flex-col ">
      {/* <h1 className="py-2 text-4xl lg:text-center font-semibold">
        Направления подготовки
      </h1> */}
      <div className="mb-4 flex space-x-2 flex-wrap gap-1 gap-y-3  pt-6 pb-2 justify-center border-t border-zinc-200">
        {PROGRAMS.map((item, index) => (
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
          {PROGRAMS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  lg:items-center justify-between mt-8 flex-wrap w-full gap-2 xl:gap-0"
            >
              <h3 className="text-contrast-higher font-semibold text-lg  ">
                {item.title}
              </h3>
              <p className="xl:text-center xl:w-2/3 mt-2">{item.description}</p>

              {/* <SlideIn className="w-full lg:mt-0 mt-5" direction="right"> */}
              <section className="w-full  min-h-[40vh] flex flex-col 2xl:flex-row items-center justify-center 2xl:justify-between 2xl:gap-2 gap-5">
                <div className="text-center w-full flex-col h-fit lg:h-26 bg-contrast-high-2 text-contrast-lowest  py-8 rounded-xl px-6 flex items-center justify-between ">
                  <p className="text-contrast-lowest text-xs">форма обучения</p>
                  <p className="text-center font-semibold">СМЕШАННАЯ</p>
                </div>

                <div className="text-center w-full flex-col h-fit lg:h-26 bg-accent-low text-contrast-lowest  py-8 rounded-xl px-6 flex items-center justify-between ">
                  <p className="text-contrast-lowest text-xs">
                    итоговая работа
                  </p>
                  <p className="text-center font-semibold">{item.thesis}</p>
                </div>

                <div className="text-center w-full flex-col h-fit lg:h-26 bg-contrast-high-2 text-contrast-lowest  py-8 rounded-xl px-6 flex items-center justify-center ">
                  <p className="text-center font-semibold">
                    ВВОДНЫЙ КУРС + 4&nbsp;УЧЕБЫХ МОДУЛЯ
                  </p>
                </div>
                <div className="text-center w-full flex-col h-fit lg:h-26 bg-contrast-high-2 text-contrast-lowest  py-8 rounded-xl px-6 flex items-center justify-center ">
                  <p className="text-center font-semibold">
                    КВАЛИФИКАЦИЯ ПРОГРАММИСТ
                  </p>
                </div>
              </section>
              {/* </SlideIn> */}

              <h3 className="pb-4 xl:pt-2 pt-6 text-lg lg:text-center font-semibold">
                Доступно для направлений
              </h3>
              <SlideIn className="w-full" direction="right">
                <div className="flex flex-wrap flex-col w-full text-sm bg-contrast-lower2 rounded-xl p-4">
                  {item.fields?.map((item, i) => (
                    <span key={i} className="py-0.5">
                      <b>{item.code} </b>
                      {item.name}
                    </span>
                  ))}
                </div>
              </SlideIn>
              <h1 className="mt-10 mb-10 text-3xl  font-semibold lg:text-center ">
                Видео курса
              </h1>

              <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
                {item.videos?.map((item, i) => (
                  <video
                    key={i}
                    className="rounded-xl w-96 border-contrast-lower2 border-1"
                    controls
                    preload="metadata"
                  >
                    <source src={item + "#t=1"} type="video/mp4" />
                    Браузер не поддерживает видео
                  </video>
                ))}
              </div>
              <h1 className="mt-10 mb-10 text-3xl  font-semibold lg:text-center ">
                Программа курса
              </h1>

              <SlideIn className="w-full" direction="left">
                <Accordion data={item.modules ?? []}></Accordion>
              </SlideIn>
              <div className={cn(item.previews ? "block" : "hidden")}>
                <h1 className="mt-10 pb-2  text-3xl  font-semibold lg:text-center ">
                  Итоговые работы студентов
                </h1>
                <p className="mb-10 text-xs lg:text-center text-contrast-lower">2024-2025 год</p>
                <div className="w-full flex justify-center items-center align-middle">
                  <Carousel>
                    <CarouselContent className="">
                      {item.previews?.map((item, i) => (
                        <CarouselItem
                          key={i}
                          className="p-4 md:pl-2 md:basis-1/2 lg:basis-1/3 "
                        >
                          <div className=" flex aspect-square align-center items-center justify-center  border-zinc-200">
                            <Image
                              className="w-fit rounded-xl border-contrast-lower2 object-center"
                              alt="preview"
                              src={item}
                            ></Image>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselNavigation alwaysShow className="z‑20" />
                    <CarouselIndicator />
                  </Carousel>
                  {/* <Carousel previews={item.previews}></Carousel> */}
                </div>
              </div>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
