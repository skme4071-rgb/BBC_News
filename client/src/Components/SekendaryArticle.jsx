import SekendaryArticleCard from "./card/SekendaryArticleCard";
import { CustomLink } from "./utlis/tag";
export default function SekendaryArticle({ datas = [] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Regional News</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {datas.map((v, i) => (
          <CustomLink to="/Details" key={i}>
            <SekendaryArticleCard key={i} data={v} />
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
