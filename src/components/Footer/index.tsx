
import Image from "next/image";
import Link from "next/link";
import logo_prioretet from "../../../public/svg/2030_logo.svg";
import logo_sutd from "../../../public/svg/sutd_logo.svg";

const infoList = [
  {
    label: "Адрес",
    href: "https://maps.apple.com/?q=Вознесенский пр., д. 46",
    text: "Вознесенский пр., д. 46",
  },
  {
    label: "Почта",
    href: "mailto:iskd@sutd.ru",
    text: "iskd@sutd.ru",
  },
  {
    label: "Университет",
    href: "https://sutd.ru",
    text: "sutd.ru",
  },
  {
    label: "Абитуриентам",
    href: "https://prouniver.ru",
    text: "prouniver.ru",
  },
  {
    label: "ЛК",
    href: "https://portal.sutd.ru",
    text: "portal.sutd.ru",
  },
];

const index = () => {
  return (
    <footer className="flex flex-col md:flex-row  w-full  justify-between py-6 gap-6 px-8 ">
      <div className="flex flex-col gap-4 ">
        {infoList.map(({ label, href, text }) => (
          <div key={label} className="grid md:grid-cols-[220px_1fr]">
            <span className="text-md font-semibold text-contrast-high">
              {label}
            </span>
            <Link className="xxs:break-normal" href={href}>{text}</Link>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap flex-col gap-8  md:w-1/3 w-full justify-between md:items-end">
        <Image className="w-fit" src={logo_sutd} alt="logo_sutd"></Image>
        <Image className="" src={logo_prioretet} alt="logo_prioritet"></Image>
      </div>
    </footer>
  );
};

export default index;
