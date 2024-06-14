"use client";

import { useState, useEffect } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <div className="mb-12">
      <input
        className="rounded px-3 py-1 text-black"
        type="text"
        placeholder="search item..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};
