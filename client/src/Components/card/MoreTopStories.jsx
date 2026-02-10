import MoreTopStoriesArticle from "./MoreTopStoriesArticle";
export default function MoreTopStories({ datas, name }) {


  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold mb-6 gradient-text">
        {name}
      </h2>
      <div className="space-y-4">
        {datas.map((v, i) => (<MoreTopStoriesArticle key={i} data={v} />))}
      </div>
    </div>
  );
}
