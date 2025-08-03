import ToggleSwitch from './ToggleSwitch';

export default function Header() {
  return (
    <header className=" text-dark-text dark:text-white px-6 py-8 rounded-b-lg">
  <div className="max-w-6xl mx-auto flex flex-col gap-6">
    {/* Title Section */}
    <div className='gap-1 flex flex-col items-start'>
      <h1 className="text-3xl text-black font-bold">Social Media Dashboard</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">
        Total Followers: 23,004
      </p>
    </div>
    <hr className='h-[0.1rem] bg-slate-900'/>
    {/* Toggle Section (full width) */}
    <ToggleSwitch />
  </div>
</header>

  );
}
