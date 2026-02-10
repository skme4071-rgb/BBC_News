import logo from "./../assets/images/logo.svg";

export default function Logo() {
  return (
    <div className="flex h-15 justify-center w-40 items-center overflow-hidden">
      <img
        className="bg-red  h-13 w-auto transform  scale-320"
        src={logo}
        alt="Logo"
      />
    </div>
  );
}
