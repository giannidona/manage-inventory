import { Item } from "@/types";
import { ItemCard } from "./ItemCard";

interface Props {
  items: Item[];
}

export const ItemGrid = async ({ items }: Props) => {
  return (
    <div className="mb-12">
      {items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
};
