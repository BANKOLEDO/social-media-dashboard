export default function PlatformCard({ data }) {
  const {
    platform = '',
    username = '',
    value = 0,
    change = 0,
    label = 'Followers',
  } = data;

  const isPositive = change >= 0;

  const platformIcons = {
    twitter: '/assets/icons/icon-twitter.svg',
    facebook: '/assets/icons/icon-facebook.svg',
    instagram: '/assets/icons/icon-instagram.svg',
    youtube: '/assets/icons/icon-youtube.svg',
  };

  const platformBorderColor = {
    twitter: 'border-t-4 border-t-blue-500',
    facebook: 'border-t-4 border-t-blue-600',
    instagram: '', // handled via gradient div
    youtube: 'border-t-4 border-t-red-700',
  };

  function formatNumber(val) {
    if (val >= 10000) {
      const num = val / 1000;
      return (Number.isInteger(num) ? num : num.toFixed(1)) + 'k';
    }
    return val.toString();
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl p-6
      bg-gray-100 dark:bg-[#252b43] hover:bg-gray-300 dark:hover:bg-slate-600
      ${platformBorderColor[platform]}`}
    >
      {/* Instagram gradient top border */}
      {platform === 'instagram' && (
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#fdc468] via-[#df4996] to-[#c239a0] z-10" />
      )}

      <div className="flex justify-center items-center gap-2 mb-6">
        <img src={platformIcons[platform]} alt={`${platform} icon`} />
        <span className="text-sm text-dark-bg dark:text-gray-400 font-semibold">
          {username}
        </span>
      </div>

      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-950 dark:text-white">
          {formatNumber(value)}
        </h2>
        <p className="uppercase tracking-widest text-sm text-gray-500  font-semibold dark:text-gray-500">
          {label}
        </p>
      </div>

      <div className="flex justify-center items-center mt-4 text-sm font-semibold">
        <img
          src={isPositive ? '/assets/icons/icon-up.svg' : '/assets/icons/icon-down.svg'}
          alt=""
          className="mr-1"
        />
        <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
          {Math.abs(change)} Today
        </span>
      </div>
    </div>
  );
}
