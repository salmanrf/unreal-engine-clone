import { NewsLinks } from "@/components/news";
import NewsTitle from "./title";
import { items } from "./items";

export default function NewsContainer() {
  return (
    <div className="flex flex-col pt-14 px-6 bg-primaryGrey">
      <NewsTitle />
      <NewsLinks items={items} />
    </div>
  );
}
