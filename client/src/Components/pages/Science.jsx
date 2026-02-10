
import useFetch from "./../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

import { Slice } from "./../utlis/coommonFuntion";
import { CustomLoading, CustomNotification } from "./../utlis/tag";
import {
  LeadStory,
  SecondaryStory,
  TopStory,
  WatchListen,
  MostRead,
  Weather,
} from "./../Article/allArticleCord";

export default function Science() {
  const { pathname } = useLocation();
  const oneCallApi = useRef(true);
  const { data, loading, error, refetch } = useFetch(
    "http://localhost:3000/Articles", {},
  );

  useEffect(() => {
    if (oneCallApi.current) {
      refetch();
      oneCallApi.current = false;
    }
  }, [refetch]);
  if (loading) {
    return (
      <CustomLoading
        text={pathname === "/" ? "Home" : pathname}
        messgae="Loading international news and global affairs..."
      />
    );
  }

  if (error) {
    return <CustomNotification type="error" message={error} />;
  }

  if (!data || data.status !== "ok") {
    return (
      <CustomNotification type="warning" message="Failed to load news data." />
    );
  }

  const articles = data.articles || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      <div className="lg:col-span-2 space-y-8">
        <LeadStory data={articles[0]} />
        <SecondaryStory datas={Slice(articles, 11, 1)} />
        <TopStory name="More top stories" datas={Slice(articles, 16, 11)} />
      </div>

      <div className="space-y-6 mobile-sidebar-spacing">
        <WatchListen name="Watch/Listen" icon="📺" datas={articles[0]} />
        <MostRead icon="🔥" name="Most Read" datas={articles} />
        <Weather
          name="Today Weather"
          WeatherData={{
            C_High: 9.7,
            C_Low: 4.5,
            message: "Sunny",
            city: "London",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            bodyIcon: "☀️",
          }}
        />
      </div>
    </div>
  );
}
