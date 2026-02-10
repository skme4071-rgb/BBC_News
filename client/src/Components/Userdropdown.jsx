import Logout from "./Authentication/logout";
import { CustomLink } from "./utlis/tag";

export default function Userdropdown({ className, user }) {

  const { firstName, lastName, email } = user

  return (
    <div
      className={`user-dropdown ${className} absolute right-0 mt-2 w-64 bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-200 z-50`}
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span id="dropdown-avatar" className="text-white font-bold">
              JD
            </span>
          </div>
          <div>
            <p id="dropdown-name" className="font-semibold">
              {firstName} {lastName}
            </p>
            <p id="dropdown-email" className="text-sm text-gray-500">
              {email.slice(0, 18)}
            </p>
          </div>
        </div>
      </div>
      <div className="py-2">

        <CustomLink
          to="/Profile"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg mr-2">👤</span>
          <span>My Profile</span>
        </CustomLink>


        <a
          href="#"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">📰</span>
          <span>My Articles</span>
          <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
            3
          </span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">🔖</span>
          <span>Bookmarks</span>
          <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
            12
          </span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">🔔</span>
          <span>Notifications</span>
          <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
            5
          </span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">⚙️</span>
          <span>Settings</span>
        </a>
      </div>
      <Logout />

    </div>
  );
}
