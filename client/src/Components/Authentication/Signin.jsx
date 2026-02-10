// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import Form from "./Form";
// import useFetch from "../../hooks/useFetch";
// import { CustomError, Input, CustomLink, CustomNotification } from "./../utlis/tag";
// import { signinSchema } from "./validation";
// import { ContextFocusBox } from "../../context/FocusBoxContext";
// import { useAuth } from "../../context/AuthContext";



// export default function Signin() {
//   const { closeFocusBox } = ContextFocusBox();
//   const [resError, setResError] = useState({});
//   const { login, user } = useAuth({});

//   if (user.loggedIn) { closeFocusBox() }

//   const [oneError, setOneError] = useState({
//     errorName: null,
//     errorMgs: null,
//   });
//   const {
//     register: formSignin,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(signinSchema),
//   });

//   const { data, error, loading, refetch } = useFetch(
//     `http://localhost:3000/Auth/user/login`, { auto: false }
//   );

//   // 🔹 Submit handler
//   const onSubmit = (formData) => {
//     const payload = {
//       email: formData.email,
//       password: formData.password,
//     };

//     setResError({}); // clear previous backend errors
//     refetch({ method: "POST", body: payload });
//   };
//   // 🔹 Update errors from backend
//   useEffect(() => {
//     if (data?.success) {
//       closeFocusBox();
//       login(data.user);
//       console.log(data.user);

//     } else if (data?.errors && Object.keys(data.errors).length > 0) {
//       setResError(data.errors); // express-validator mappedError is object
//     }
//   }, [data, closeFocusBox]);

//   // 🔹 Helper to get error message (frontend or backend)
//   const getErrorMsg = (field) =>
//     resError?.[field]?.msg || errors?.[field]?.message;

//   useEffect(() => {

//     if (getErrorMsg("email")) {
//       setOneError({
//         errorName: "email",
//         errorMgs: getErrorMsg("email"),
//       });
//     } else if (getErrorMsg("password")) {
//       setOneError({
//         errorName: "password",
//         errorMgs: getErrorMsg("password"),
//       });
//     }
//   }, [
//     resError,
//     getErrorMsg("email"),
//     getErrorMsg("password"),
//   ])




//   return (
//     <Form onSubmit={handleSubmit(onSubmit)} formName="Signin">
//       {error && (
//         <CustomNotification message={error.message} />
//       )}

//       {/* Email */}
//       <div className="   min-[441px]:w-[300px]">
//         <Input {...formSignin("email")} type="email" placeholder="Email" />
//         {oneError.errorName === "email" && (
//           <CustomError text={oneError.errorMgs} />
//         )}

//       </div>
//       {/* Password */}
//       <Input
//         {...formSignin("password")}
//         type="password"
//         placeholder="Password"
//       />
//       {oneError.errorName === "password" && (
//         <CustomError text={oneError.errorMgs} />
//       )}




//       <CustomLink
//         to="/forgot-password"
//         className="text-sm text-blue-500 mb-4 inline-block"
//       >
//         Forgot your password?
//       </CustomLink>



//       {/* Submit Button */}
//       <button
//         disabled={loading || isSubmitting}
//         className="bg-blue-600 text-white py-2 rounded w-full mt-4     hover:bg-blue-700"
//       >
//         {loading ? "Processing..." : "SIGN IN"}
//       </button>
//     </Form>
//   );
// }

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "./Form";
import useFetch from "../../hooks/useFetch";
import { CustomError, Input, CustomLink, CustomNotification } from "./../utlis/tag";
import { signinSchema } from "./validation";
import { ContextFocusBox } from "../../context/FocusBoxContext";
import { useAuth } from "../../context/AuthContext";

export default function Signin() {
    const { closeFocusBox } = ContextFocusBox();
    const { login, user } = useAuth();
    const [resError, setResError] = useState({});
    const [oneError, setOneError] = useState({ errorName: null, errorMgs: null });

    const {
        register: formSignin,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(signinSchema),
    });

    const { data, error, loading, refetch } = useFetch(
        `http://localhost:3000/Auth/user/login`,
        { auto: false }
    );

    // ✅ Close focus box if user is already logged in
    useEffect(() => {
        if (user.loggedIn) closeFocusBox();
    }, [user.loggedIn, closeFocusBox]);

    // 🔹 Submit handler
    const onSubmit = (formData) => {
        const payload = {
            email: formData.email,
            password: formData.password,
        };
        setResError({});
        refetch({ method: "POST", body: payload });
    };

    // 🔹 Update errors & login
    useEffect(() => {
        if (data?.success) {
            login(data.user);
            closeFocusBox();
        } else if (data?.errors) {
            setResError(data.errors);
        }
    }, [data, login, closeFocusBox]);

    // 🔹 Map first available error to oneError (frontend + backend)
    useEffect(() => {
        const fields = ["email", "password"];
        for (const field of fields) {
            const msg = resError?.[field]?.msg || errors?.[field]?.message;
            if (msg) {
                setOneError({ errorName: field, errorMgs: msg });
                return; // stop at first error
            }
        }
        setOneError({ errorName: null, errorMgs: null }); // reset if no error
    }, [resError, errors]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} formName="Signin">
            {error && <CustomNotification message={error.message} />}

            {/* Email */}
            <div className="min-[441px]:w-[300px]">
                <Input
                    {...formSignin("email")}
                    type="email"
                    placeholder="Email"
                    autoComplete="username"
                />
                {oneError.errorName === "email" && <CustomError>{oneError.errorMgs}</CustomError>}
            </div>

            {/* Password */}
            <Input
                {...formSignin("password")}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
            />
            {oneError.errorName === "password" && <CustomError>{oneError.errorMgs}</CustomError>}

            {/* Forgot password link */}
            <CustomLink
                to="/forgot-password"
                className="text-sm text-blue-500 mb-4 inline-block"
            >
                Forgot your password?
            </CustomLink>

            {/* Submit Button */}
            <button
                disabled={loading || isSubmitting}
                className="bg-blue-600 text-white py-2 rounded w-full mt-4 hover:bg-blue-700"
            >
                {loading ? "Processing..." : "SIGN IN"}
            </button>
        </Form>
    );
}
