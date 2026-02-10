import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "./Form";
import useFetch from "../../hooks/useFetch";
import { CustomError, Input, CustomLink, CustomNotification } from "../utlis/tag";
import { signinSchema } from "./validation";
import { ContextFocusBox } from "../../context/FocusBoxContext";
import { UseAuth } from "../../context/AuthContext";

export default function Signin() {
  const { closeFocusBox } = ContextFocusBox();
  const [resError, setResError] = useState({});
  const { AuthDataFun } = UseAuth({});

  const {
    register: formSignin,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const { data, error, loading, refetch } = useFetch(
    "http://localhost:3000/User/forgot", { auto: false }
  );

  // 🔹 Submit handler
  const onSubmit = (formData) => {
    const payload = {
      email: formData.email,
    };

    setResError({}); // clear previous backend errors
    refetch({ method: "POST", body: payload });
  };
  // 🔹 Update errors from backend
  useEffect(() => {
    if (data?.success) {
      closeFocusBox();
      AuthDataFun({
        user: data.user,
        isLogin: data.isLogin,
        token: data.token
      });
    } else if (data?.errors && Object.keys(data.errors).length > 0) {
      setResError(data.errors); // express-validator mappedError is object
    }
  }, [data, closeFocusBox]);

  // 🔹 Helper to get error message (frontend or backend)
  const getErrorMsg = (field) =>
    resError?.[field]?.msg || errors?.[field]?.message;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} formName="Signin">
      {error && (
        <CustomNotification message="login failed! Please try again." />
      )}

      {/* Email */}
      <Input {...formSignin("email")} type="email" placeholder="Email" />
      {getErrorMsg("email") && <CustomError text={getErrorMsg("email")} />}

      


      {/* Submit Button */}
      <button
        disabled={loading || isSubmitting}
        className="bg-blue-600 text-white py-2 rounded w-full mt-4 hover:bg-blue-700"
      >
        {loading ? "Processing..." : "FORGOT PASSWORD"}
      </button>
    </Form>
  );
}