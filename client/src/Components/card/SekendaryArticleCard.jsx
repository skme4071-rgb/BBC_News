import {Images } from "./../utlis/tag";
export default function SekendaryArticleCard({ source, title, urlToImage, publishedAt, content } = {}) {


  return (
    <article className="story-card p-4 rounded-xl cursor-pointer">
      <div className="bg-gradient-to-br from-blue-500 to-white w-full h-32 flex items-center justify-center rounded-lg mb-3 shadow-md">
        <Images src={urlToImage} />
      </div>


      <div className="space-y-2">
        <div className="text-xs text-gray-500 font-medium">
          {source?.name} • {publishedAt}
        </div>
        <h4 className="font-bold text-base">
          {title}
        </h4>
        <p className="text-gray-600 text-sm">
          {content}
        </p>
      </div>
    </article>
  );
}

