import Image from "next/image";
import min_obr from "public/images/logos/min_obr.png";
import socio_centr from "public/images/logos/socio_centr.png";
import logo_prioretet from "public/images/partners/prioritet_2030.svg";
import logo_sutd from "public/svg/sutd_logo.svg";
import Logo from "../icons/Logo";

const index = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col xl:flex-row  w-full  justify-between pt-12  gap-8 xl:gap-12">
        <div className="xl:py-0 py-8 flex flex-col text-xs gap-3 w-full xl:w-72  xl:bg-transparent bg-contrast-high px-8 text-contrast-lowest xl:text-black">
          <Logo className="w-30 fill-contrast-lowest xl:fill-black"></Logo>
          <p className="  ">
            190068, Санкт-Петербург, Вознесенский проспект, 44-46, кафедра ЦАТ
          </p>
          <p>dc-info@sutd.ru</p>
        </div>
        <div className=" px-8 flex items-center  flex-col xl:flex-row gap-8 xl:gap-2 w-full justify-between">
          <Image
            className="object-contain w-20 xl:w-12"
            alt="logo_sutd"
            src={logo_sutd}
          ></Image>
          <Image
            className="object-contain w-36"
            alt="logo_prioretet"
            src={logo_prioretet}
          ></Image>
          <Image
            className="object-contain w-32 xl:w-24"
            alt="socio_center"
            src={socio_centr}
          ></Image>
          <Image
            className="object-contain w-36"
            alt="min_obr"
            src={min_obr}
          ></Image>
        </div>
      </div>
      <p className="text-xs text-contrast-lower pb-8 px-8 pt-8 xl:pt-4 text-center">ФГБОУ ВО Санкт-Петербургский государственный университет промышленных технологий и дизайна</p>
    </footer>
  );
};

export default index;
