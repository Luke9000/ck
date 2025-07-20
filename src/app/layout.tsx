import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/global.css";
import { ReactLenis } from 'lenis/react';
import type { Metadata } from "next";
import localFont from "next/font/local";
// 100: Thin.
// 200: Extra Light (or Ultra Light).
// 300: Light.g
// 400: Regular.
// 500: Medium.
// 600: Semi Bold (or Demi Bold).
// 700: Bold.
// 800: Extra Bold (or Ultra Bold).
// 900: Black (or Heavy)

const involve = localFont({
  src: [
    {
      path: "/fonts/Involve-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Involve-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Involve-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-involve",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Цифровая Кафедра СПБГУПТД",
  description: "Добро пожаловать на сайт ЦК",
  openGraph: {
    title: "Кафедра Цифровых и аддитивных технологий",
    description: "Добро пожаловать на официальный сайт кафедры ЦАТ СПбГУПТД.",
    url: "https://datsutd.ru",
    siteName: "Кафедра ЦАТ СПбГУПТД",
    images: [
      {
        url: "https://tukzhejovsuybrreadju.supabase.co/storage/v1/object/public/misc//Logo.svg",
        width: 807,
        height: 100,
        alt: "Логотип кафедры ЦАТ",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"ru"}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </head>
      <body className={`${involve.className} `}>
        <ReactLenis root/>
        <Header></Header>
        <main className="px-4 md:px-8 min-h-screen  w-full relative break-all xxs:break-normal">{children}</main>
        <hr className="mt-12"></hr>
        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}
