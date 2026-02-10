import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "./Form";
import useFetch from "./../../hooks/useFetch";
import {
  CustomLink,
  CustomError,
  Input,
  CustomNotification,
} from "./../utlis/tag";
import { registerSchema } from "./validation";
import { ContextFocusBox } from "./../../context/FocusBoxContext";
import Signin from "./Signin";

export default function Register() {
  const { setFocusBox } = ContextFocusBox();
  const [resError, setResError] = useState({});
  const [oneError, setOneError] = useState({ errorName: null, errorMgs: null });

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { data, error, loading, refetch } = useFetch(
    "http://localhost:3000/Auth/user/register",
    {}
  );

  const onSubmit = async (formData) => {
    setResError({});
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      agree: formData.agree || false,
    };

    await refetch({ method: "POST", body: payload });
  };

  // Handle server response
  useEffect(() => {
    if (data?.success) {
      setFocusBox(<Signin />);
    } else if (data?.errors) {
      setResError(data.errors);
    }
  }, [data, setFocusBox]);

  // Map first available error (Zod + server) to oneError
  useEffect(() => {
    const fields = ["firstName", "lastName", "email", "password", "agree"];
    for (const field of fields) {
      const msg = resError?.[field]?.msg || errors?.[field]?.message;
      if (msg) {
        setOneError({ errorName: field, errorMgs: msg });
        return; // first error only
      }
    }
    setOneError({ errorName: null, errorMgs: null }); // reset if no error
  }, [resError, errors]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} formName="Register">
      {error && <CustomNotification message={error.message} />}

      {/* Name Fields */}
      <div className="flex gap-3">
        <Input {...formRegister("firstName")} placeholder="First Name" autoComplete="given-name" />
        <Input {...formRegister("lastName")} placeholder="Last Name" autoComplete="family-name" />
      </div>
      {(oneError.errorName === "firstName" || oneError.errorName === "lastName") && (
        <CustomError>{oneError.errorMgs}</CustomError>
      )}

      {/* Email */}
      <Input {...formRegister("email")} type="email" placeholder="Email" autoComplete="username" />
      {oneError.errorName === "email" && <CustomError>{oneError.errorMgs}</CustomError>}

      {/* Password */}
      <Input
        {...formRegister("password")}
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />
      {oneError.errorName === "password" && <CustomError>{oneError.errorMgs}</CustomError>}

      {/* Agree Checkbox */}
      <label className="flex items-center gap-3 text-sm mt-4">
        <input type="checkbox" {...formRegister("agree")} autoComplete="off" />
        <span>
          I agree to the
          <CustomLink to="/TermsOfService" className="underline mx-1 text-blue-600">
            Terms of Service
          </CustomLink>
          and
          <CustomLink to="/PrivacyPolicy" className="underline mx-1 text-blue-600">
            Privacy
          </CustomLink>
        </span>
      </label>
      {oneError.errorName === "agree" && <CustomError>{oneError.errorMgs}</CustomError>}

      {/* Submit Button */}
      <button
        disabled={loading || isSubmitting}
        className="bg-blue-600 text-white py-2 rounded w-full mt-4 hover:bg-blue-700"
      >
        {loading ? "Processing..." : "SIGN UP"}
      </button>
    </Form>
  );
}





