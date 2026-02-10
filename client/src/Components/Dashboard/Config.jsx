// import {
//     Clock,
//     Bot,
//     Zap,
//     History,
//     Check,
//     Pencil,
//     Eye,
//     Bold,
//     Upload,
//     Calendar,
//     ListTodo,
//     Italic,
//     Underline,
//     Heading,
//     Users,
//     Download,
//     Quote,
//     SpellCheck,
//     Image,
//     Video,
//     ArrowDown,
//     ArrowUp,
//     Share2,
//     Link,
//     Save,
//     Tags,
//     AlertTriangle,
//     Search,
//     X,
//     Send,
//     Rocket,
//     Smile
// } from "lucide-react";

// export const Icons = {
//     Clock,
//     Robot: Bot,
//     Bolt: Zap,
//     History,
//     Check,
//     Edit: Pencil,
//     Eye,
//     Bold,
//     Upload,
//     Calendar,
//     Tasks: ListTodo,
//     Italic,
//     Underline,
//     Heading,
//     Users,
//     Download,
//     QuoteLeft: Quote,
//     QuoteUp: Quote,
//     QuoteDown: Quote,
//     SpellCheck,
//     Image,
//     Video,
//     ArrowDown: ArrowDown,
//     ArrowUp: ArrowUp,
//     Share: Share2,
//     Link,
//     Save,
//     Tags,
//     Exclamation: AlertTriangle,
//     Search,
//     Times: X,
//     PaperPlane: Send,
//     Rocket,
//     Emoji: Smile
// };

// export const Colors = {
//     Primary: "#2563EB",      // blue
//     Secondary: "#64748B",    // slate
//     Accent: "#22C55E",       // green

//     Background: "#F8FAFC",
//     Surface: "#FFFFFF",
//     Card: "#FFFFFF",
//     Border: "#E5E7EB",
//     Divider: "#E5E7EB",

//     Text: "#0F172A",
//     TextMuted: "#64748B",

//     Success: "#16A34A",
//     Warning: "#F59E0B",
//     Error: "#DC2626",
//     Info: "#0EA5E9",

//     Hover: "#E0E7FF",
//     Active: "#C7D2FE",
//     Disabled: "#CBD5E1",
//     Focus: "#93C5FD"
// };

// export const RouteName = []




// export const Emoji = {
//     Clock: "⏰",
//     Robot: "🤖",
//     Bolt: "⚡",
//     History: "🕘",
//     Check: "✅",
//     Edit: "✏️",
//     Eye: "👁️",
//     Bold: "🅱️",
//     Upload: "⬆️",
//     Calendar: "📅",
//     Tasks: "📋",
//     Italic: "𝑰",
//     Underline: "〰️",
//     Heading: "🔠",
//     Users: "👥",
//     Download: "⬇️",
//     QuoteLeft: "❝",
//     QuoteUp: "⬆️❝",
//     QuoteDown: "⬇️❝",
//     SpellCheck: "🔍✔️",
//     Image: "🖼️",
//     Video: "🎥",
//     ArrowDown: "⬇️",
//     ArrowUp: "⬆️",
//     Share: "🔗",
//     Link: "🔗",
//     Save: "💾",
//     Tags: "🏷️",
//     Exclamation: "❗",
//     Search: "🔍",
//     Times: "❌",
//     PaperPlane: "📨",
//     Rocket: "🚀",
//     Emoji: "😊"
// };

import {
    Clock, Bot, Zap, History, Check, Pencil, Eye, Bold, Upload,
    Calendar, ListTodo, Italic, Underline, Heading, Users, Download,
    Quote, SpellCheck, Image, Video, ArrowDown, ArrowUp, Share2,
    Link, Save, Tags, AlertTriangle, Search, X, Send, Rocket, Smile,
    Sun, Moon, LayoutDashboard, FileText, Menu, Trash2, Plus , ListOrdered
} from "lucide-react";
// // ICON MAP
export const Icons = {

    Plus,
    Dashboard: LayoutDashboard,
    Clock,
    Robot: Bot,
    Bolt: Zap,
    History,
    Check,
    Edit: Pencil,
    Eye,
    Bold,
    Upload,
    Calendar,
    Tasks: ListTodo,
    Italic,
    Underline,
    Heading,
    Users,
    Download,
    QuoteLeft: Quote,
    QuoteUp: Quote,
    QuoteDown: Quote,
    SpellCheck,
    Image,
    Video,
    ArrowDown,
    ArrowUp,
    Share: Share2,
    Link,
    Save,
    Tags,
    Exclamation: AlertTriangle,
    Search,
    Times: X,
    PaperPlane: Send,
    Rocket,
    Emoji: Smile,
    Sun, Moon,
    FileText,
    Delete: Trash2,
    Menu ,
    Queue : ListOrdered
};


