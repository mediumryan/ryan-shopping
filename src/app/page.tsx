import HomeCard from '@/components/Home/HomeCard';

export default async function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-12">
      <HomeCard filter="man" title="Mans" />
      <HomeCard filter="woman" title="Ladies" />
      <HomeCard filter="outer" title="Outer" />
      <HomeCard filter="top" title="Top" />
      <HomeCard filter="bottom" title="Bottom" />
      <HomeCard filter="dress" title="Dress" />
      <HomeCard filter="accessory" title="Accessory" />
    </div>
  );
}
