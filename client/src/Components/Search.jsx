export default function Search() {
  return (
    <div className="relative hidden sm:block">
      <input
        type="search"
        placeholder="Search BBC News..."
        className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-lg border border-gray-600 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 w-64 mobile-search transition-all"
      />
      <svg
        className="w-4 h-4 text-gray-400 absolute right-3 top-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
  );
}
