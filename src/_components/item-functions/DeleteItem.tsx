"use client";

import { deleteItemById } from "@/actions";
import { Trash2 } from "lucide-react";

interface DeleteItemProps {
  id: string;
}

export const DeleteItem = ({ id }: DeleteItemProps) => {
  const deleteItem = async () => {
    await deleteItemById(id);
  };

  return (
    <button
      onClick={deleteItem}
      className="cursor-pointer rounded bg-red-500 p-2 transition-all ease-in-out hover:bg-red-800"
    >
      <Trash2 />
    </button>
  );
};
