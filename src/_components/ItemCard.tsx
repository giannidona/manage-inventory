import Image from "next/image";
import { Item } from "@/types";
import { DeleteItem } from "./item-functions/DeleteItem";
import { UpdateItem } from "./item-functions/UpdateItem";
import { ItemInfo } from "./item-functions/ItemInfo";

interface Props {
  item: Item;
}

export const ItemCard = ({ item }: Props) => {
  const { id, itemName, itemImage, stock, price, createdAt } = item;

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
          <ItemInfo />
          <UpdateItem />
          <DeleteItem id={id} />
        </div>
      </div>
    </div>
  );
};
