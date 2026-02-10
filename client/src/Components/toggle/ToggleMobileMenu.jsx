export default function ToggleMobileSearch({ ...rest }) {
  return (
    <button
      {...rest}
      className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}
