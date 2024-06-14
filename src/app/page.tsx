export const dynamic = "force-dynamic";
export const revaldiate = 0;

import { ItemGrid } from "@/_components";
import { getItems } from "@/actions";

export default async function Home() {
  const items = await getItems();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-12 text-4xl font-bold">Manage Your Inventory</h1>

      <ItemGrid items={items} />
    </main>
  );
}
