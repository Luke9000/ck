import RedCircle from "@/components/icons/RedCircle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh]  flex flex-col justify-between ">
        <RedCircle></RedCircle>
        <div className="h-[15vh]"></div>
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-3xl md:text-6xl font-semibold">
              Проект <br />
              «Цифровые кафедры»
            </h1>
            <p className="text-sm text-[color:var(--color-contrast-high)]">
              программа стратегического лидерства «Приоритет 2030»
              <br className="hidden md:block"/> федерального проекта «Развитие кадрового потенциала
              ИТ-отрасли»,
              <br className="hidden md:block"/> в рамках национальной программы «Цифровая экономика
              Российской Федерации»
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] flex flex-row mt-40">
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
              Руководитель Цифровой кафедры, <br className="hidden md:block"/> заведующий кафедрой
              «Цифровых и&nbsp;аддитивных <br className="hidden md:block"/> технологий», кандидат технических
              наук, доцент
            </p>
          </div>
        </div>
        <p>12321</p>
      </section>
    </div>
  );
}
