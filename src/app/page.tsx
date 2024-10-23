import HomeCard from '@/components/Home/HomeCard';

export default async function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 pt-4 pb-12">
      <HomeCard filter="mans" title="Mans" />
      <HomeCard filter="ladies" title="Ladies" />
      <HomeCard filter="outer" title="Outer" />
      <HomeCard filter="top" title="Top" />
      <HomeCard filter="bottom" title="Bottom" />
      <HomeCard filter="one-piece" title="One piece" />
      <HomeCard filter="accessory" title="Accessory" />
    </div>
  );
}
