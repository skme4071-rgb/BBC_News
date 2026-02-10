import { CustomLink } from "./utlis/tag"
import HeadLine from "./HeadLine";

export default function Breaking_banner() {

  return (
    <div className="breaking-banner text-white py-2 px-4 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-center text-center">
        <CustomLink
          to="/Live"
          text="live"
          className="bg-white text-red-600 uppercase px-3 py-1 text-xs font-bold mr-3 rounded-full shadow-sm"
        />

        <HeadLine
          title={[
            { title: "tilel text namre " },
            { title: "tilel text namre " },
            { title: "tilel text namre " },
            { title: "tilel text namre " },
          ]}
        />
      </div>
    </div>
  );
}
