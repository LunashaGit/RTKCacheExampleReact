import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const CardPage = (): JSX.Element => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    dispatch({
      type: "NAVIGATE",
      payload: "/",
    });
    navigate("/");
  }, [dispatch]);

  return (
    <>
      <p>{param.cardId}</p>
      <button onClick={handleBack}>Back</button>
    </>
  );
};
