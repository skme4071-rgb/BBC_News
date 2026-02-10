
export default function DashboardMainLeyOut() {
    
    return (
        <>
            <header className="bg-white shadow-lg border-b sticky top-0 z-40">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center space-x-4">
                        <button id="sidebarToggle" className="p-2 hover:bg-gray-100 rounded-lg">
                            ☰
                        </button>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                                <i className="fas fa-newspaper text-white text-lg"></i>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 uppercase ">Dashboard</h1>
                                <p className="text-xs text-gray-500">উন্নত সংবাদ ব্যবস্থাপনা</p>
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
                        <select id="roleSelector" className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                            <option value="reporter">রিপোর্টার</option>
                            <option value="editor">এডিটর</option>
                            <option value="manager">ম্যানেজার</option>
                            <option value="admin">অ্যাডমিন</option>
                        </select>

                        {/* <!-- User Menu --> */}
                        <div className="relative">
                            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg" id="userMenuBtn">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                    আহ
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

            <div className="flex">
                {/* <!-- Enhanced Sidebar --> */}
                <aside className="w-64 bg-white shadow-lg h-screen sticky top-16 transition-all duration-300" id="sidebar">
                    <nav className="p-4 space-y-1">
                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors" data-section="dashboard">
                            <i className="fas fa-tachometer-alt text-gray-600 w-5"></i>
                            <span className="nav-text">ড্যাশবোর্ড</span>
                            <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">নতুন</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors" data-section="workflow">
                            <i className="fas fa-project-diagram text-gray-600 w-5"></i>
                            <span className="nav-text">ওয়ার্কফ্লো</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors" data-section="articles">
                            <i className="fas fa-newspaper text-gray-600 w-5"></i>
                            <span className="nav-text">নিবন্ধসমূহ</span>
                            <span className="ml-auto text-xs text-gray-500" id="articleCount">১২৪</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors" data-section="editor">
                            <i className="fas fa-edit text-gray-600 w-5"></i>
                            <span className="nav-text">স্মার্ট এডিটর</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors role-specific" data-roles="editor,manager,admin" data-section="review">
                            <i className="fas fa-check-circle text-gray-600 w-5"></i>
                            <span className="nav-text">পর্যালোচনা</span>
                            <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full" id="reviewCount">৫</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors role-specific" data-roles="manager,admin" data-section="analytics">
                            <i className="fas fa-chart-line text-gray-600 w-5"></i>
                            <span className="nav-text">অ্যানালিটিক্স</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors" data-section="collaboration">
                            <i className="fas fa-users text-gray-600 w-5"></i>
                            <span className="nav-text">সহযোগিতা</span>
                            <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors" data-section="media">
                            <i className="fas fa-images text-gray-600 w-5"></i>
                            <span className="nav-text">মিডিয়া হাব</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors role-specific" data-roles="admin" data-section="users">
                            <i className="fas fa-user-cog text-gray-600 w-5"></i>
                            <span className="nav-text">ব্যবহারকারী</span>
                        </button>

                        <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors role-specific" data-roles="manager,admin" data-section="api">
                            <i className="fas fa-code text-gray-600 w-5"></i>
                            <span className="nav-text">API & ইন্টিগ্রেশন</span>
                        </button>

                        <div className="border-t pt-4 mt-4">
                            <button className="nav-item w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3 transition-colors" data-section="settings">
                                <i className="fas fa-cog text-gray-600 w-5"></i>
                                <span className="nav-text">সেটিংস</span>
                            </button>

                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 flex items-center space-x-3 transition-colors text-gray-600">
                                <i className="fas fa-sign-out-alt w-5"></i>
                                <span className="nav-text">লগআউট</span>
                            </button>
                        </div>
                    </nav>
                </aside>

                {/* <!-- Enhanced Main Content --> */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {/* <!-- Enhanced Dashboard Section --> */}
                    <div id="dashboard-section" className="section active">
                        <div className="mb-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">স্বাগতম, আহমেদ হাসান! 👋</h2>
                                    <p className="text-gray-600">আজকের কাজের সংক্ষিপ্ত বিবরণ এবং গুরুত্বপূর্ণ আপডেট</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                                        <i className="fas fa-plus"></i>
                                        <span>নতুন নিবন্ধ</span>
                                    </button>
                                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2">
                                        <i className="fas fa-download"></i>
                                        <span>রিপোর্ট</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Enhanced Stats Cards --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border card-hover">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">মোট নিবন্ধ</p>
                                        <p className="text-3xl font-bold text-gray-900" id="totalArticles">১২৪</p>
                                        <p className="text-sm text-green-600 flex items-center mt-2">
                                            <i className="fas fa-arrow-up mr-1"></i>
                                            +১২% গত মাসে
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                                        <i className="fas fa-newspaper text-white text-xl"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border card-hover">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">খসড়া</p>
                                        <p className="text-3xl font-bold text-gray-900" id="draftArticles">৮</p>
                                        <p className="text-sm text-yellow-600 flex items-center mt-2">
                                            <i className="fas fa-clock mr-1"></i>
                                            ৩টি আজকের জন্য
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl">
                                        <i className="fas fa-edit text-white text-xl"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border card-hover">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">প্রকাশিত</p>
                                        <p className="text-3xl font-bold text-gray-900" id="publishedArticles">১১৬</p>
                                        <p className="text-sm text-green-600 flex items-center mt-2">
                                            <i className="fas fa-check mr-1"></i>
                                            ৫টি আজ প্রকাশিত
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                                        <i className="fas fa-check-circle text-white text-xl"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border card-hover">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">আজকের ভিউ</p>
                                        <p className="text-3xl font-bold text-gray-900" id="todayViews">২৫,৪৫৬</p>
                                        <p className="text-sm text-purple-600 flex items-center mt-2">
                                            <i className="fas fa-eye mr-1"></i>
                                            +৮% গতকালের চেয়ে
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                                        <i className="fas fa-eye text-white text-xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Quick Actions & Recent Activity --> */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            {/* <!-- Quick Actions --> */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <i className="fas fa-bolt text-yellow-500 mr-2"></i>
                                    দ্রুত কার্যক্রম
                                </h3>
                                <div className="space-y-3">
                                    <button className="w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center space-x-3 transition-colors">
                                        <i className="fas fa-plus text-blue-600"></i>
                                        <span className="text-blue-700 font-medium">নতুন নিবন্ধ শুরু করুন</span>
                                    </button>
                                    <button className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg flex items-center space-x-3 transition-colors">
                                        <i className="fas fa-upload text-green-600"></i>
                                        <span className="text-green-700 font-medium">মিডিয়া আপলোড</span>
                                    </button>
                                    <button className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg flex items-center space-x-3 transition-colors">
                                        <i className="fas fa-calendar text-purple-600"></i>
                                        <span className="text-purple-700 font-medium">পাবলিশিং শিডিউল</span>
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Recent Activity --> */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <i className="fas fa-history text-blue-500 mr-2"></i>
                                    সাম্প্রতিক কার্যক্রম
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <i className="fas fa-plus text-blue-600 text-sm"></i>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">নতুন নিবন্ধ তৈরি করা হয়েছে</p>
                                            <p className="text-xs text-gray-500">"বাজেট ২০২৪ বিশ্লেষণ" • ২ মিনিট আগে</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-green-100 rounded-full">
                                            <i className="fas fa-check text-green-600 text-sm"></i>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">নিবন্ধ প্রকাশিত হয়েছে</p>
                                            <p className="text-xs text-gray-500">"শিক্ষা সংস্কার" • ১৫ মিনিট আগে</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-yellow-100 rounded-full">
                                            <i className="fas fa-edit text-yellow-600 text-sm"></i>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">খসড়া সংরক্ষিত হয়েছে</p>
                                            <p className="text-xs text-gray-500">"প্রযুক্তি উন্নয়ন" • ৩০ মিনিট আগে</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Upcoming Tasks --> */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <i className="fas fa-tasks text-orange-500 mr-2"></i>
                                    আসন্ন কাজ
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-red-800">বাজেট নিয়ে প্রতিবেদন</p>
                                                <p className="text-xs text-red-600">আজ ৫:০০ PM</p>
                                            </div>
                                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">জরুরি</span>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-yellow-800">শিক্ষা সংস্কার নিবন্ধ</p>
                                                <p className="text-xs text-yellow-600">কাল ১০:০০ AM</p>
                                            </div>
                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">মধ্যম</span>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-blue-800">সাক্ষাৎকার প্রস্তুতি</p>
                                                <p className="text-xs text-blue-600">পরশু ২:০০ PM</p>
                                            </div>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">নিম্ন</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Performance Chart --> */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="text-lg font-semibold mb-4">সাপ্তাহিক পারফরম্যান্স</h3>
                                <div className="chart-container">
                                    <canvas id="performanceChart"></canvas>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="text-lg font-semibold mb-4">জনপ্রিয় বিভাগ</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">রাজনীতি</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                                            </div>
                                            <span className="text-sm text-gray-600">৭৫%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">অর্থনীতি</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="bg-green-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                                            </div>
                                            <span className="text-sm text-gray-600">৬০%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">খেলাধুলা</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                                            </div>
                                            <span className="text-sm text-gray-600">৪৫%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">প্রযুক্তি</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                                            </div>
                                            <span className="text-sm text-gray-600">৩৫%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Enhanced Workflow Section --> */}
                    <div id="workflow-section" className="section hidden">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">নিউজ ওয়ার্কফ্লো</h2>
                            <p className="text-gray-600">কানবান বোর্ড ব্যবহার করে নিবন্ধের অগ্রগতি ট্র্যাক করুন</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* <!-- Ideas Column --> */}
                            <div className="bg-gray-100 p-4 rounded-xl kanban-column">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-gray-700">আইডিয়া</h3>
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">৩</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg shadow-sm kanban-card">
                                        <h4 className="font-medium text-sm mb-2">ক্রিপ্টোকারেন্সি নিয়ে বিশেষ প্রতিবেদন</h4>
                                        <p className="text-xs text-gray-500 mb-3">প্রযুক্তি বিভাগ</p>
                                        <div className="flex items-center justify-between">
                                            <div className="user-avatar bg-blue-500 text-white">আহ</div>
                                            <span className="text-xs text-gray-400">২ দিন আগে</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm kanban-card">
                                        <h4 className="font-medium text-sm mb-2">জলবায়ু পরিবর্তনের প্রভাব</h4>
                                        <p className="text-xs text-gray-500 mb-3">পরিবেশ বিভাগ</p>
                                        <div className="flex items-center justify-between">
                                            <div className="user-avatar bg-green-500 text-white">ফা</div>
                                            <span className="text-xs text-gray-400">১ দিন আগে</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- In Progress Column --> */}
                            <div className="bg-blue-50 p-4 rounded-xl kanban-column">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-blue-700">চলমান</h3>
                                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs">৫</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg shadow-sm kanban-card border-l-4 border-blue-500">
                                        <div className="collaboration-indicator">
                                            <div className="user-avatar bg-blue-500 text-white">আহ</div>
                                            <div className="user-avatar bg-green-500 text-white">ফা</div>
                                        </div>
                                        <h4 className="font-medium text-sm mb-2">সরকারি বাজেট ২০২৪ বিশ্লেষণ</h4>
                                        <p className="text-xs text-gray-500 mb-3">রাজনীতি বিভাগ</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-blue-600 font-medium">৬৫% সম্পন্ন</span>
                                            <span className="text-xs text-gray-400">আজ ৫:০০ PM</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm kanban-card">
                                        <h4 className="font-medium text-sm mb-2">শিক্ষা সংস্কার পরিকল্পনা</h4>
                                        <p className="text-xs text-gray-500 mb-3">শিক্ষা বিভাগ</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="user-avatar bg-purple-500 text-white">রহ</div>
                                            <span className="text-xs text-gray-400">কাল ১০:০০ AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Review Column --> */}
                            <div className="bg-yellow-50 p-4 rounded-xl kanban-column">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-yellow-700">পর্যালোচনায়</h3>
                                    <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full text-xs">২</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg shadow-sm kanban-card border-l-4 border-yellow-500">
                                        <h4 className="font-medium text-sm mb-2">প্রযুক্তি খাতে বিনিয়োগ</h4>
                                        <p className="text-xs text-gray-500 mb-3">অর্থনীতি বিভাগ</p>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <i className="fas fa-clock text-yellow-500 text-xs"></i>
                                            <span className="text-xs text-yellow-600">এডিটর পর্যালোচনায়</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="user-avatar bg-orange-500 text-white">সা</div>
                                            <span className="text-xs text-gray-400">১ ঘন্টা আগে</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Published Column --> */}
                            <div className="bg-green-50 p-4 rounded-xl kanban-column">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-green-700">প্রকাশিত</h3>
                                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-xs">৮</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg shadow-sm kanban-card border-l-4 border-green-500">
                                        <h4 className="font-medium text-sm mb-2">স্বাস্থ্য খাতে নতুন উদ্যোগ</h4>
                                        <p className="text-xs text-gray-500 mb-3">স্বাস্থ্য বিভাগ</p>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <i className="fas fa-eye text-green-500 text-xs"></i>
                                            <span className="text-xs text-green-600">১,২৩৪ ভিউ</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="user-avatar bg-teal-500 text-white">না</div>
                                            <span className="text-xs text-gray-400">২ ঘন্টা আগে</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm kanban-card">
                                        <h4 className="font-medium text-sm mb-2">খেলাধুলায় নতুন রেকর্ড</h4>
                                        <p className="text-xs text-gray-500 mb-3">খেলাধুলা বিভাগ</p>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <i className="fas fa-eye text-green-500 text-xs"></i>
                                            <span className="text-xs text-green-600">৮৯৬ ভিউ</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="user-avatar bg-red-500 text-white">কা</div>
                                            <span className="text-xs text-gray-400">৪ ঘন্টা আগে</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Enhanced Smart Editor Section --> */}
                    <div id="editor-section" className="section hidden">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">স্মার্ট এডিটর</h2>
                            <p className="text-gray-600">AI-সহায়তা সহ উন্নত নিবন্ধ সম্পাদক</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
                                {/* <!-- Main Editor --> */}
                                <div className="lg:col-span-3">
                                    <div className="space-y-4">
                                        {/* <!-- Title --> */}
                                        <input type="text" placeholder="আকর্ষণীয় শিরোনাম লিখুন..." className="w-full px-0 py-3 text-2xl font-bold border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none" id="articleTitle " />

                                        {/* <!-- AI Suggestion --> */}
                                        <div className="ai-suggestion hidden" id="aiSuggestion">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <i className="fas fa-robot"></i>
                                                <span className="font-semibold">AI সাজেশন</span>
                                            </div>
                                            <p className="text-sm" id="aiSuggestionText"></p>
                                            <div className="flex space-x-2 mt-2">
                                                <button className="px-3 py-1 bg-white bg-opacity-20 rounded text-sm">গ্রহণ করুন</button>
                                                <button className="px-3 py-1 bg-white bg-opacity-20 rounded text-sm">বাতিল</button>
                                            </div>
                                        </div>

                                        {/* <!-- Enhanced Toolbar --> */}
                                        <div className="flex items-center space-x-2 py-3 border-b border-gray-200 editor-toolbar bg-white">
                                            <div className="flex items-center space-x-1">
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Bold">
                                                    <i className="fas fa-bold"></i>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Italic">
                                                    <i className="fas fa-italic"></i>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Underline">
                                                    <i className="fas fa-underline"></i>
                                                </button>
                                            </div>
                                            <div className="w-px h-6 bg-gray-300"></div>
                                            <div className="flex items-center space-x-1">
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Heading">
                                                    <i className="fas fa-heading"></i>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded" title="List">
                                                    <i className="fas fa-list-ul"></i>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </button>
                                            </div>
                                            <div className="w-px h-6 bg-gray-300"></div>
                                            <div className="flex items-center space-x-1">
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Link">
                                                    <i className="fas fa-link"></i>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Image">
                                                    <i className="fas fa-image"></i>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded" title="Video">
                                                    <i className="fas fa-video"></i>
                                                </button>
                                            </div>
                                            <div className="w-px h-6 bg-gray-300"></div>
                                            <div className="flex items-center space-x-1">
                                                <button className="p-2 hover:bg-gray-100 rounded text-blue-600" title="AI সহায়তা">
                                                    <i className="fas fa-robot"></i>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded text-green-600" title="ব্যাকরণ চেক">
                                                    <i className="fas fa-spell-check"></i>
                                                </button>
                                            </div>
                                            <div className="flex-1"></div>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-sm text-gray-500" id="wordCount">০ শব্দ</span>
                                                <span className="text-sm text-gray-500">|</span>
                                                <span className="text-sm text-gray-500" id="readingTime">০ মিনিট পড়া</span>
                                            </div>
                                        </div>

                                        {/* <!-- Content Editor --> */}
                                        <textarea placeholder="আপনার নিবন্ধ লিখুন... (AI সাজেশনের জন্য Ctrl+Space চাপুন)" className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" id="articleContent"></textarea>

                                        {/* <!-- Auto-save indicator --> */}
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center space-x-2">
                                                <i className="fas fa-save text-green-500"></i>
                                                <span>স্বয়ংক্রিয় সংরক্ষণ: ২ সেকেন্ড আগে</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <i className="fas fa-users text-blue-500"></i>
                                                <span>২ জন সহযোগী অনলাইন</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Enhanced Sidebar --> */}
                                <div className="space-y-6">
                                    {/* <!-- Publish Options --> */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-semibold mb-3 flex items-center">
                                            <i className="fas fa-rocket text-blue-500 mr-2"></i>
                                            প্রকাশনা
                                        </h3>
                                        <div className="space-y-3">
                                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                                                <option>খসড়া হিসেবে সংরক্ষণ</option>
                                                <option>পর্যালোচনার জন্য পাঠান</option>
                                                <option>তাৎক্ষণিক প্রকাশ</option>
                                                <option>নির্ধারিত সময়ে প্রকাশ</option>
                                            </select>
                                            <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                                            <div className="flex space-x-2">
                                                <button className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center justify-center">
                                                    <i className="fas fa-save mr-2"></i>সংরক্ষণ
                                                </button>
                                                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
                                                    <i className="fas fa-paper-plane mr-2"></i>প্রকাশ
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Categories & Tags --> */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-semibold mb-3 flex items-center">
                                            <i className="fas fa-tags text-green-500 mr-2"></i>
                                            বিভাগ ও ট্যাগ
                                        </h3>
                                        <div className="space-y-3">
                                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                                                <option>রাজনীতি</option>
                                                <option>অর্থনীতি</option>
                                                <option>খেলাধুলা</option>
                                                <option>প্রযুক্তি</option>
                                                <option>শিক্ষা</option>
                                                <option>স্বাস্থ্য</option>
                                            </select>
                                            <div className="border border-gray-300 rounded-lg p-2 min-h-12 flex flex-wrap items-center gap-1">
                                                <span className="tag-item">
                                                    বাজেট
                                                    <i className="fas fa-times ml-1 cursor-pointer"></i>
                                                </span>
                                                <span className="tag-item">
                                                    সরকার
                                                    <i className="fas fa-times ml-1 cursor-pointer"></i>
                                                </span>
                                                <input type="text" placeholder="নতুন ট্যাগ..." className="tag-input flex-1" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- SEO Optimization --> */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-semibold mb-3 flex items-center">
                                            <i className="fas fa-search text-purple-500 mr-2"></i>
                                            SEO অপটিমাইজেশন
                                        </h3>
                                        <div className="space-y-3">
                                            <input type="text" placeholder="Meta শিরোনাম..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                                            <textarea placeholder="Meta বিবরণ..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-20 resize-none"></textarea>
                                            <input type="text" placeholder="Focus কীওয়ার্ড..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />

                                            {/* <!-- SEO Score --> */}
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-medium">SEO স্কোর</span>
                                                    <span className="text-sm font-bold text-green-600">৮৫/১০০</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                                </div>
                                                <div className="mt-2 space-y-1">
                                                    <div className="flex items-center text-xs">
                                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                                        <span>শিরোনাম দৈর্ঘ্য উপযুক্ত</span>
                                                    </div>
                                                    <div className="flex items-center text-xs">
                                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                                        <span>Meta বিবরণ অপটিমাইজড</span>
                                                    </div>
                                                    <div className="flex items-center text-xs">
                                                        <i className="fas fa-exclamation text-yellow-500 mr-2"></i>
                                                        <span>আরো কীওয়ার্ড যোগ করুন</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- AI Writing Assistant --> */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-semibold mb-3 flex items-center">
                                            <i className="fas fa-robot text-blue-500 mr-2"></i>
                                            AI সহায়ক
                                        </h3>
                                        <div className="space-y-2">
                                            <button className="w-full px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm flex items-center">
                                                <i className="fas fa-lightbulb mr-2"></i>
                                                শিরোনাম সাজেশন
                                            </button>
                                            <button className="w-full px-3 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg text-sm flex items-center">
                                                <i className="fas fa-spell-check mr-2"></i>
                                                ব্যাকরণ চেক
                                            </button>
                                            <button className="w-full px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-sm flex items-center">
                                                <i className="fas fa-compress-alt mr-2"></i>
                                                সংক্ষিপ্তসার তৈরি
                                            </button>
                                            <button className="w-full px-3 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg text-sm flex items-center">
                                                <i className="fas fa-language mr-2"></i>
                                                টোন উন্নতি
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Other sections remain similar but with enhanced styling -->
            <!-- I'll include a few more key sections with improvements -->

            <!-- Enhanced Analytics Section --> */}
                    <div id="analytics-section" className="section hidden">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">উন্নত অ্যানালিটিক্স</h2>
                            <p className="text-gray-600">বিস্তারিত পারফরম্যান্স মেট্রিক্স এবং ইনসাইট</p>
                        </div>

                        {/* <!-- Time Range Selector --> */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border mb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">আজ</button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">গত ৭ দিন</button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">গত ৩০ দিন</button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">কাস্টম</button>
                                </div>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm flex items-center">
                                    <i className="fas fa-download mr-2"></i>
                                    রিপোর্ট ডাউনলোড
                                </button>
                            </div>
                        </div>

                        {/* <!-- Advanced Metrics --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <i className="fas fa-eye text-blue-600 text-xl"></i>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-gray-900">২৫৬,৮৯৩</p>
                                        <p className="text-sm text-gray-600">মোট ভিউ</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-arrow-up text-green-500 mr-1"></i>
                                    <span className="text-green-600 text-sm font-medium">+১৫.৩%</span>
                                    <span className="text-gray-500 text-sm ml-2">গত মাসে</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-green-100 rounded-lg">
                                        <i className="fas fa-users text-green-600 text-xl"></i>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-gray-900">৪৫,৬৭৮</p>
                                        <p className="text-sm text-gray-600">অনন্য ভিজিটর</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-arrow-up text-green-500 mr-1"></i>
                                    <span className="text-green-600 text-sm font-medium">+৮.৭%</span>
                                    <span className="text-gray-500 text-sm ml-2">গত মাসে</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-yellow-100 rounded-lg">
                                        <i className="fas fa-clock text-yellow-600 text-xl"></i>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-gray-900">৪:২৫</p>
                                        <p className="text-sm text-gray-600">গড় সময়</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-arrow-up text-green-500 mr-1"></i>
                                    <span className="text-green-600 text-sm font-medium">+১২.১%</span>
                                    <span className="text-gray-500 text-sm ml-2">গত মাসে</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-purple-100 rounded-lg">
                                        <i className="fas fa-share text-purple-600 text-xl"></i>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-gray-900">৩,৪৫৬</p>
                                        <p className="text-sm text-gray-600">শেয়ার</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-arrow-down text-red-500 mr-1"></i>
                                    <span className="text-red-600 text-sm font-medium">-২.৩%</span>
                                    <span className="text-gray-500 text-sm ml-2">গত মাসে</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Charts --> */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="text-lg font-semibold mb-4">ট্রাফিক ট্রেন্ড</h3>
                                <div className="chart-container">
                                    <canvas id="trafficChart"></canvas>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="text-lg font-semibold mb-4">জনপ্রিয় কন্টেন্ট</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">সরকারি বাজেট ২০২৪ বিশ্লেষণ</p>
                                            <p className="text-xs text-gray-500">রাজনীতি • ৫ দিন আগে</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-blue-600">১৫,৬৭৮ ভিউ</p>
                                            <p className="text-xs text-gray-500">৪.২ মিনিট</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">শিক্ষা সংস্কার পরিকল্পনা</p>
                                            <p className="text-xs text-gray-500">শিক্ষা • ৩ দিন আগে</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-blue-600">১২,৩৪৫ ভিউ</p>
                                            <p className="text-xs text-gray-500">৩.৮ মিনিট</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">প্রযুক্তি খাতে বিনিয়োগ</p>
                                            <p className="text-xs text-gray-500">প্রযুক্তি • ১ সপ্তাহ আগে</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-blue-600">৯,৮৭৬ ভিউ</p>
                                            <p className="text-xs text-gray-500">৫.১ মিনিট</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Add other sections here with similar enhancements -->
            <!-- For brevity, I'll include the basic structure for remaining sections --> */}

                    <div id="articles-section" className="section hidden">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">নিবন্ধ ব্যবস্থাপনা</h2>
                                <p className="text-gray-600">আপনার সকল নিবন্ধ দেখুন এবং পরিচালনা করুন</p>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2" onclick="showEditor()">
                                <i className="fas fa-plus"></i>
                                <span>নতুন নিবন্ধ</span>
                            </button>
                        </div>
                        {/* <!-- Enhanced articles table would go here --> */}
                    </div>

                    <div id="review-section" className="section hidden">
                        {/* <!-- Enhanced review section --> */}
                    </div>

                    <div id="collaboration-section" className="section hidden">
                        {/* <!-- New collaboration section --> */}
                    </div>

                    <div id="media-section" className="section hidden">
                        {/* <!-- Enhanced media section --> */}
                    </div>

                    <div id="users-section" className="section hidden">
                        {/* <!-- Enhanced users section --> */}
                    </div>

                    <div id="api-section" className="section hidden">
                        {/* <!-- Enhanced API section --> */}
                    </div>

                    <div id="settings-section" className="section hidden">
                        {/* <!-- New settings section --> */}
                    </div>
                </main>
            </div>

            {/* <!-- Enhanced Notification Panel-- > */}
            <div id="notificationPanel" className="fixed top-16 right-6 w-96 bg-white rounded-xl shadow-xl border z-50 hidden">
                <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold">বিজ্ঞপ্তি</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                            <i className="fas fa-cog"></i>
                        </button>
                    </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                    <div className="p-4 border-b hover:bg-gray-50 transition-colors">
                        <div className="flex items-start space-x-3">
                            <div className="p-2 bg-blue-100 rounded-full">
                                <i className="fas fa-bell text-blue-600 text-sm"></i>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">নতুন নিবন্ধ অনুমোদনের জন্য অপেক্ষমাণ</p>
                                <p className="text-xs text-gray-500">"বাজেট ২০২৪ বিশ্লেষণ" • ৫ মিনিট আগে</p>
                            </div>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
                    {/* <!-- More notifications... --> */}
                </div>
                <div className="p-4 border-t">
                    <button className="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                        সব বিজ্ঞপ্তি দেখুন
                    </button>
                </div>
            </div>

            {/* <!--Word Counter(Floating)-- > */}
            <div className="word-counter bg-white rounded-lg shadow-lg border p-3 hidden" id="floatingWordCounter">
                <div className="text-xs text-gray-600">
                    <div>শব্দ: <span id="floatingWordCount">০</span></div>
                    <div>অক্ষর: <span id="floatingCharCount">০</span></div>
                    <div>পড়ার সময়: <span id="floatingReadTime">০ মিনিট</span></div>
                </div>
            </div>

            {/* <!--Toast Notifications-- > */}
            <div id="toastContainer" className="fixed top-20 right-6 z-50 space-y-2"></div>
        </>
    )
}