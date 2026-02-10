// Navigation.jsx
import { CustomNavLink } from "./utlis/tag";

export default function Navigation({ pagesName = [], onClick }) {
  return (
    <nav className="bbc-red shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto mobile-nav-scroll">
          {pagesName.map((v) => (
            <CustomNavLink
              onClick={onClick}
              key={v}
              text={v}
              to={v === "Home" ? "/" : `/${v.toLowerCase()}`}
              end={v === "Home"} // 👈 Home exact match
              activeFun={(isActive) =>
                `nav-item text-white px-4 py-3 text-sm font-medium whitespace-nowrap mobile-touch-target ${isActive ? "active" : "unactive"
                }`
              }
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
