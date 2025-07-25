import { createClient } from "@/utils/supabase/client";
import { Work } from "./types";

const supabase = createClient();

export async function addWork(params: Omit<Work, "id" | "created_at">) {
  try {
    const payload = { ...params, created_at: new Date().toISOString() };
    const { error } = await supabase.from("works").insert(payload);

    if (error) throw error;
    return { success: true };
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Ошибка при добавлении работы: ", error);
    return { success: false, error: error.message || "Неизвестная ошибка" };
  }
}

export async function updateWork(
  params: Partial<Omit<Work, "created_at">> & { id: number }
) {
  try {
    const { id, ...rest } = params;
    const updates = { ...rest, created_at: new Date().toISOString() };
    const { error } = await supabase.from("works").update(updates).eq("id", id);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    const error = err as Error;
    console.error("Ошибка при обновлении работы:", err);
    return { success: false, error: error.message || "Неизвестная ошибка" };
  }
}

export async function deleteWork(id: number) {
  try {
    const { error } = await supabase.from("works").delete().eq("id", id);

    if (error) throw error;
    return { success: true };
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Ошибка при добавлении работы: ", error);
    return { success: false, error: error.message || "Неизвестная ошибка" };
  }
}

