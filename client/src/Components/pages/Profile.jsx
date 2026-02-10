import { useState } from "react";

// Data
const profileData = {
    name: "Alexandra Chen",
    title: "Senior Product Designer",
    email: "alex.chen@example.com",
    location: "San Francisco, CA",
    bio: `Passionate product designer with 8+ years of experience crafting intuitive digital experiences. 
I specialize in design systems, user research, and bringing creative visions to life. 
When I'm not designing, you'll find me exploring new coffee shops or hiking local trails.`,
    skills: [
        "UI/UX Design",
        "Figma",
        "Prototyping",
        "Design Systems",
        "User Research",
    ],
    stats: [
        { label: "Projects", value: 142, color: "primary" },
        { label: "Followers", value: "2.4k", color: "secondary" },
        { label: "Following", value: 89, color: "primary" },
        { label: "Rating", value: 4.9, color: "secondary" },
    ],
};

// Color Map
const colorMap = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)",
};

export default function Profile() {
    const [profile, setProfile] = useState(profileData);
    { setProfile }
    return (
        <div
            className="h-full overflow-auto"
            style={{
                "--bg-color": "#1a1a2e",
                "--surface-color": "#16213e",
                "--text-color": "#eaeaea",
                "--primary-color": "#e94560",
                "--secondary-color": "#533483",
            }}
        >
            <div className="min-h-full p-6 md:p-10">
                {/* Profile Header */}
                <ProfileHeader profile={profile} />

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                    {profile.stats.map((stat, i) => (
                        <StatsCard key={i} stat={stat} />
                    ))}
                </div>

                {/* About Section */}
                <AboutSection bio={profile.bio} skills={profile.skills} />
            </div>
        </div>
    );
}

// ------------------ ProfileHeader ------------------
function ProfileHeader({ profile }) {
    return (
        <div
            className="rounded-3xl p-8 md:p-10 mb-6"
            style={{ background: "var(--surface-color)" }}
        >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="relative">
                    <div className="avatar-ring p-1 rounded-full pulse-ring relative">
                        <div
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-5xl md:text-6xl"
                            style={{ background: "var(--bg-color)" }}
                        >
                            👤
                        </div>
                    </div>
                    <div
                        className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                        style={{ background: "var(--primary-color)" }}
                    >
                        ✓
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                    <h1
                        className="text-3xl md:text-4xl font-bold mb-2"
                        style={{ color: "var(--text-color)" }}
                    >
                        {profile.name}
                    </h1>
                    <p
                        className="text-lg mb-4 opacity-80"
                        style={{ color: "var(--text-color)" }}
                    >
                        {profile.title}
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                        <InfoIcon
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            }
                            text={profile.email}
                        />
                        <InfoIcon
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            }
                            text={profile.location}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <button
                            className="action-btn px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                            style={{ background: "var(--primary-color)", color: "white" }}
                        >
                            ✏️ Edit Profile
                        </button>
                        <button
                            className="action-btn px-6 py-3 rounded-xl font-semibold flex items-center gap-2 border-2"
                            style={{
                                borderColor: "var(--secondary-color)",
                                color: "var(--text-color)",
                                background: "transparent",
                            }}
                        >
                            ⚙️ Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ------------------ StatsCard ------------------
function StatsCard({ stat }) {
    return (
        <div
            className="stat-card rounded-2xl p-5 text-center"
            style={{
                background:
                    stat.color === "primary"
                        ? "rgba(233, 69, 96, 0.15)"
                        : "rgba(83, 52, 131, 0.15)",
                border:
                    stat.color === "primary"
                        ? "1px solid rgba(233, 69, 96, 0.3)"
                        : "1px solid rgba(83, 52, 131, 0.3)",
                color: colorMap[stat.color],
            }}
        >
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div
                className="text-sm opacity-70"
                style={{ color: "var(--text-color)" }}
            >
                {stat.label}
            </div>
        </div>
    );
}

// ------------------ AboutSection ------------------
function AboutSection({ bio, skills }) {
    return (
        <div
            className="rounded-3xl p-8"
            style={{ background: "var(--surface-color)" }}
        >
            <h2
                className="text-xl font-bold mb-4 flex items-center gap-3"
                style={{ color: "var(--text-color)" }}
            >
                <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--primary-color)" }}
                >
                    📝
                </span>{" "}
                About Me
            </h2>
            <p
                className="leading-relaxed opacity-80"
                style={{ color: "var(--text-color)" }}
            >
                {bio}
            </p>
            <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(234, 234, 234, 0.1)" }}
            >
                <h3
                    className="text-sm font-semibold mb-3 opacity-60"
                    style={{ color: "var(--text-color)" }}
                >
                    SKILLS
                </h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{
                                background:
                                    i % 2 === 0
                                        ? "rgba(233, 69, 96, 0.2)"
                                        : "rgba(83, 52, 131, 0.2)",
                                color: i % 2 === 0 ? "var(--primary-color)" : "#a78bfa",
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ------------------ InfoIcon ------------------
function InfoIcon({ icon, text }) {
    return (
        <div
            className="flex items-center gap-2 opacity-70"
            style={{ color: "var(--text-color)" }}
        >
            {icon} <span>{text}</span>
        </div>
    );
}
