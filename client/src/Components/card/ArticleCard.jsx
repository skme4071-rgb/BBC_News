import { Images } from "../utlis/tag";
import { CustomLink } from "../utlis/tag";
import { Comments, Likes, Share } from "../Article/Comments";
import { Slice } from "./../utlis/coommonFuntion";




export function LeadStoryLeyout({ data = {} }) {
    const { source, author, title, url, urlToImage, publishedAt, id: prodactId, content, comments,
        likes: { likes, totalLikes }, share: { totalShare, urlToShare } } = data;



    return (
        <article className="border-b border-gray-200 pb-8">

            <div className="relative h-full w-full sm:h-80  rounded-xl  overflow-hidden">
                <Images src={urlToImage} alt="story image" />
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {source.category}
                    </span>
                    <span>{new Date(publishedAt).toLocaleDateString()}</span>
                </div>
                <CustomLink to={url} state={data}>
                    <h1 className="text-2xl sm:text-4xl font-bold mt-3 hover:text-blue-600">{title}</h1>
                </CustomLink>

                <p className="text-gray-600 mt-4 leading-relaxed">{Slice(content, 300)}</p>
                <span className="block mt-2 text-sm text-gray-500">{author}</span>

                <div className="flex flex-wrap gap-6 mt-6 text-gray-600">
                    <Comments
                        prodactId={prodactId}
                        totalComment={comments.totalComment}
                    />
                    <Likes
                        prodactId={prodactId}
                        isLikes={likes}
                        totalLikes={totalLikes}
                    />
                    <Share
                        prodactId={prodactId}
                        totalShare={totalShare}
                        urlToShare={urlToShare}
                    />
                </div>

            </div>
        </article>
    )


}

