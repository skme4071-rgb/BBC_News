export const NavButton = ({ Icon, name,
    badge: { active, reviewCount, articleCount, newBadge } = {},
}) => {


    return (
        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors">

            <span className="text-gray-600 w-5 "> <Icon size={18} /></span>
            <span className="nav-text">{name}</span>

            {active ? (
                <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
            ) : reviewCount ? (
                <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    {reviewCount}
                </span>
            ) : articleCount ? (
                <span className="ml-auto text-xs text-gray-500">
                    {articleCount}
                </span>
            ) : newBadge ? (
                <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    New
                </span>
            ) : null}
        </button>
    )
}
