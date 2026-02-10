import CommonLeyout from "./../CommonLeyout";
import LocalWeather from "../card/LocalWeather";
import SectionCord from "../card/sectionCord";
import CategoryArticle from "../card/CategoryArticle";
import SekendaryArticle from "./../SekendaryArticle";

export default function Details() {
  return (
    <CommonLeyout pagesName="Live">
      <iframe
        width="936"
        height="527"
        src="https://www.youtube.com/embed/fQcqUs3ARWU"
        title="NEWS24 সরাসরি সম্প্রচার | লাইভ নিউজ আপডেট | 24/7 নিউজ স্ট্রিমিং | News24 Live TV | News24 Live"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>{" "}
    </CommonLeyout>
  );
}
