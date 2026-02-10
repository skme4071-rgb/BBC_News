import {Images} from "./../utlis/tag";
export default function HomeSecondaryStories({ data }) {



  const { source, title, urlToImage, publishedAt, content } = data

  return (
    <article className="story-card p-4 rounded-xl cursor-pointer mobile-card-padding">
      <div className="bg-gradient-to-br from-blue-500 to-white 
                      w-full h-32 
                      flex items-center justify-center 
                      rounded-lg mb-3 shadow-md 
                      overflow-hidden">
        <Images
          src={urlToImage}
          className="object-contain"
        />
      </div>
      <div className="space-y-2">
        <div className="text-xs text-gray-500 font-medium">
          {source?.nane} • {publishedAt}
        </div>
        <h2 className="text-lg sm:text-xl font-bold leading-tight mobile-story-title">
          {title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mobile-story-text">
          {content}
        </p>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>📊 Marksd</span>
          <span>•</span>
          <span>1.2k shares</span>
        </div>
      </div>
    </article>
  );
}
