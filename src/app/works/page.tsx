import { Suspense } from "react";
import UI from "./UI";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Работы студентов",
  description:
    "Выпускные проекты студентов Цифровой кафедры ПромТехДизайн",
};

export default function CoursesPage() {
  return (
    <Suspense fallback={<div></div>}>
      <UI />
    </Suspense>
  );
}
