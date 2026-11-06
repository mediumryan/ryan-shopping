import HomeCard from '@/components/Home/HomeCard';

const HOME_ITEM_LIST = [
  { id: "home-item-mans", filter: "mans", title: "Mans" },
  { id: "home-item-ladies", filter: "ladies", title: "Ladies" },
  { id: "home-item-outer", filter: "outer", title: "Outer" },
  { id: "home-item-top", filter: "top", title: "Top" },
  { id: "home-item-bottom", filter: "bottom", title: "Bottom" },
  { id: "home-item-one-piece", filter: "one-piece", title: "One piece" },
  { id: "home-item-accessory", filter: "accessory", title: "Accessory" },
]


export default async function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 pt-4 pb-12">
      {HOME_ITEM_LIST.map((item) => (
        <HomeCard key={item.id} filter={item.filter} title={item.title} />
      ))}
    </div>
  );
}