// // const Routes = {
// //     Dashboard: { 
// //         name: "Dashboard", 
// //         icon: Icons.Dashboard, 
// //         message: "আজকের কাজের সংক্ষিপ্ত বিবরণ এবং গুরুত্বপূর্ণ আপডেট", 
// //         label: "স্বাগতম" 
// //     },
// //     Workflow: { 
// //         name: "Workflow", 
// //         icon: Icons.Tasks,        // Workflow এর জন্য ListTodo ব্যবহার করা হলো
// //         message: "কানবান বোর্ড ব্যবহার করে নিবন্ধের অগ্রগতি ট্র্যাক করুন", 
// //         label: "নিউজ ওয়ার্কফ্লো" 
// //     },
// //     Settings: { 
// //         name: "Settings", 
// //         icon: Icons.Edit,         // Settings এর জন্য Pencil বা Edit ব্যবহার
// //         message: "", 
// //         label: "" 
// //     },
// //     SmartEditor: { 
// //         name: "SmartEditor", 
// //         icon: Icons.Pencil,       // SmartEditor এর জন্য Pencil
// //         message: "AI-সহায়তা সহ উন্নত নিবন্ধ সম্পাদক", 
// //         label: "নিবন্ধ ব্যবস্থাপনা" 
// //     },
// //     Articles: { 
// //         name: "Articles", 
// //         icon: Icons.SpellCheck,   // Articles এর জন্য SpellCheck
// //         message: "এডিটর থেকে নিবন্ধ তৈরি ও সম্পাদনা করুন", 
// //         label: "স্মার্ট এডিটর" 
// //     },
// //     Review: { 
// //         name: "Review", 
// //         icon: Icons.Eye,          // Review এর জন্য Eye
// //         message: "নিবন্ধ পর্যালোচনা ও অনুমোদন করুন", 
// //         label: "এডিটর রিভিউ" 
// //     },
// //     Collaboration: { 
// //         name: "Collaboration", 
// //         icon: Icons.Users,        // Collaboration এর জন্য Users
// //         message: "টিমের সঙ্গে নিবন্ধ সহযোগিতা করুন", 
// //         label: "এডিটর সহযোগিতা" 
// //     },
// //     Analytics: { 
// //         name: "Analytics", 
// //         icon: Icons.History,      // Analytics এর জন্য History
// //         message: "এডিটরের কার্যক্রম বিশ্লেষণ করুন", 
// //         label: "এডিটর বিশ্লেষণ" 
// //     },
// //     MediaHub: { 
// //         name: "MediaHub", 
// //         icon: Icons.Image,        // MediaHub এর জন্য Image
// //         message: "মিডিয়া ফাইল আপলোড ও ব্যবহার করুন", 
// //         label: "মিডিয়া হাব" 
// //     },
// //     ApiIntegration: { 
// //         name: "ApiIntegration", 
// //         icon: Icons.Link,         // API Integration এর জন্য Link
// //         message: "API ইন্টিগ্রেশন দ্বারা এডিটর ক্ষমতা বৃদ্ধি করুন", 
// //         label: "API ইন্টিগ্রেশন" 
// //     },
// //     Logout: { 
// //         name: "Logout", 
// //         icon: Icons.Rocket,       // Logout এর জন্য Rocket (অথবা Times/X ব্যবহার করা যায়)
// //         message: "অ্যাকাউন্ট থেকে লগ আউট করুন", 
// //         label: "লগ আউট" 
// //     },
// //     Users: { 
// //         name: "Users", 
// //         icon: Icons.Users,        // Users
// //         message: "এডিটর এবং ব্যবহারকারীদের পরিচালনা করুন", 
// //         label: "ব্যবহারকারী পরিচালনা" 
// //     },
// // };



// // // COLOR SYSTEM
// // const LightColors = {
// //     Primary: "#2563EB",
// //     Accent: "#22C55E",
// //     Background: "#F8FAFC",
// //     Text: "#0F172A"
// // };

// // const DarkColors = {
// //     Primary: "#60A5FA",
// //     Accent: "#4ADE80",
// //     Background: "#020617",
// //     Text: "#E5E7EB"
// // };

