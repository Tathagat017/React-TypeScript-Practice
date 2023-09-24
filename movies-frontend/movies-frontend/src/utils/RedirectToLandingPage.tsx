import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RedirectToLandingPage = () => {
  const [time, setTime] = useState<number>(5);

  useEffect(() => {
    var timeout = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  if (time === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <h3>Page not found 404 </h3>
      <p>Returning to main page in : {time}</p>
    </>
  );
};

export default RedirectToLandingPage;
