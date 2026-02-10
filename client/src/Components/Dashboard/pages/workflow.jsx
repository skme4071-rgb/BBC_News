export default function workflow() {
    return (<div id="workflow-section" className="section ">
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
    </div>)
}