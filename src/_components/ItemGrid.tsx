"use client";

import { useState, useEffect } from "react";
import { Item } from "@/types";
import { ItemCard } from "./ItemCard";
import { Search } from "./Search";
import { TitlesTable } from "./TitlesTable";

interface Props {
  items: Item[];
}

export const ItemGrid: React.FC<Props> = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const [query, setQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.itemName.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredItems(filtered);
  }, [query, items]);

  return (
    <>
      <Search onSearch={handleSearch} />
      <TitlesTable />
      <div className="mb-12">
        {filteredItems.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
