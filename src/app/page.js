import { supabase } from '@/lib/supabaseClient';
import PlatformCard from '@/components/PlatformCard';
import OverviewCard from '@/components/OverviewCard';
import Header from '@/components/Header';

export default async function HomePage() {
  const { data: stats, error } = await supabase.from('social_stats').select('*');

  if (error) {
    console.error(error);
    return <div>Error loading data</div>;
  }

  const platformStats = stats.filter(stat => stat.type === 'platform');
  const overviewStats = stats.filter(stat => stat.type === 'overview');

  // Sum followers/subscribers from platformStats
  const total = platformStats.reduce((acc, cur) => acc + (cur.value || 0), 0);

  // Reorder by platform: facebook > twitter > instagram > youtube
  const order = ['facebook', 'twitter', 'instagram', 'youtube'];

  const sortedPlatformStats = order
    .map(platform => platformStats.find(stat => stat.platform === platform))
    .filter(Boolean);

  const sortedOverviewStats = order
    .flatMap(platform => overviewStats.filter(stat => stat.platform === platform));

  return (
    <main className="grid gap-6 p-6 max-w-6xl mx-auto">
      <Header total={total} />

      {/* Platform Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedPlatformStats.map((card) => (
          <PlatformCard
            key={`${card.platform}-${card.username || card.label}`}
            data={card}
          />
        ))}
      </section>

      {/* Overview Cards */}
      <h2 className="text-xl font-bold mt-10">Overview - Today</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedOverviewStats.map((card) => (
          <OverviewCard
            key={`${card.platform}-${card.metric}`}
            data={card}
          />
        ))}
      </section>
    </main>
  );
}
