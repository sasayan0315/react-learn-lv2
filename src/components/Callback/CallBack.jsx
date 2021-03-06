import { useState, useCallback } from "react";
import { ChildComponent } from "./ChildComponent";

export const CallBack = () => {
  const [inputText, setInputText] = useState("bbb");
  const [isVisibleChild, setIsVisibleChild] = useState(false);

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };
  const onClickButton = (e) => {
    setIsVisibleChild(!isVisibleChild);
  };

  const onClickClose = useCallback((e) => {
    setIsVisibleChild(false);
  }, []);

  return (
    <>
      <input onChange={onChangeText} value={inputText} />
      <br />
      <button onClick={onClickButton}>表示</button>
      <ChildComponent isVisible={isVisibleChild} onClickClose={onClickClose} />
    </>
  );
};
