import Signin from "./Authentication/Signin";
import Register from "./Authentication/Register";
import { ContextFocusBox } from "./../context/FocusBoxContext";

export default function AuthButtons({ buttonName = [] }) {
  const { setFocusBox } = ContextFocusBox();

  return (
    <div className="flex items-center space-x-4">
      {buttonName.map((v, i) => (
        <button
          key={v}
          onClick={() => setFocusBox([<Signin />, <Register />][i])}
          className="hover:text-gray-300 transition-colors hidden md:inline-block"
        >
          {v}
        </button>
      ))
      }
    </div >
  );
}
