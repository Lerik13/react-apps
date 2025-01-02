import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something wend wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
