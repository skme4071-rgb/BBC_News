import { Icons } from "./Config";




const { FileText, Menu } = Icons;

export default function Header() {


    return (
        <header className="bg-white shadow-lg border-b sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center   ">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                            <FileText size={24} className=" text-lg" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 uppercase ">Dashboard</h1>
                            <p className="text-xs text-gray-500">Advanced News Administration</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-6">
                        <span className="status-indicator status-online"></span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium" id="userRole">রিপোর্টার</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-sm text-gray-600 font-medium" id="userName">আহমেদ হাসান</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    {/* <!-- Search --> */}
                    <div className="relative hidden md:block">
                        <input type="text" placeholder="দ্রুত অনুসন্ধান..."
                            className="pl-10 pr-4 py-2 border border-gray-300
                     rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"/>
                        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                    </div>

                    {/* <!-- Quick Actions --> */}
                    <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title="নতুন নিবন্ধ">
                            <i className="fas fa-plus"></i>
                        </button>
                        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title="সংরক্ষিত">
                            <i className="fas fa-bookmark"></i>
                        </button>
                        <button id="darkModeToggle" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title="ডার্ক মোড">
                            <i className="fas fa-moon"></i>
                        </button>
                    </div>

                    {/* <!-- Notifications --> */}
                    <div className="relative">
                        <button className="p-2 text-gray-600 hover:text-gray-900 relative" id="notificationBtn">
                            <i className="fas fa-bell text-lg"></i>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center notification-badge" id="notificationCount">5</span>
                        </button>
                    </div>

                    {/* <!-- Role Selector --> */}
                    {/* <select id="roleSelector" className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                        <option value="reporter">রিপোর্টার</option>
                        <option value="editor">এডিটর</option>
                        <option value="manager">ম্যানেজার</option>
                        <option value="admin">অ্যাডমিন</option>
                    </select> */}

                    {/* <!-- User Menu --> */}
                    <div className="relative">
                        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg" id="userMenuBtn">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">

                            </div>
                            <i className="fas fa-chevron-down text-xs text-gray-400"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Progress Bar for Loading --> */}
            <div id="loadingBar" className="h-1 bg-blue-500 progress-bar hidden"
                style={{ width: "0%" }}></div>
        </header>
    )
}