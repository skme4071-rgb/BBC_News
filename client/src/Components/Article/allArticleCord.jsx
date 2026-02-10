import { CustomLink } from "./../utlis/tag";
import { Slice } from "./../utlis/coommonFuntion";
import {
  LeadStoryLeyout,
  SecondaryStoryLeyout,
  TopStoryLeyout,
  YoutubeVideoLeyout,
  RadioLeyout,
  DetailsArticleLeyout,
  LocalWeatherLeyout,
  PoliticsCordLeyout
} from "../card/ArticleCard";


export function LeadStory({ data = {} }) {
  return <LeadStoryLeyout data={data} />;
}
export function SecondaryStory({ datas = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {datas.map((story, i) => (
        <CustomLink state={story}
          key={`${story.url}-${i}`}
          to={story.url}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <SecondaryStoryLeyout data={story} />
        </CustomLink>
      ))}
    </div>
  );
}

export function TopStory({ name, datas = [] }) {
  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold mb-6 gradient-text">{name}</h2>
      <div className="space-y-4">
        {datas.map((story, i) => (
          <CustomLink state={story}
            key={`${story.url}-${i}`}
            to={story.url}
            rel="noopener noreferrer"
          >
            <TopStoryLeyout data={story} />
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
export function WatchListen({ name, icon, datas = [] }) {
  return (
    <div className="glass-effect p-5 rounded-xl mobile-card-padding shadow-lg">
      <h3 className="font-bold mb-4 text-lg flex items-center">
        <span className="mr-2">{icon}</span>
        {name}
      </h3>
      <div className="space-y-3">
        <YoutubeVideoLeyout data={datas} />
        <RadioLeyout data={datas} />
      </div>
    </div>
  );
}
export function MostRead({ name, icon, datas = [] }) {
  // data না থাকলে কিছু দেখাবে না
  if (!datas.length) return null;

  // array shuffle
  const shuffled = [...datas].sort(() => 0.5 - Math.random());

  // প্রথম 5টা item
  const connt = Slice(shuffled, 5);

  return (
    <div className="glass-effect p-5 rounded-xl shadow-lg">
      <h3 className="font-bold mb-4 text-lg flex items-center">
        <span className="mr-2">{icon}</span>
        {name}
      </h3>

      <ol className="space-y-3">
        {connt.map((data, i) => (
          <CustomLink to={data.url} key={i} state={data}>
            <li className="flex items-start space-x-3 cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all">
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold min-w-[24px] text-center">
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-tight">
                {Slice(data.title, 60) || "No title available"}
              </span>
            </li>
          </CustomLink>
        ))}

      </ol>
    </div >
  );
}
export function Weather({
  name,
  WeatherData: { C_High, C_Low, message, city, icon, bodyIcon }
}) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 rounded-xl shadow-lg">

      <h3 className="font-bold mb-4 flex items-center">
        <img src={icon} alt="weather" className="w-6 h-6 mr-2" />
        {name}
      </h3>

      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-3xl font-bold">{C_High}°C</p>
          <p className="text-sm opacity-90">{city}</p>
        </div>
        <div className="text-5xl">{bodyIcon}</div>
      </div>

      <p className="text-sm opacity-90 mb-3">
        {message}
      </p>

      <div className="flex justify-between text-xs opacity-75">
        <span>High: {C_High}°C</span>
        <span>Low: {C_Low}°C</span>
      </div>

      <CustomLink
        to="/Weather"
        className="text-sm underline mt-3 inline-block hover:no-underline transition-all" >
        7-day forecast →
      </CustomLink>
    </div>
  );
}

export function LocalWeather({ name, icon, WeatherData = [] }) {
  return (<div className="glass-effect p-5 rounded-xl shadow-lg">
    <h3 className="font-bold mb-4 flex items-center">
      <span className="mr-2">{icon}</span>
      {name}
    </h3>
    <div className="space-y-3 text-sm">
      {WeatherData.map((Data, i) => (
        <CustomLink state={Data}
          key={i}
          to={Data.url}
          rel="noopener noreferrer"
        >
          <LocalWeatherLeyout WeatherData={Data} />
        </CustomLink>
      ))}
    </div>
  </div>)
}
export function DetailsArticle({ data = {} }) {
  return <DetailsArticleLeyout data={data} />;
}
export function PoliticsCord({ name, icon, datas = [] }) {

  return (
    <div className="glass-effect p-5 rounded-xl shadow-lg">
      <h3 className="font-bold mb-4 flex items-center">
        <span className="mr-2">{icon}</span>
        {name}
      </h3>

      <div className="space-y-3 text-sm">{
        datas.map((Data, i) => (
          <CustomLink state={Data}
            key={i}
            to={Data.url}
            rel="noopener noreferrer"
          >
            <PoliticsCordLeyout data={Data} />
          </CustomLink>
        ))
      }</div>

    </div>

  )
}

