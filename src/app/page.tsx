import RedCircle from "@/components/icons/RedCircle";
import Image from "next/image";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SlideIn } from "@/components/SlideIn";

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh]  flex flex-col justify-between ">
        <RedCircle></RedCircle>
        <div className="h-[15vh]"></div>
        <SlideIn direction="left">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-5 ">
              <h1 className="text-3xl md:text-6xl font-semibold">
                Проект <br />
                «Цифровые кафедры»
              </h1>
              <p className="text-sm text-[color:var(--color-contrast-high)]">
                программа стратегического лидерства «Приоритет 2030»
                <br className="hidden md:block" /> федерального проекта
                «Развитие кадрового потенциала ИТ-отрасли»,
                <br className="hidden md:block" /> в рамках национальной
                программы «Цифровая экономика Российской Федерации»
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

        <SlideIn direction="right" className="flex flex-wrap justify-end gap-2 xl:w-2/3 h-fit">
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
    </div>
  );
}
