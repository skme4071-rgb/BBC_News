export default function WeatherCard() {
  return (
     <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 rounded-xl shadow-lg">
          <h3 className="font-bold mb-4 flex items-center">
            <span className="mr-2">🌤️</span>
            Weather
          </h3>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-3xl font-bold">8°C</p>
              <p className="text-sm opacity-90">London</p>
            </div>
            <div className="text-5xl">🌧️</div>
          </div>
          <p className="text-sm opacity-90 mb-3">
            Light rain with cloudy skies. Winds from the southwest at 15 mph.
          </p>
          <div className="flex justify-between text-xs opacity-75">
            <span>High: 12°C</span>
            <span>Low: 5°C</span>
          </div>
          <a
            href="#"
            className="text-sm underline mt-3 inline-block hover:no-underline transition-all"
          >
            7-day forecast →
          </a>
        </div>
  );
}
