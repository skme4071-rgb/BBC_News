import Logo from "./logo";
import WeatherBar from "./WeatherBer";
import AuthButtons from "./AuthButtons";
import UserSection from "./UserSection";
import MobileSearch from "./mobileSearch";
import ToggleMobileMenu from "./toggle/ToggleMobileMenu";
import ToggleMobileSearch from "./toggle/ToggleMobileSearch";
import Search from "./Search";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { useAuth } from "./../context/AuthContext";
import MobileMenu from "./MobileMenu";


const pagesName1 = [
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
const icon = ["🏠", "GB", "🌍", "💼", "🏛️", "💻", "🔬", "🏥", "👤"];
export default function Header() {
  const [showmMobileSesrch, setShowmMobileSesrch] = useState(false);
  const [showmMobileMenu, setShowmMobileMenu] = useState(false);

  const { user } = useAuth();


  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="hidden sm:flex justify-between items-center py-2.5 text-sm border-b border-gray-700">
          <WeatherBar />
          {!user?.loggedIn && <AuthButtons buttonName={["Signin", "Register"]} />}
          <UserSection />
        </div>

        <div className="flex justify-between items-center py-4 mobile-header-compact">
          <Logo />

          <div className="flex items-center space-x-3">
            <Search />

            <ToggleMobileSearch
              onClick={() =>
                setShowmMobileSesrch((prev) => {
                  return !prev;
                })
              }
            />
            <ToggleMobileMenu
              onClick={() =>
                setShowmMobileMenu((prev) => {
                  return !prev;
                })
              }
            />
          </div>
        </div>

        <MobileSearch show={showmMobileSesrch ? "show" : "hidden"} />
      </div>

      <Navigation
        pagesName={pagesName1}
        onClick={() => setShowmMobileMenu(false)}
      />
      <MobileMenu
        onClick={() =>
          setShowmMobileMenu((prev) => {
            return !prev;
          })
        }
        icon={icon}
        show={showmMobileMenu ? "show" : "hidden"}
        pagesName={pagesName1}
      />
    </header>
  );
}
