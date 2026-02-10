import { useState, useEffect } from "react";
import Userdropdown from "./Userdropdown";
import { useAuth } from "./../context/AuthContext";



export default function UserSection() {
  const [showClass, setClass] = useState(false);
  const { user } = useAuth()



  useEffect(() => {
    if (user?.loggedIn) setClass(false);
  }, [user?.loggedIn]);


  return (

    <>{user?.loggedIn && <div id="user-section" className=" relative">
      <button
        onClick={() =>
          setClass((prev) => {
            return !prev;
          })
        }
        className="flex items-center space-x-2 hover:text-gray-300  transition-colors"
      >
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <span id="user-avatar" className="uppercase text-sm font-bold">
            {/* {user.firstName[0] + user.lastName[0]} */}
          </span>
        </div>

        <span id="user-name" className="hidden md:inline">
          {user.firstName}
        </span>

        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>

        <span
          id="notification-badge"
          className="notification-badge w-2 h-2 bg-red-500 rounded-full hidden"
        ></span>
      </button>

      <Userdropdown user={user} isLogin={user?.loggedIn} className={showClass ? "show" : "hidden"} />
    </div>}
    </>

  );
}