// // // // sidebarConfig.js
// // // export const sidebarMenu = [
// // //   { key: "dashboard", title: "ড্যাশবোর্ড", emoji: "📊", route: "/dashboard" },
// // //   { key: "settings", title: "Settings", emoji: "⚙️", route: "/settings" },
// // //   { key: "workflow", title: "ওয়ার্কফ্লো", emoji: "🔄", route: "/workflow" },
// // //   { key: "articles", title: "নিবন্ধসমূহ", emoji: "📝", route: "/articles" },
// // //   { key: "smartEditor", title: "স্মার্ট এডিটর", emoji: "✍️🤖", route: "/smart-editor" },
// // //   { key: "review", title: "পর্যালোচনা", emoji: "👀", route: "/review" },
// // //   { key: "analytics", title: "অ্যানালিটিক্স", emoji: "📈", route: "/analytics" },
// // //   { key: "collaboration", title: "সহযোগিতা", emoji: "🤝", route: "/collaboration" },
// // //   { key: "mediaHub", title: "মিডিয়া হাব", emoji: "🖼️", route: "/media-hub" },
// // //   { key: "users", title: "ব্যবহারকারী", emoji: "👥", route: "/users" },
// // //   { key: "apiIntegration", title: "API & ইন্টিগ্রেশন", emoji: "🔌🧩", route: "/api-integration" },
// // //   { key: "logout", title: "Logout", emoji: "🚪", route: "/logout" },
// // // ];

// // export default function OnePageDashboard() {
// //     const [dark, setDark] = useState(false);
// //     const Colors = dark ? DarkColors : LightColors;

// //     return (
// //         <div
// //             style={{
// //                 background: Colors.Background,
// //                 color: Colors.Text,
// //                 minHeight: "100vh",
// //                 display: "flex"
// //             }}
// //         >
// //             {/* SIDEBAR */}
// //             <aside style={{ width: 220, padding: 16 }}>
// //                 <h2 style={{ marginBottom: 20 }}>Admin</h2>
// //                 {Routes.map(r => {
// //                     const Icon = Icons[r.icon];
// //                     return (
// //                         <div key={r.name} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
// //                             <Icon size={18} color={Colors.Primary} />
// //                             {r.name}
// //                         </div>
// //                     );
// //                 })}
// //             </aside>

// //             {/* MAIN */}
// //             <main style={{ flex: 1, padding: 24 }}>
// //                 <button
// //                     onClick={() => setDark(!dark)}
// //                     style={{ marginBottom: 20 }}
// //                 >
// //                     {dark ? <Sun /> : <Moon />}
// //                 </button>

// //                 <h1>One Page Dashboard</h1>
// //                 <p>Icon + Color + Theme system ready 🚀</p>

// //                 <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
// //                     <Icons.Save color={Colors.Accent} />
// //                     <Icons.Rocket color={Colors.Primary} />
// //                     <Icons.Emoji />
// //                 </div>
// //             </main>
// //         </div>
// //     );
// // }

// // ROUTE ICON DEFAULT MAPPING
// const iconMap = {
//     Dashboard: Icons.Dashboard,
//     Workflow: Icons.Tasks,
//     Settings: Icons.Edit,
//     SmartEditor: Icons.Pencil,
//     Articles: Icons.SpellCheck,
//     Review: Icons.Eye,
//     Collaboration: Icons.Users,
//     Analytics: Icons.History,
//     MediaHub: Icons.Image,
//     ApiIntegration: Icons.Link,
//     Logout: Icons.Rocket,
//     Users: Icons.Users
// };

// // ROUTE MESSAGE DEFAULT MAPPING
// const messageMap = {
//     Dashboard: "আজকের কাজের সংক্ষিপ্ত বিবরণ এবং গুরুত্বপূর্ণ আপডেট",
//     Workflow: "কানবান বোর্ড ব্যবহার করে নিবন্ধের অগ্রগতি ট্র্যাক করুন",
//     SmartEditor: "AI-সহায়তা সহ উন্নত নিবন্ধ সম্পাদক",
//     Articles: "এডিটর থেকে নিবন্ধ তৈরি ও সম্পাদনা করুন",
//     Review: "নিবন্ধ পর্যালোচনা ও অনুমোদন করুন",
//     Collaboration: "টিমের সঙ্গে নিবন্ধ সহযোগিতা করুন",
//     Analytics: "এডিটরের কার্যক্রম বিশ্লেষণ করুন",
//     MediaHub: "মিডিয়া ফাইল আপলোড ও ব্যবহার করুন",
//     ApiIntegration: "API ইন্টিগ্রেশন দ্বারা এডিটর ক্ষমতা বৃদ্ধি করুন",
//     Logout: "অ্যাকাউন্ট থেকে লগ আউট করুন",
//     Users: "এডিটর এবং ব্যবহারকারীদের পরিচালনা করুন"
// };