export function SecondaryStoryLeyout({ data = {} }) {
    const { source, author, title, urlToImage, publishedAt, id: prodactId, content,
        share: { totalShare, urlToShare } } = data;

    return (
        <article
            className="story-card p-4 rounded-xl cursor-pointer mobile-card-padding" >
            <div className="bg-gradient-to-br from-green-500 to-blue-600 h-32 sm:h-40 mb-4 flex items-center justify-center rounded-lg shadow-md">
                <Images src={urlToImage} alt="story image" />
            </div>
            <div className="space-y-2">
                <div className="text-xs text-gray-500 font-medium">
                    {source.category} • <span>{new Date(publishedAt).toLocaleDateString()}</span>
                </div>
                <h2
                    className="text-lg sm:text-xl font-bold leading-tight mobile-story-title"
                >
                    {title}
                </h2>
                <p
                    className="text-gray-600 text-sm leading-relaxed mobile-story-text"
                >
                    {Slice(content, 80)}
                </p>
                <div
                    className="flex items-center space-x-2 text-xs text-gray-500"
                >
                    <span>{author}</span>
                    <span>•</span>
                </div>
                <Share
                    prodactId={prodactId}
                    totalShare={totalShare}
                    urlToShare={urlToShare}
                />
            </div>
        </article>

    )
}
export function TopStoryLeyout({ data = {} }) {
    const { source, author, title, urlToImage, description, id: prodactId, publishedAt,
        share: { totalShare, urlToShare } } = data;


    return (

        <article className="story-card p-4 mb-5 rounded-xl cursor-pointer">

            <div className="flex space-x-4">

                {/* Image */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-[200px] max-[600px]:w-[100px]
      flex items-center justify-center rounded-lg flex-shrink-0 shadow-md overflow-hidden">
                    <Images
                        src={urlToImage}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                    <div className="text-xs text-gray-500 font-medium">
                        {source.category} • <span>{new Date(publishedAt).toLocaleDateString()}</span>
                    </div>

                    <h3 className="font-bold text-base leading-tight break-all">
                        {Slice(title, 150)}
                    </h3>


                    {/* Desktop only */}
                    <div className="hidden max-[376px]:hidden sm:block">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {Slice(description, 200)}
                        </p>

                        <div className="space-x-2 text-xs text-gray-500">
                            <span>{Slice(author, 25)}</span>
                            <span>•</span>
                            <Share
                                prodactId={prodactId}
                                totalShare={totalShare}
                                urlToShare={urlToShare}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile only */}
            <div className="block sm:hidden mt-3">
                <p className="text-gray-600 text-sm leading-relaxed">
                    {Slice(description, 150)}
                </p>

                <div className="space-x-2 text-xs text-gray-500">
                    <span>{Slice(author, 25)}</span>
                    <span>•</span>
                    <Share
                        prodactId={prodactId}
                        totalShare={totalShare}
                        urlToShare={urlToShare}
                    />
                </div>
            </div>

        </article>


    )
}
export function YoutubeVideoLeyout({ data = {} }) {
    const { title, description, } = data
    return (
        <div className="flex space-x-3 cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all mobile-touch-target">
            <div className="bg-red-600 w-16 h-12 flex items-center justify-center rounded-lg flex-shrink-0 shadow-sm">
                <span className="text-white text-sm">▶</span>
            </div>
            <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-sm">{Slice(title, 35)}</h4>
                <p className="text-xs text-gray-600">
                    {Slice(description, 45)}
                </p>
                <CustomLink to="https://www.youtube.com/results?search_query=news+bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="text-xs text-red-600 font-medium">LIVE NOW</div>
                </CustomLink>

            </div>
        </div>
    )
}
export function RadioLeyout({ data = {} }) {
    const { title, description, } = data
    return (
        <div className="flex space-x-3 cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all mobile-touch-target">
            <div className="bg-blue-600 w-16 h-12 flex items-center justify-center rounded-lg flex-shrink-0 shadow-sm">
                <span className="text-white text-sm">🎵</span>
            </div>
            <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-sm">{Slice(title, 35)}</h4>
                <p className="text-xs text-gray-600">
                    {Slice(description, 45)}
                </p>
                <CustomLink to="https://www.youtube.com/results?search_query=news+bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="text-xs text-red-600 font-medium">RADIO NOW</div>
                </CustomLink>
            </div>
        </div>
    )
}
export function DetailsArticleLeyout({ data = {} }) {
    const { source, author, urlToImage, publishedAt, id: prodactId, description, content, comments,
        likes: { likes, totalLikes }, share: { totalShare, urlToShare } } = data;


    return (
        <article className="border-b border-gray-200 pb-8">
            <div className="bg-gradient-to-br from-red-600 to-blue-600 h-64 mb-4 flex items-center justify-center rounded-xl shadow-lg">
                <Images src={urlToImage} />
            </div>
            <div className="space-y-3">
                <div className="text-xs text-gray-500 font-medium">
                    {source.category} •
                    <span>{new Date(publishedAt).toLocaleDateString()}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-blue-600 transition-colors" >
                    {description}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {content}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="font-medium">{author}</span>
                    <span>{name}</span>
                </div>
                <div className="flex flex-wrap gap-6 mt-6 text-gray-600">
                    <Comments
                        prodactId={prodactId}
                        totalComment={comments.totalComment}
                    />
                    <Likes
                        prodactId={prodactId}
                        isLikes={likes}
                        totalLikes={totalLikes}
                    />
                    <Share
                        prodactId={prodactId}
                        totalShare={totalShare}
                        urlToShare={urlToShare}
                    />
                </div>
            </div>
        </article>
    )
}
export function LocalWeatherLeyout({ WeatherData: { bodyIcon, C_High, city } }) {
    return (
        <div className="flex justify-between items-center p-2 rounded-lg bg-white/30">
            <span className="font-medium">{city}</span>
            <span className="flex items-center space-x-1">
                <span>{C_High}°C</span>
                <span>{bodyIcon}</span>
            </span>
        </div>
    )
}
export function PoliticsCordLeyout({ data: { title, description } }) {
    return (
        <div className="cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all">
            <h4 className="font-semibold mb-1">{Slice(title, 30)}</h4>
            <p className="text-xs text-gray-600">
                {Slice(description, 50)}
            </p>
        </div>
    )
}

