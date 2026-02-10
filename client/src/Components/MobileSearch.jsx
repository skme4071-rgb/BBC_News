export default function MobileSearch({ show }) {
  return (
    <div className={`sm:hidden border-t border-gray-700 py-4 ${show}`}>
      <div className="relative">
        <input
          type="search"
          placeholder="Search BBC News..."
          className="bg-gray-800 text-white px-4 py-3 pr-10 rounded-lg border border-gray-600 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 w-full mobile-search"
        />
        <svg
          className="w-4 h-4 text-gray-400 absolute right-3 top-4"
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
    </div>
  );
}
