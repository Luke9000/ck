import RedCircle from "@/components/icons/RedCircle";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SlideIn } from "@/components/SlideIn";
import Image from "next/image";
import Tabs from "@/components/Tabs";
import { AnimatedTimeline } from "@/components/animata/AnimatedTimeline";
import { EVENTS } from "public/data/events";

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh]  flex flex-col justify-between relative -mt-[13vh]">
        <RedCircle className="fill-contrast-lower2 stroke-contrast-lower2 translate-x-[calc(50%+2rem)] origin-center absolute -top-[calc(50vh-13vh)] md:top-0 -z-30 flex justify-center h-[100vh] w-full overflow-visible"></RedCircle>

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
                в&nbsp;рамках национальной программы «Цифровая&nbsp;экономика&nbsp;Российской&nbsp;Федерации»
              </p>
              <p className="lg:hidden text-sm text-[color:var(--color-contrast-high)] md:w-3/5">
                программа стратегического лидерства «Приоритет 2030»
                федерального проекта «Развитие кадрового потенциала ИТ-отрасли»,
                в&nbsp;рамках национальной программы «Цифровая&nbsp;экономика Российской&nbsp;Федерации»
              </p>
            </div>
          </div>
        </SlideIn>
      </section>

      <section className="min-h-[100vh] flex flex-col lg:flex-row mt-20 md:mt-40 gap-6 md:gap-6">
        <SlideIn>
          <div className="flex flex-col gap-8 w-[1/3]">
            <Image
              className="border-accent-higher rounded-full border-4 w-45 p-3"
              quality={100}
              width={331}
              height={331}
              alt="Soshnikov A.V."
              src="/images/soshnikov.png"
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

      <SlideIn direction="right">
        <section className=" mt-20 xl:-mt-[10vh] h-fit">
          <Tabs />
        </section>
      </SlideIn>
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
      <SlideIn direction="left">
        <h1 className="pt-12 text-3xl ml-auto font-semibold">
          Обучение на Цифровой кафедре
        </h1>
        <h6 className="text-contrast-low">дорожная карта</h6>
        <AnimatedTimeline events={EVENTS}></AnimatedTimeline>
      </SlideIn>
    </div>
  );
}
