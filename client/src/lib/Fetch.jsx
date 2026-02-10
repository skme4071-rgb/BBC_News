
// // localStorage.setItem("user", JSON.stringify(data));
// //           localStorage.setItem("token", data.token);

// //   useEffect(() => {
// //     const savedUser = localStorage.getItem("user");
// //     if (savedUser) {
// //         dispatch({
// //             type: "LOGIN_SUCCESS",
// //             payload: JSON.parse(savedUser)
// //         });
// //     }
// // }, []);



// //  localStorage.removeItem("user");
// //     localStorage.removeItem("token");


// import { createContext, useContext, useEffect, useReducer } from "react";

// const AuthContext = createContext(null);

// const initialState = {
//     user: null,
//     isLogin: false,
//     loading: false,
//     error: null
// };

// function authReducer(state, action) {
//     switch (action.type) {
//         case "LOGIN_START":
//             return { ...state, loading: true, error: null };

//         case "LOGIN_SUCCESS":
//             return {
//                 user: action.payload,
//                 isLogin: true,
//                 loading: false,
//                 error: null
//             };

//         case "LOGIN_ERROR":
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload
//             };

//         case "LOGOUT":
//             return initialState;

//         default:
//             return state;
//     }
// }

// export function AuthProvider({ children }) {
//     const [state, dispatch] = useReducer(authReducer, initialState);

//     // 🔄 Auto login (page reload)
//     useEffect(() => {
//         const savedUser = localStorage.getItem("user");
//         if (savedUser) {
//             dispatch({
//                 type: "LOGIN_SUCCESS",
//                 payload: JSON.parse(savedUser)
//             });
//         }
//     }, []);

//     // 🔐 Login function
//     const login = async (url, credentials) => {
//         dispatch({ type: "LOGIN_START" });

//         try {
//             const res = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(credentials)
//             });

//             const data = await res.json();

//             if (!res.ok) throw new Error(data.message || "Login failed");

//             localStorage.setItem("user", JSON.stringify(data));
//             localStorage.setItem("token", data.token);

//             dispatch({
//                 type: "LOGIN_SUCCESS",
//                 payload: data
//             });

//         } catch (err) {
//             dispatch({
//                 type: "LOGIN_ERROR",
//                 payload: err.message
//             });
//         }
//     };

//     // 🚪 Logout
//     const logout = () => {
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//         dispatch({ type: "LOGOUT" });
//     };

//     return (
//         <AuthContext.Provider value={{ ...state, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContext);
// }
import { useState, useEffect, useCallback, useRef } from "react";

export default function useFetch(
  url,
  {
    method = "GET",
    body = null,
    headers = {},
    limit = 10,
    cursor = null,
    page = null,
    search = "",
    auto = true,
    id = null,
  } = {}
) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const hasFetched = useRef(false); // StrictMode safe

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Build query parameters only for GET requests
      const params = new URLSearchParams();
      if (method === "GET") {
        if (cursor) params.append("cursor", cursor);
        if (page) params.append("page", page);
        if (limit) params.append("limit", limit);
        if (search) params.append("search", search);
        if (id) params.append("id", id);
      }

      // Build fetch options
      const options = {
        method,
        headers: { ...headers },
      };

      if (token) options.headers["token"] = token;

      if (method !== "GET" && body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
      }

      // Fetch URL
      const finalUrl = method === "GET" ? `${url}?${params.toString()}` : url;
      const res = await fetch(finalUrl, options);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Fetch failed: ${res.status} ${res.statusText} - ${errorText}`);
      }

      const result = await res.json();
      setData(result.data ?? result);
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [url, method, body, headers, limit, cursor, page, search, id, token]);

  // Auto-fetch on mount or when dependencies change
  useEffect(() => {
    if (auto && !hasFetched.current) {
      fetchData();
      hasFetched.current = true;
    }
  }, [auto, fetchData]);

  // Auto-fetch when pagination/search params change (optional)
  useEffect(() => {
    if (auto && hasFetched.current) {
      fetchData();
    }
  }, [page, cursor, search, fetchData, auto]);

  return { data, loading, error, refetch: fetchData };
}
