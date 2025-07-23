import RedCircle from "@/components/icons/RedCircle";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SlideIn } from "@/components/SlideIn";
import Image from "next/image";
import Tabs from "@/components/Tabs";
import { AnimatedTimeline } from "@/components/animata/AnimatedTimeline";
import { ROADMAP } from "public/data/events";
import AnimatedTimeline_old from "@/components/animata/AnimatedTimeline2";

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh]  flex flex-col justify-between relative -mt-[13vh]">
        <RedCircle className="fill-contrast-lower2 stroke-contrast-lower2 translate-x-[calc(50%+2rem)] origin-center absolute -top-[calc(50vh-13vh)] md:-top-35 -z-30 flex justify-center h-[100vh] w-full overflow-visible"></RedCircle>

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
                  <RedCircle className="fill-accent-higher stroke-accent-higher hidden  w-4 absolute -top-5 -right-5 xxs:block -z-30  overflow-visible"></RedCircle>
                </span>
              </div>

              <h1 className="text-xl md:text-6xl font-semibold">
                ПРОМТЕХДИЗАЙН
              </h1>

              <p className="hidden lg:block text-sm text-[color:var(--color-contrast-high)] md:w-3/5">
                программа стратегического лидерства «Приоритет 2030»
                федерального проекта «Развитие кадрового потенциала ИТ-отрасли»,
                в&nbsp;рамках национальной программы
                «Цифровая&nbsp;экономика&nbsp;Российской&nbsp;Федерации»
              </p>
              <p className="lg:hidden text-sm text-[color:var(--color-contrast-high)] md:w-3/5">
                программа стратегического лидерства «Приоритет 2030»
                федерального проекта «Развитие кадрового потенциала ИТ-отрасли»,
                в&nbsp;рамках национальной программы «Цифровая&nbsp;экономика
                Российской&nbsp;Федерации»
              </p>
            </div>
          </div>
        </SlideIn>
      </section>

      <SlideIn direction="left">
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
          <RedCircle className="fill-contrast-high w-60 absolute overflow-hidden -right-30 hidden lg:block"></RedCircle>
        </section>
      </SlideIn>

      <SlideIn direction="right">
        <section className="mt-20 min-h-[40vh] flex flex-col 2xl:flex-row items-center justify-center 2xl:justify-between 2xl:gap-1 gap-5">
          <div className="flex flex-col gap-2 items-center w-2/3 2xl:w-full">
            <div className="w-full  h-34 bg-contrast-medium text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={9}
              />
            </div>
            <p className="font-medium">месяцев обучения</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-2/3 2xl:w-full">
            <div className="w-full  h-34 bg-contrast-high text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={5}
              />
            </div>
            <p className="font-medium">IT-компетенций</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-2/3 2xl:w-full">
            <div className="w-full  h-34 bg-contrast-high-2 text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-4xl"
                value={3}
              />
            </div>
            <p className="font-medium">формата обучения</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-6/7 lg:w-full">
            <div className="w-full 2xl:w-66 h-44 bg-accent-higher text-contrast-lowest font-semibold p-4 rounded-xl px-6 flex items-center justify-center ">
              <NumberTicker
                className="text-contrast-lowest text-6xl"
                value={2}
              />
            </div>
            <p className="font-medium">диплома по окончании ВУЗа</p>
          </div>
        </section>
      </SlideIn>

      <SlideIn direction="left">
        <section className="mt-20 min-h-[40vh] flex flex-col items-center justify-center gap-15">
          <h1 className="font-semibold text-4xl">
            Кто может стать участником?
          </h1>
          <div className="flex flex-col xl:flex-row justify-between gap-6 w-full">
                 <div className="relative overflow-hidden bg-contrast-lower2 h-fit xxs:h-30 rounded-xl w-full gap-2   justify-center flex flex-col ">
              <h2 className="text-l px-4 sm:text-center font-semibold">БАКАЛАВР 2 КУРС*</h2>
              <p className="text-xs sm:text-center font-medium py-4 px-4 xxs:pl-4 xxs:pr-12 sm:px-20">
                НЕ IT-СПЕЦИАЛЬНОСТЬ ОЧНАЯ&nbsp;И&nbsp;ОЧНО-ЗАОЧНАЯ ФОРМЫ
                ОБУЧЕНИЯ
              </p>
              <RedCircle className="fill-accent-higher w-24 absolute overflow-hidden md:-left-12 -right-12 hidden xxs:block "></RedCircle>
            </div>
            <div className="relative overflow-hidden bg-contrast-lower2 h-fit xxs:h-30 rounded-xl w-full gap-2   justify-center flex flex-col ">
              <h2 className="text-l px-4 sm:text-center font-semibold">СПЕЦИАЛИСТ 2 КУРС*</h2>
              <p className="text-xs sm:text-center font-medium py-4 px-4 xxs:pl-4 xxs:pr-12 sm:px-20">
                НЕ IT-СПЕЦИАЛЬНОСТЬ ОЧНАЯ&nbsp;И&nbsp;ОЧНО-ЗАОЧНАЯ ФОРМЫ
                ОБУЧЕНИЯ
              </p>
              <RedCircle className="fill-contrast-high-2 w-24 absolute overflow-hidden md:-left-12 -right-12 hidden xxs:block "></RedCircle>
            </div>
          </div>
        </section>
        <p className="xl:text-right  xl:pl-[70%] text-contrast-low text-xs/4 mt-2">
          *Студент прошел вступительный онлайн-курс и ранее не учился на
          цифровой кафедре
        </p>
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

      <section className="min-h-[100vh] flex flex-col lg:flex-row mt-20 md:mt-40 gap-6 md:gap-6">
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
          <div className="w-full xl:w-[70%] bg-contrast-higher text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-6">
            <div className="text-xl">
              <span>{">"}</span>
              <NumberTicker className="text-contrast-lowest" value={183000} />
            </div>
            <div className="text-xs">
              <p>обучающихся на цифровых кафедрах</p>
              <p className="text-contrast-low">(на май 2024)</p>
            </div>
          </div>
          {/* Блок 2 */}
          <div className="w-full xl:w-[45%] bg-contrast-higher text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-6">
            <div className="text-xl">
              <span>{">"}</span>
              <NumberTicker className="text-contrast-lowest" value={124000} />
            </div>
            <div className="text-xs">
              <p>обучающихся на it</p>
            </div>
          </div>
          {/* Блок 3 */}
          <div className="w-full xl:w-[40%] bg-contrast-high text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-6">
            <div className="text-xl">
              <span>{">"}</span>
              <NumberTicker className="text-contrast-lowest" value={1600} />
            </div>
            <div className="text-xs">
              <p>привлеченных специалистов</p>
            </div>
          </div>
          {/* Блок 4 */}
          <div className="w-full xl:w-[calc(85%+0.5rem)] bg-contrast-medium text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-6">
            <div className="text-xl ">
              <span>{">"}</span>
              <NumberTicker className="text-contrast-lowest" value={1500} />
            </div>
            <div className="text-xs">
              <span>
                IT-компаний и отраслевых организаций-партнёров «цифровых кафедр»
              </span>
            </div>
          </div>
          <p className="text-xs font-regular text-contrast-low">
            *по данным МИНОБРНАУКИ России за 2023-2024 учебный год
          </p>
        </SlideIn>
      </section>

      
      <SlideIn direction="left">
        <section className="h-fit flex flex-col xl:flex-row mt-20 md:mt-40 gap-6 md:gap-2 xl:w-6/8 flex-wrap">
          {/* Блок 1 */}
          <div className=" w-full xl:w-[55%] bg-accent-higher text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-10 py-8">
            <div className="text-4xl">
              <NumberTicker className="text-contrast-lowest" value={2100} />
              <span>{" +"}</span>
            </div>
            <div className="text-md">
              <p>обучающихся</p>
            </div>
          </div>

          <div className="hidden xl:block xl:w-2/5 bg-transparent p-4 h-fit rounded-2xl px-6 py-8"></div>

          {/* Блок 2 */}
          <div className="w-full xl:w-[35%] bg-contrast-high-2 text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-10 py-8">
            <div className="text-4xl">
              <NumberTicker className="text-contrast-lowest" value={40} />
              <span>{" +"}</span>
            </div>
            <div className="text-md">
              <p>кураторов-наставников</p>
            </div>
          </div>
          {/* Блок 3 */}
          <div className="w-full xl:flex-1 bg-contrast-high-2 text-contrast-lowest font-semibold p-4 h-fit rounded-2xl px-10 py-8">
            <div className="text-4xl">
              <NumberTicker className="text-contrast-lowest" value={20} />
              <span>{" +"}</span>
            </div>
            <div className="text-md">
              <p>преподавателей из IT-отрасли, реального сектора экономики</p>
            </div>
          </div>
          {/* Блок 4 */}
          <div className="basis-full w-full xl:w-[calc(85%+0.5rem)] bg-contrast-lower text-contrast-higher font-semibold p-4 h-fit rounded-2xl px-10 py-8">
            <div className="text-4xl ">
              <NumberTicker className="text-contrast-higher" value={10} />
              <span>{" +"}</span>
            </div>
            <div className="text-md">
              <span>
                профильных компаний, привлеченных для прохождения практики
              </span>
            </div>
          </div>
        </section>
      </SlideIn>
     
    </div>
  );
}
