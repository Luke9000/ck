import Accordion from "@/components/Accordion";
import { AnimatedTimeline } from "@/components/animata/AnimatedTimeline";
import RedCircle from "@/components/icons/RedCircle";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SlideIn } from "@/components/SlideIn";
import Tabs from "@/components/Tabs";
import { InfiniteSlider } from "components/motion-primitives/infinite-slider";
import Image from "next/image";
import { ROADMAP } from "public/data/events";

import FAQ from "public/data/FAQ";
import brandy from "public/images/partners/brandy.png";
import btk from "public/images/partners/btk.png";
import galaktika from "public/images/partners/galaktika.svg";
import ilim from "public/images/partners/ilim.svg";
import mts from "public/images/partners/mts.png";
import planetarii_1 from "public/images/partners/planetarii_1.png";
import rostelekom from "public/images/partners/rostelekom.png";
import tgk_1 from "public/images/partners/tgk_1.png";

const partners = [
  {
    alt: "brandy",
    src: brandy,
  },
  {
    alt: "btk",
    src: btk,
    w: 32,
  },
  {
    alt: "ilim",
    src: ilim,
  },
  {
    alt: "mts",
    src: mts,
    w: 21,
  },
  {
    alt: "galaktika",
    src: galaktika,
  },
  {
    alt: "planetarii_1",
    src: planetarii_1,
  },
  {
    alt: "rostelekom",
    src: rostelekom,
  },
  {
    alt: "tgk_1",
    src: tgk_1,
    w: 32,
  },
];

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh]  flex flex-col justify-between relative -mt-[13vh]">
        <RedCircle className="fill-contrast-lower2 stroke-contrast-lower2 translate-x-[calc(40%+2rem)] origin-center absolute -top-[calc(50vh-13vh)] md:-top-60 -z-30 flex justify-center h-[140vh] w-full overflow-visible"></RedCircle>

        <div className="h-[15vh]"></div>
        <SlideIn direction="left">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-4  lg:gap-5 w-full lg:w-4/5">
              <div className="flex gap-2 sm:gap-4 flex-wrap">
                <span className="text-3xl md:text-6xl font-semibold">
                  Цифровая
                </span>

                <span className="text-3xl md:text-6xl font-semibold relative inline-block">
                  кафедра
                  <RedCircle className="fill-accent-higher hidden  w-4 absolute -top-5 -right-5 xxs:block -z-30  overflow-visible"></RedCircle>
                </span>
              </div>

              <h1 className="text-xl md:text-6xl font-semibold">
                ПРОМТЕХДИЗАЙН
              </h1>

              <p className="hidden lg:block text-sm text-[color:var(--color-contrast-high)] md:w-3/5">
                всероссийский проект, который предоставляет возможность
                студентам вместе с дипломом о высшем образовании получить
                дополнительную квалификацию и освоить компетенции в IT-сфере
                бесплатно и без отрыва от основной
                образовательной&nbsp;программы
              </p>
              <p className="lg:hidden text-sm text-[color:var(--color-contrast-high)] md:w-3/5">
                всероссийский проект, который предоставляет возможность
                студентам вместе с дипломом о высшем образовании получить
                дополнительную квалификацию и освоить компетенции в IT-сфере
                бесплатно и без отрыва от основной
                образовательной&nbsp;программы
              </p>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* <SlideIn direction="left">
        <section className="rounded-2xl mt-20 h-fit bg-contrast-lower2 min-h-[60vh] p-0 lg:p-8 flex flex-row items-center relative overflow-hidden">
          <div className="border-accent-higher lg:border-l-2 lg:w-2/3 h-fit p-4 lg:p-4">
            <h2 className="text-2xl font-semibold">
              Цифровая кафедра ПРОМТЕХДИЗАЙН
            </h2>
            <p className="text-sm lg:text-base">
              всероссийский проект, который предоставляет уникальную возможность
              студентам вместе с дипломом о высшем образовании получить
              дополнительную квалификацию и освоить компетенции в IT-сфере
              бесплатно и без отрыва от основной образовательной&nbsp;программы
            </p>
          </div>
        </section>
      </SlideIn> */}

      <SlideIn direction="right">
        <section className="mt-20 min-h-[40vh] flex flex-col 2xl:flex-row items-center justify-center 2xl:justify-between 2xl:gap-2 gap-5">
          <div className="flex flex-col gap-2 items-center w-2/3 2xl:w-full">
            <div className="w-full  h-34 bg-contrast-medium text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={9}
              />
            </div>
            <p className="font-medium text-center">месяцев обучения</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-2/3 2xl:w-full">
            <div className="w-full  h-34 bg-contrast-high text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={5}
              />
            </div>
            <p className="font-medium text-center">IT-компетенций</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-2/3 2xl:w-full">
            <div className="w-full  h-34 bg-contrast-high-2 text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={3}
              />
            </div>
            <p className="font-medium text-center">формата обучения</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-6/7 lg:w-full">
            <div className="w-full  h-44 bg-accent-higher text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-6xl"
                value={2}
              />
            </div>
            <p className="font-medium text-center">диплома по окончании ВУЗа</p>
          </div>
        </section>
      </SlideIn>

      <SlideIn direction="left">
        <section className="mt-20 min-h-[40vh] flex flex-col items-center justify-center gap-15">
          <h1 className="font-semibold text-4xl">
            Кто может стать участником?
          </h1>
          <h2 className="font-semibold text-base md:w-1/2 md:text-center">
            Для зачисления на Цифровую кафедру ПРОМТЕХДИЗАЙН необходимо

          </h2>
          <div className="flex flex-col xl:flex-row justify-between gap-2 w-full">
            <div className="relative overflow-hidden bg-contrast-lower2  rounded-xl p-4  w-full justify-between   flex flex-col gap-8">
              <div className="flex sm:flex-row justify-between">
                <h2 className="text-l  font-semibold w-9/10  sm:w-7/10">
                  Обучение на 2 курсе бакалавриата или специалитета
                </h2>
                <div className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-semibold text-contrast-lowest bg-accent-higher text-center">
                  <p className="">1</p>
                </div>
              </div>
              <p className="text-xs font-medium   sm:w-9/10">
                Не пройдено обучение на Цифровой кафедре ранее
              </p>
            </div>
            <div className="relative overflow-hidden bg-contrast-lower2  rounded-xl p-4  w-full justify-between   flex flex-col gap-8">
              <div className="flex sm:flex-row justify-between">
                <h2 className="text-l   font-semibold w-9/10  sm:w-7/10">
                  Специальность не относится к IT-сфере
                </h2>
                <div className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-semibold text-contrast-lowest bg-accent-higher text-center">
                  <p className="">2</p>
                </div>
              </div>
              <p className="text-xs font-medium   sm:w-9/10">
                Подробный список специальностей доступен в разделе «Направления»
              </p>
            </div>
            <div className="relative overflow-hidden bg-contrast-lower2  rounded-xl p-4  w-full justify-between   flex flex-col gap-8">
              <div className="flex sm:flex-row justify-between">
                <h2 className="text-l   font-semibold w-9/10  sm:w-7/10">
                  Прохождение вводного курса
                </h2>
                <div className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-semibold text-contrast-lowest bg-accent-higher text-center">
                  <p className="">3</p>
                </div>
              </div>
              <p className="text-xs font-medium   sm:w-9/10">
                Пройдено тестирование по окончании вводного курса
              </p>
            </div>
          </div>
        </section>
        {/* <p className="xl:text-right  xl:pl-[70%] text-contrast-low text-xs/4 mt-2">
          *Студент прошел вступительный онлайн-курс и ранее не учился на
          цифровой кафедре
        </p> */}
      </SlideIn>

      <SlideIn direction="right">
        <section className=" mt-20 h-fit">
          <Tabs />
        </section>
      </SlideIn>

      <SlideIn direction="left">
        <h1 className="pt-12 text-3xl ml-auto font-semibold lg:text-center mb-4">
          Дорожная карта проекта
        </h1>
        <AnimatedTimeline events={ROADMAP}></AnimatedTimeline>
      </SlideIn>

      <SlideIn direction="left">
        <section className="rounded-2xl mt-20 h-fit bg-contrast-high-2 p-0 lg:p-8 flex flex-row items-center relative overflow-hidden">
          <div className="border-accent-higher lg:border-l-2 lg:w-2/3 h-fit p-4 lg:p-4 text-contrast-lowest flex flex-col gap-3">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              О проекте «Цифровые кафедры»
            </h2>
            <p className="text-xs lg:text-base">
              Проект реализован в вузах-участниках программы стратегического
              лидерства «Приоритет 2030» федерального проекта «Развитие
              кадрового потенциала ИТ-отрасли», в&nbsp;рамках национальной
              программы «Цифровая&nbsp;экономика Российской&nbsp;Федерации»
              <br></br>
              <br></br>В университете ПРОМТЕХДИЗАЙН реализуется на{" "}
              <b>базе кафедры Цифровых и&nbsp;аддитивных&nbsp;технологий</b>
            </p>
          </div>
          {/* <RedCircle className="fill-contrast-high w-60 absolute overflow-hidden -right-30 hidden lg:block"></RedCircle> */}
        </section>
      </SlideIn>

      <SlideIn className="w-full flex justify-center align-center" direction="left">
        <section className="h-fit flex flex-col xl:flex-row mt-8 gap-6 md:gap-2 xl:w-6/8 flex-wrap justify-center">
          {/* Блок 1 */}
          <div className="w-full xl:w-[70%] bg-contrast-lower2 text-contrast-higher font-semibold p-4 h-fit rounded-2xl px-6 flex flex-row items-center gap-4">
            <div className="text-xl flex flex-row items-center">
              {/* <span>{">"}</span> */}
              <NumberTicker className="text-contrast-higher" value={129} />
            </div>
            <div className="text-xs">
              <p>
                университетов‑участников программы создали «Цифровые кафедры»
              </p>
              {/* <p className="text-contrast-low">(на май 2024)</p> */}
            </div>
          </div>
          {/* Блок 2 */}
          <div className="h-100% w-full xl:w-[45%] bg-contrast-lower2 text-contrast-higher font-semibold p-4  rounded-2xl px-6">
            <div className="text-xl">
              {/* <span>{">"}</span> */}
              <NumberTicker className="text-contrast-higher" value={231936} />
              <span>{" чел."}</span>
            </div>
            <div className="text-xs">
              <p>прошли обучение на Цифровых кафедрах к 2025 году</p>
            </div>
          </div>
          {/* Блок 3 */}
          <div className="w-full xl:w-[40%] bg-contrast-lower2 text-contrast-higher font-semibold p-4 h-100% rounded-2xl px-6">
            <div className="text-xl">
              {/* <span>{">"}</span> */}
              <NumberTicker className="text-contrast-higher" value={935570} />
              <span>{" чел."}</span>
            </div>
            <div className="text-xs">
              <p>
                студентов получат дополнительную квалификацию по IT-профилю к
                2030 году
              </p>
            </div>
          </div>
          {/* Блок 4 */}
          <div className="w-full xl:w-[calc(85%+0.5rem)] bg-contrast-lower2 text-contrast-higher font-semibold p-4 h-fit rounded-2xl px-6 flex flex-row items-center gap-4">
            <div className="text-xl ">
              <span>{">"}</span>
              <NumberTicker className="text-contrast-higher" value={1600} />
            </div>
            <div className="text-xs">
              <span>компаний-партнёров «Цифровых кафедр» в 2024 году</span>
            </div>
          </div>
          <p className="text-xs font-regular text-contrast-lower">
            *Данные ФГАНУ «Социоцентр» МИНОБРНАУКИ России за 2024-2025 учебный
            год
          </p>
        </section>
      </SlideIn>
      <h1 className="mt-20 text-2xl  font-semibold lg:text-center ">
        О Цифровой кафедре ПРОМТЕХДИЗАЙН
      </h1>
      <section className="min-h-[60vh] flex flex-col lg:flex-row mt-20 md:mt-20 gap-6 md:gap-6 items-center">
        <SlideIn>
          <div className="flex flex-col gap-8 w-[1/3]">
            <Image
              className="border-accent-higher rounded-full border-4 w-45 p-3"
              quality={100}
              width={331}
              height={331}
              alt="Soshnikov A.V."
              src="/images/misc/soshnikov.png"
            ></Image>
            <div className="border-l-3 border-accent-higher pl-4">
              <h2 className="text-xl font-semibold">
                Антон Владимирович Сошников
              </h2>
              <p className="text-sm text-[color:var(--color-contrast-high)]">
                Руководитель Цифровой кафедры,{" "}
                <br className="hidden md:block" /> заведующий кафедрой «Цифровых
                и&nbsp;аддитивных <br className="hidden md:block" />{" "}
                технологий», кандидат технических наук, доцент
              </p>
            </div>
          </div>
        </SlideIn>

        <SlideIn
          direction="right"
          className="flex flex-wrap justify-end gap-2 xl:w-2/3 h-fit"
        >
          {/* Блок 1 */}
          <div className=" w-full  bg-accent-higher text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-6 py-6 flex flex-row items-center gap-4 sm:flex-nowrap flex-wrap">
            <div className="text-3xl flex flex-row">
              <NumberTicker className="text-contrast-lowest" value={2100} />
              <span>{"+"}</span>
            </div>
            <div className="text-md font-medium">
              <p>обучающихся на ЦК ПРОМТЕХДИЗАЙН</p>
            </div>
          </div>

          {/* <div className="hidden xl:block xl:w-2/5 bg-transparent p-4 h-fit rounded-2xl px-6 py-8"></div> */}

          {/* Блок 2 */}
          <div className="w-full xl:w-[40%] bg-contrast-high-2 text-contrast-lowest font-semibold  h-100% rounded-2xl px-6 py-6 flex flex-row items-center gap-4 sm:flex-nowrap  2xl:flex-nowrap xl:flex-wrap ">
            <div className="text-3xl flex flex-row">
              <NumberTicker className="text-contrast-lowest" value={40} />
              <span>{"+"}</span>
            </div>
            <div className="text-sm font-medium">
              <p>кураторов-наставников</p>
            </div>
          </div>
          {/* Блок 3 */}
          <div className="w-full xl:flex-1 bg-contrast-high-2 text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-6 py-6 flex flex-row items-center gap-4 2xl:flex-nowrap xl:flex-wrap sm:flex-nowrap flex-wrap ">
            <div className="text-3xl flex flex-row">
              <NumberTicker className="text-contrast-lowest" value={20} />
              <span>{"+"}</span>
            </div>
            <div className="text-sm font-medium">
              <p>преподавателей из IT-отрасли, реального сектора экономики</p>
            </div>
          </div>
          {/* Блок 4 */}
          <div className="basis-full w-full xl:w-[calc(85%+0.5rem)] bg-contrast-lower text-contrast-higher font-semibold p-4 h-fit rounded-2xl px-6 py-6 flex flex-row items-center gap-4 sm:flex-nowrap flex-wrap">
            <div className="text-3xl flex flex-row">
              <NumberTicker className="text-contrast-higher" value={10} />
              <span>{"+"}</span>
            </div>
            <div className="text-md font-medium">
              <span>
                профильных компаний, привлеченных для прохождения практики
              </span>
            </div>
          </div>
          {/* <p className="text-xs font-regular text-contrast-low">
            *по данным МИНОБРНАУКИ России за 2023-2024 учебный год
          </p> */}
        </SlideIn>
      </section>

      <h1 className="mt-20 text-3xl  font-semibold lg:text-center ">
        Динамика обучения
      </h1>

      <SlideIn className="mt-20 md:flex-row flex-col items-center md:items-baseline flex gap-10" direction="left">
        {/*1 block*/}
        <div className="md:w-1/3 w-full">
          <p>учебный год</p>
          <p className="mt-1 font-semibold">2024-2025</p>
          <div className="flex flex-row items-center relative">
            {/*red circle*/}
            <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-accent-higher flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-accent-higher"></div>
            </div>
            {/*red line*/}
            <div className="my-4 h-0 w-full  border-t-2 border-accent-higher"></div>
            {/*red circle*/}
            <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-accent-higher flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-accent-higher"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-semibold">2142</p>
              <p className="text-xs">зачислено</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">1919</p>
              <p className="text-xs">закончили</p>
            </div>
          </div>
        </div>

        {/*2 block*/}
        <div className="md:w-1/3 w-full text-contrast-low">
          <p>учебный год</p>
          <p className="mt-1 font-semibold">2023-2024</p>
          <div className="flex flex-row items-center relative">
            {/*red circle*/}
            <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-low flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-contrast-low"></div>
            </div>
            {/*red line*/}
            <div className="my-4 h-0 w-full  border-t-2 border-contrast-low"></div>
            {/*red circle*/}
            <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-low flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-contrast-low"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-semibold">2122</p>
              <p className="text-xs">зачислено</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">1915</p>
              <p className="text-xs">закончили</p>
            </div>
          </div>
        </div>

        {/*3 block*/}
        <div className="md:w-1/3 w-full text-contrast-lower">
          <p>учебный год</p>
          <p className="mt-1 font-semibold">2022-2023</p>
          <div className="flex flex-row items-center relative">
            {/*red circle*/}
            <div className="min-w-3.5 max-w-3.5  w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-lower flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-contrast-lower"></div>
            </div>
            {/*red line*/}
            <div className="my-4 h-0 w-full  border-t-2 border-contrast-lower"></div>
            {/*red circle*/}
            <div className="min-w-3.5 max-w-3.5 w-3.5 h-3.5 rounded-full bg-transparent border-3 border-contrast-lower flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-contrast-lower"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-semibold">1413</p>
              <p className="text-xs">зачислено</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">1178</p>
              <p className="text-xs">закончили</p>
            </div>
          </div>
        </div>
      </SlideIn>

      <h1 className="mt-20 mb-10 text-3xl  font-semibold lg:text-center ">
        Партнеры проекта
      </h1>
      <SlideIn direction="right">
        <InfiniteSlider gap={24}>
          {partners.map((partner, index) => (
            <Image
              key={index}
              className={`p-8 object-contain ${
                partner.w ? `w-${partner.w}` : "w-48"
              } `}
              alt={partner.alt}
              src={partner.src}
            ></Image>
          ))}
        </InfiniteSlider>
      </SlideIn>

      <h1 className="mt-10 mb-10 text-3xl  font-semibold lg:text-center ">
        Вопрос-Ответ
      </h1>
      <Accordion data={FAQ}></Accordion>
    </div>
  );
}
