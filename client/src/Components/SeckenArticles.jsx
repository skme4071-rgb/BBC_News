import SeckenAricleCard from "./card/HomeSecondaryStories";
import { CustomLink } from "./utlis/tag";

export default function SeckenArticles({ datas = [] }) {

  console.log(datas);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mobile-story-grid">
      {datas.map((v, index) => {
        return <CustomLink to="/Details" key={index} >
          <SeckenAricleCard key={index} data={v} />
        </CustomLink>
      })}
    </div>
  );
}
