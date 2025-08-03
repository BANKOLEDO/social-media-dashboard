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

  return (
    <main className="grid gap-6 p-6 max-w-6xl mx-auto">
      <Header />
      {/* Platform Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((card) => (
          <PlatformCard
            key={`${card.platform}-${card.username || card.label}`}
            data={card}
          />
        ))}
      </section>

      {/* Overview Cards */}
      <h2 className="text-xl font-bold mt-10">Overview - Today</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((card) => (
          <OverviewCard
            key={`${card.platform}-${card.metric}`}
            data={card}
          />
        ))}
      </section>
    </main>
  );
}
