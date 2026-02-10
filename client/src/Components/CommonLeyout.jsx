import { useEffect, useRef } from "react"
export default function CommonLeyout({ children, pagesName, pagesTitle }) {

  const formRef = useRef(null);


  useEffect(() => {

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start", // start | center | end
    });
  });
  return (
    <>
      <div ref={formRef} className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 gradient-text">
          {pagesName}
        </h1>
        <p className="text-gray-600 text-lg">{pagesTitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{children}</div>
    </>
  );
}
