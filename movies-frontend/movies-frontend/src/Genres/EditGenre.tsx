import { useParams } from "react-router-dom";
import { ValidateParamsId } from "../Routes/validateParams";
import RedirectToLandingPage from "../utils/RedirectToLandingPage";

const EditGenre = () => {
  const { id }: any = useParams();

  if (!ValidateParamsId(id)) {
    return <RedirectToLandingPage />;
  }
  return (
    <>
      <h3>Edit Genre : the id is {id}</h3>
    </>
  );
};

export default EditGenre;
