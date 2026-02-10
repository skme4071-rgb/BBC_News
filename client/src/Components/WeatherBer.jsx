export default function WeatherBar() {
  return (
    <div className="flex items-center space-x-6">
      <span className="hidden md:inline text-gray-300">
        Tuesday, 17 December 2024
      </span>

      <span className="text-gray-300">London, UK</span>

      <div className="flex items-center space-x-2">
        <span className="text-yellow-400">🌧️</span>
        <span className="font-medium text-white">8°C</span>
      </div>
    </div>
  );
}
