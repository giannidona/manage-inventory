import Image from "next/image";
import { Item } from "@/types";
import { DeleteItem } from "./item-functions/DeleteItem";
import { UpdateItem } from "./item-functions/UpdateItem";

interface Props {
  item: Item;
}

export const ItemCard = ({ item }: Props) => {
  const { id, itemName, itemImage, stock, price, createdAt } = item;

  return (
    <div className="mb-2">
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
        <div className="flex gap-x-5 text-center">
          <div className="w-[100px]">
            <p>{itemName}</p>
          </div>
          <div className="w-[100px]">
            <p>${price}</p>
          </div>
          <div className="w-[100px]">
            <p>{stock}</p>
          </div>
          <div className="w-[150px]">
            <p>{createdAt.toDateString()}</p>
          </div>
        </div>
        <div className="flex gap-x-2 text-white">
          <UpdateItem id={id} />
          <DeleteItem id={id} />
        </div>
      </div>
    </div>
  );
};
