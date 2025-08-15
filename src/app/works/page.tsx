import { Suspense } from "react";
import UI from "./UI";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Направления подготовки",
  description:
    "Ознакомьтесь с направлениями подготовки на Цифровой кафедре СПбГУПТД: веб-дизайн, ИИ, алгоритмизация и программирование, продвижение бренда, визуализация бренда",
};

export default function CoursesPage() {
  return (
    <Suspense fallback={<div></div>}>
      <UI />
    </Suspense>
  );
}
