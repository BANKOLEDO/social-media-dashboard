export default function OverviewCard({ data }) {
  const { platform, metric, value, change, is_percent } = data;

  const isPositive = change >= 0;

  const platformIcons = {
    twitter: '/assets/icons/icon-twitter.svg',
    facebook: '/assets/icons/icon-facebook.svg',
    instagram: '/assets/icons/icon-instagram.svg',
    youtube: '/assets/icons/icon-youtube.svg',
  };

  // Format metric for display
  const formattedMetric = metric
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="bg-navy-50 dark:bg-dark-topBg p-6 rounded-2xl flex flex-col gap-4">
      <div className="flex justify-between items-center text-sm text-gray-400">
        <span>{formattedMetric}</span>
        <img src={platformIcons[platform]} alt={`${platform} icon`} />
      </div>

      <div className="flex justify-between items-end">
        <h3 className="text-2xl font-bold text-gray-950 dark:text-white font-inter">
          {value.toLocaleString()}
        </h3>
        <div className="flex items-center text-sm font-semibold">
          <img
            src={isPositive ? '/assets/icons/icon-up.svg' : '/assets/icons/icon-down.svg'}
            alt=""
            className="mr-1"
          />
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {Math.abs(change)}{is_percent ? '%' : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
