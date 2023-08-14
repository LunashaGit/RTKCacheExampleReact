import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateInputTextCache } from "@/components/InputText/inputTextSlice";
import { InputText } from "@/components/InputText";
import { useCallback, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IInputTextCache } from "@/types/IInputTextCache";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const InputTextCache = useSelector(
    (state: IInputTextCache) => state.inputText.inputTextCache
  );

  const [inputText, setInputText] = useState<string>(InputTextCache);

  const isInputEmpty = useMemo(() => {
    return inputText.length === 0 ? true : false;
  }, [inputText]);

  const handleChangeInputText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    [dispatch]
  );

  const handleNavigate = useCallback(() => {
    try {
      dispatch({
        type: "NAVIGATE",
        payload: `/cards/${inputText}`,
      });
      navigate(`/cards/${inputText}`);
    } catch (e) {
      dispatch({
        type: "NAVIGATE",
        payload: "/",
      });
    }
  }, [inputText, dispatch, navigate]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(updateInputTextCache(inputText));
    }, 300);
    return () => clearTimeout(timeout);
  }, [inputText, dispatch]);

  return (
    <>
      <InputText value={inputText} onChange={handleChangeInputText} />
      <button onClick={handleNavigate} disabled={isInputEmpty}>
        Go to the card !
      </button>
      <h3>{isInputEmpty ? "Please enter a card name" : null}</h3>
    </>
  );
}

export default App;
