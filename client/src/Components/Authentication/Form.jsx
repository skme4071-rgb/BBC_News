import { useState } from "react";
import Signin from "./Signin";
import Register from "./Register";
import { ContextFocusBox } from "./../../context/FocusBoxContext";

export default function SigninPage({ children, formName, ...rest }) {
  const { closeFocusBox, setFocusBox } = ContextFocusBox();
  const [formType, setFormType] = useState(formName);

  const handleSwitchForm = () => {
    if (formType === "Signin") {
      setFocusBox(<Register />);
      setFormType("Register");
    } else {
      setFocusBox(<Signin />);
      setFormType("Signin");
    }
  };

  return (
    <div className=" flex overflow-y-auto  h-[100vh] justify-center gap-1 items-center   flex-col px-8">

      {/* Close Button */}
      <button
        onClick={closeFocusBox}
        className="absolute top-4 right-4 text-red-900 hover:text-gray-800 text-xl font-bold"
      >
        ✕
      </button>

      {/* Form Content */}
      <div className="flex flex-col  gap-4  text-center">
        <h2 className="text-2xl font-bold ">{formType}</h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 ">
          <img
            className="w-7 h-7 cursor-pointer"
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook"
          />
          <img
            className="w-7 h-7 cursor-pointer"
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
          />
          <img
            className="w-7 h-7 cursor-pointer"
            src="https://img.icons8.com/color/48/000000/twitter.png"
            alt="Twitter"
          />
        </div>

        <p className="text-sm text-gray-500 capitalize ">
          or {formType} using email
        </p>

        {/* Form */}
        <form {...rest} className="w-full flex flex-col w-[100vh] gap-3">
          {children}
        </form>

        {/* Footer */}
        <div className="form-footer  text-sm text-gray-700">
          <span>
            {formType === "Signin"
              ? "Don't have an account? "
              : "Already have an account? "}
          </span>
          <span
            onClick={handleSwitchForm}
            className="text-blue-600 font-bold cursor-pointer hover:underline ml-1"
          >
            {formType === "Signin" ? "Register" : "Signin"}
          </span>
        </div>
      </div>
    </div>
  );
}
