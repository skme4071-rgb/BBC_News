import { useEffect } from "react";


import useFetch from "./../../hooks/useFetch";
import { CustomNotification } from "./../utlis/tag";
import { useAuth } from "./../../context/AuthContext";
import { ContextFocusBox } from "./../../context/FocusBoxContext";
import Signin from "./Signin";
export default function Logout() {
    const { setFocusBox } = ContextFocusBox()
    const { logout } = useAuth();


    const { data, refetch, error, loading } = useFetch(
        "http://localhost:3000/Auth/user/logout", { auto: false }
    );

    const ClickHandle = (e) => {
        e.preventDefault();
        refetch();
    };

    useEffect(() => {
        if (data?.success && !data?.isLogin) {
            logout();
            setFocusBox(<Signin />)
        }
    }, [data]);

    return (
        <div className="border-t border-gray-100 py-2">
            {error && <CustomNotification>Logout failed. Please try again.</CustomNotification>}

            <button
                disabled={loading}
                onClick={ClickHandle}
                className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 text-red-600 transition-colors w-full text-left"
            >
                <span className="text-lg">🚪</span>
                <span>{loading ? "Signing out..." : "Sign out"}</span>
            </button>
        </div>
    );
}
