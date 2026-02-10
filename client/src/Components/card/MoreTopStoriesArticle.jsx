import { Images } from "./../utlis/tag";
export default function MoreTopStoriesArticle({ data }) {



  const { source, urlToImage, publishedAt, description, content } = data
  return (
    <article
      className="story-card flex space-x-4 p-4 rounded-xl cursor-pointer"
    >
      <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-24 h-16 flex items-center justify-center rounded-lg flex-shrink-0 shadow-md">
        <Images src={urlToImage} />
      </div>
      <div className="flex-1 space-y-1">
        <div className="text-xs text-gray-500 font-medium">
          {source?.name} • {publishedAt}
        </div>
        <h3 className="font-bold text-base leading-tight">
          {description?.slice(0, 150)}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {content?.slice(0, 100)}
        </p>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>🏛️ Westminster</span>
          <span>•</span>
          <span>856 shares</span>
        </div>
      </div>
    </article>
  );
}
