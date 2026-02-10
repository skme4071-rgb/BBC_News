import { CustomNavLink } from "./utlis/tag";
export default function MobileMenu({
  show,
  pagesName = [],
  onClick,
  icon = [],
}) {
  
  return (
    <div className={`md:hidden bg-red-700 text-white  shadow-lg ${show}`}>
      
      <div className="px-4 py-3 space-y-1">
        {pagesName.map((v, i) => (
          <CustomNavLink
            onClick={onClick}
            key={v}
            icon={icon[i]}
            text={v}
            to={v === "Home" ? "/" : `/${v.toLowerCase()}`}
            end={v === "/"} // 👈 Home exact match
            className="nav-item  text-white   rounded-lg hover:bg-red-600 transition-colors mobile-touch-target"
          />
        ))}

        <div className="border-t border-red-600 pt-3 mt-3">
          <button

            className="block w-full text-left py-3 px-4 rounded-lg hover:bg-red-600 transition-colors mobile-touch-target"
          >
            🔐 Sign In
          </button>
          <button

            className="block w-full text-left py-3 px-4 rounded-lg hover:bg-red-600 transition-colors mobile-touch-target"
          >
            📝 Register
          </button>
          <button

            className="block w-full text-left py-3 px-4 rounded-lg hover:bg-red-600 transition-colors mobile-touch-target"
          >
            👤 My Account
          </button>
        </div>
      </div>
    </div>
  );
}
