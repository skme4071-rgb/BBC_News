import { useLocation } from 'react-router-dom';

import { DetailsLeyout } from "../Leyout";
import { DetailsArticle, LocalWeather, PoliticsCord } from "./../Article/allArticleCord";
import { Slice } from "./../utlis/coommonFuntion";



import SekendaryArticle from "./../SekendaryArticle";

const dd = [
  {
    title: "Security experts have disclosed details ",
    description: "Security experts have disclosed details  have disclosed details description"
  },
  {
    title: "Security experts have disclosed details ",
    description: "Security experts have disclosed details  have disclosed details description"
  },
]
const oo = [
  { C_High: 9.7, city: "London", bodyIcon: "☀️", },
  { C_High: 9.7, city: "Uk", bodyIcon: "☀️", },
  { C_High: 9.7, city: "London", bodyIcon: "☀️", },
  { C_High: 9.7, city: "London", bodyIcon: "☀️", },
  { C_High: 9.7, city: "London", bodyIcon: "☀️", },
  { C_High: 9.7, city: "London", bodyIcon: "☀️", },
]

export default function Details() {
  const location = useLocation();
  const data = location.state
  const { title = "", source: { category } } = data


  return (
    <DetailsLeyout
      pagesName={`${category} Newse`}
      pagesTitle={title}
    >

      <div className="lg:col-span-2 space-y-8">
        <DetailsArticle data={data} />
        {/* <SekendaryArticle datas={["", ""]} /> */}
      </div>

      <div className="space-y-6">
        <PoliticsCord icon="🏛️" name="Politics" datas={Slice(dd, 2)} />
        <LocalWeather name="Local Weather" icon="🌤️" WeatherData={Slice(oo, 5)} />
      </div>

    </DetailsLeyout >
  );
}

