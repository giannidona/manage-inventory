import Image from "next/image";

import { Eye, Pencil, Trash2 } from "lucide-react";
import { Item } from "@/types";

interface Props {
  item: Item;
}

export const ItemCard = async ({ item }: Props) => {
  const { itemName, itemImage, stock, price, createdAt } = item;

  return (
    <div className="mb-12">
      <div className="flex h-[65px] w-[750px] items-center justify-between rounded bg-white p-2 text-black">
        <div>
          <Image
            className="rounded-full"
            src={itemImage}
            alt={itemName}
            height={50}
            width={50}
          />
        </div>
        <div className="flex gap-x-14">
          <p>${price}</p>
          <p>{stock}</p>
          <p>{createdAt.toDateString()}</p>
        </div>
        <div className="flex gap-x-2 text-white">
          <span className="cursor-pointer rounded bg-blue-500 p-2 transition-all ease-in-out hover:bg-blue-800">
            <Eye />
          </span>
          <span className="cursor-pointer rounded bg-blue-500 p-2 transition-all ease-in-out hover:bg-blue-800">
            <Pencil />
          </span>
          <span className="cursor-pointer rounded bg-red-500 p-2 transition-all ease-in-out hover:bg-red-800">
            <Trash2 />
          </span>
        </div>
      </div>
    </div>
  );
};
