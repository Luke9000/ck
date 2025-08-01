"use client";
import { AddButton } from "./AddButton";
import { ADD_ROW } from "./responses";
import { toast } from "sonner";
import { Work } from "./types";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { addWork, updateWork } from "./actions";
import { useState } from "react";
import { UpdateMenu } from "./UpdateMenu";


interface DataTableProps {
  
  columns: (onEdit: (row: Work) => void) => ColumnDef<Work>[]
  data: Work[]
}

export function DataTable({ columns, data }: DataTableProps) {
  const [editWork, setEditWork] = useState<Work | null>(null);
  const cols = columns(setEditWork);
  const table = useReactTable({
    data,
    columns: cols,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md border m-4 mt-0 ">
      <AddButton
        onAdd={async (data) => {
          const result = await addWork(data);
          if (result.success) {
            toast(ADD_ROW.success);
          } else {
            toast(`${ADD_ROW.error}: ${result.error}`);
          }
        }}
      ></AddButton>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover-hl">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="font-def ">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="hover-hl"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="whitespace-normal break-words text-xs"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {editWork && (
        <UpdateMenu
          work={editWork}
          onClose={() => setEditWork(null)}
          onUpdate={async (data) => {
            const result = await updateWork({ ...data, id: editWork.id });
            if (result.success) {
              toast("Успешно обновлено");
              setEditWork(null);
              //перезапросить данные
            } else {
              toast(`Ошибка: ${result.error}`);
            }
          }}
        />
      )}
    </div>
  );
}
