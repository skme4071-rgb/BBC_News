import { CustomNavLink } from "./utlis/tag";
export default function LishLink({ pagesName = [], lishName = "News" }) {
  return (
    <div>
      <h4 className="font-bold mb-4 text-base flex items-center">
        <span className="mr-2">📰</span>
        {lishName}
      </h4>
      <ul className="space-y-2 text-sm text-gray-300">
        {pagesName.map((v, i) => {
          return (
            <CustomNavLink
              key={i}
              text={v}
              to={v === "Home" ? "/" : `/${v.toLowerCase()}`}
              end={v === "/"} // 
            />
          );
        })}
      </ul>
    </div>
  );
}


