

export default function dashboardSection() {


    return (
        <div className="section active">
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{"label"}👋</h2>
                        <p className="text-gray-600">{"massage"}</p>
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
    )
}
