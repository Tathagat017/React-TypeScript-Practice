import { Navigate } from "react-router-dom";

const RedirectToLandingPage = () => {
  return (
    <>
      <Navigate to={"/"} />
    </>
  );
};

export default RedirectToLandingPage;
