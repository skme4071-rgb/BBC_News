import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useFetch } from "../../hooks/CommonHooks";
import { CustomLoading } from "./../../utilities/Element";

export default function IsLoginCheck({ children }) {
    const { isLogin } = useAuth();
    const [loading, setLoading] = useState(true); // ✅ FIXED

    const { refetch } = useFetch(
        "http://localhost:3000/Auth/User/isLogin"
    );

    const called = useRef(false);

    useEffect(() => {
        if (called.current) return;
        called.current = true;

        const checkLogin = async () => {
            try {
                const user = await refetch();
                if (user?.loggedIn) {
                    isLogin(user);
                }
            } catch (err) {
                console.error("Guest user", err);
            } finally {
                setLoading(false);
            }
        };

        checkLogin();
    }, []);

    return (
        <>
            {loading ? (
                <CustomLoading text="Login check">
                    welcom Home bbs news
                </CustomLoading>
            ) : (
                children
            )}
        </>
    );
}
