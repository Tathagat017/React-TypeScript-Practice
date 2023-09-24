import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";
const CreateGenre = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>
      <Button
        onClick={() => {
          console.log("saved");
          navigate("/genres");
        }}
      >
        Save Genre
      </Button>
    </>
  );
};

export default CreateGenre;
