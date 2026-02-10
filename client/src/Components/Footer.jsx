import Download from "./Download";
import MideaLink from "./MideaLink";
import Copyright from "./Copyright";
import LishLink from "./LishLink";



const pagesName = [
  "Home",
  "UK",
  "World",
  "Business",
  "Politics",
  "Technology",
  "Science",
  "Health",
  "Sport",
];

export default function Footer() {
  const firstHalf = pagesName.slice(0, 5);
  const secondHalf = pagesName.slice(0, 5);




  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white mt-16">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <LishLink pagesName={firstHalf} lishName="News" />
          <LishLink pagesName={secondHalf} lishName="Sport" />
          <LishLink pagesName={secondHalf} lishName="Link" />
          <LishLink pagesName={secondHalf} lishName="Contact" />
        </div>


        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <MideaLink />
            <Download />
          </div>
        </div>

        <Copyright />
      </div>
    </footer>

  );
}
