export default function Download() {
  return (
    <div className="flex items-center space-x-4 text-sm text-gray-400">
      <span>Download BBC News App</span>
      <div className="flex space-x-2">
        <a
          href="#"
          className="bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
        >
          iOS
        </a>
        <a
          href="#"
          className="bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
        >
          Android
        </a>
      </div>
    </div>
  );
}
