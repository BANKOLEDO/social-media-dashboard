import ToggleSwitch from './ToggleSwitch';

export default function Header({ total }) {
  return (
    <header className="text-dark-text dark:text-white px-6 py-8 rounded-b-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Title Section */}
        <div className="gap-1 flex flex-col items-start">
          <h1 className="text-2xl md:text-3xl text-black dark:text-white font-bold">
            Social Media Dashboard
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-bold">
            Total Followers: {total.toLocaleString()}
          </p>
        </div>
        <hr className="h-[0.1rem] bg-slate-900" />
        {/* Toggle Section */}
        <div className="flex items-center gap-5">
          <ToggleSwitch />
        </div>
      </div>
    </header>
  );
}
