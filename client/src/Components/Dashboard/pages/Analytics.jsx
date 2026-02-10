
export default function Analytics() {

    return (
         <div id="analytics-section" className="section ">
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
    )
}