// // ROUTE LABEL DEFAULT MAPPING
// const labelMap = {
//     Dashboard: "স্বাগতম",
//     Workflow: "নিউজ ওয়ার্কফ্লো",
//     SmartEditor: "নিবন্ধ ব্যবস্থাপনা",
//     Articles: "স্মার্ট এডিটর",
//     Review: "এডিটর রিভিউ",
//     Collaboration: "এডিটর সহযোগিতা",
//     Analytics: "এডিটর বিশ্লেষণ",
//     MediaHub: "মিডিয়া হাব",
//     ApiIntegration: "API ইন্টিগ্রেশন",
//     Logout: "লগ আউট",
//     Users: "ব্যবহারকারী পরিচালনা"
// };

// // ROUTES GENERATOR FUNCTION
// const generateRoutes = (routeNames) => {
//     const routes = {};
//     routeNames.forEach(name => {
//         routes[name] = {
//             name,
//             icon: iconMap[name] || Icons.Edit,
//             message: messageMap[name] || "",
//             label: labelMap[name] || ""
//         };
//     });
//     return routes;
// };

// // ROUTE NAMES ARRAY
// const routeNames = [
//     "Dashboard", "Workflow", "Settings", "SmartEditor", "Articles",
//     "Review", "Collaboration", "Analytics", "MediaHub", "ApiIntegration",
//     "Logout", "Users"
// ];

// // GENERATED ROUTES
// const Routes = generateRoutes(routeNames);

// console.log(Routes);





// ROUTE ICON DEFAULT MAPPING
const iconMap = {
    Dashboard: Icons.Dashboard,
    Workflow: Icons.Tasks,
    Settings: Icons.Edit,
    SmartEditor: Icons.Pencil,
    Articles: Icons.SpellCheck,
    Review: Icons.Eye,
    Collaboration: Icons.Users,
    Analytics: Icons.History,
    MediaHub: Icons.Image,
    ApiIntegration: Icons.Link,
    Logout: Icons.Rocket,
    Users: Icons.Users
};

// ROUTE MESSAGE DEFAULT MAPPING
const messageMap = {
    Dashboard: "আজকের কাজের সংক্ষিপ্ত বিবরণ এবং গুরুত্বপূর্ণ আপডেট",
    Workflow: "কানবান বোর্ড ব্যবহার করে নিবন্ধের অগ্রগতি ট্র্যাক করুন",
    SmartEditor: "AI-সহায়তা সহ উন্নত নিবন্ধ সম্পাদক",
    Articles: "এডিটর থেকে নিবন্ধ তৈরি ও সম্পাদনা করুন",
    Review: "নিবন্ধ পর্যালোচনা ও অনুমোদন করুন",
    Collaboration: "টিমের সঙ্গে নিবন্ধ সহযোগিতা করুন",
    Analytics: "এডিটরের কার্যক্রম বিশ্লেষণ করুন",
    MediaHub: "মিডিয়া ফাইল আপলোড ও ব্যবহার করুন",
    ApiIntegration: "API ইন্টিগ্রেশন দ্বারা এডিটর ক্ষমতা বৃদ্ধি করুন",
    Logout: "অ্যাকাউন্ট থেকে লগ আউট করুন",
    Users: "এডিটর এবং ব্যবহারকারীদের পরিচালনা করুন"
};

// ROUTE LABEL DEFAULT MAPPING
const labelMap = {
    Dashboard: "স্বাগতম",
    Workflow: "নিউজ ওয়ার্কফ্লো",
    Editor: "নিবন্ধ ব্যবস্থাপনা",
    Articles: "স্মার্ট এডিটর",
    Review: "এডিটর রিভিউ",
    Collaboration: "এডিটর সহযোগিতা",
    Analytics: "এডিটর বিশ্লেষণ",
    MediaHub: "মিডিয়া হাব",
    ApiIntegration: "API ইন্টিগ্রেশন",
    Logout: "লগ আউট",
    Users: "ব্যবহারকারী পরিচালনা"
};

// ROLE-BASED ROUTES
const roleRoutesMap = {
    Reporter: ["Dashboard", "Articles", "Review", "Logout"],
    Editor: ["Dashboard", "SmartEditor", "Articles", "Review", "Collaboration", "Logout"],
    Manager: ["Dashboard", "Analytics", "Collaboration", "MediaHub", "Users", "Logout"],
    Admin: ["Dashboard", "Workflow", "SmartEditor", "Articles", "Review", "Collaboration", "Analytics", "MediaHub", "ApiIntegration", "Users", "Settings", "Logout"]
};

// FUNCTION TO GENERATE ROUTES FOR A ROLE
export const generateRoleRoutes = (role) => {
    const routeNames = roleRoutesMap[role] || [];
    const routes = [];
    routeNames.forEach(name => {
        routes.push({
            name,
            icon: iconMap[name] || Icons.Edit,
            message: messageMap[name] || "",
            label: labelMap[name] || ""
        })
    });
    return routes;
};

















