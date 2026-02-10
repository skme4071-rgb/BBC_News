export default function MostRead({ icon, datas = [], name }) {
  // data না থাকলে কিছু দেখাবে না
  if (!datas.length) return null;

  // array shuffle
  const shuffled = [...datas].sort(() => 0.5 - Math.random());

  // প্রথম 5টা item
  const connt = shuffled.slice(0, 5);

  return (
    <div className="glass-effect p-5 rounded-xl shadow-lg">
      <h3 className="font-bold mb-4 text-lg flex items-center">
        <span className="mr-2">{icon}</span>
        {name}
      </h3>

      <ol className="space-y-3">
        {connt.map(({ description }, i) => (
          <li
            key={i}
            className="flex items-start space-x-3 cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all"
          >
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold min-w-[24px] text-center">
              {i + 1}
            </span>
            <span className="text-sm font-medium leading-tight">
              {description?.slice(0, 50) || "No description available"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
