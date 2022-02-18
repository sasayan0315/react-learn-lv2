import { useState, useCallback } from "react";
import { ChildComponent } from "./ChildComponent";
import { CssModule } from "./components/CssModule";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponent } from "./components/StyledComponent";
import "./styles.css";

export default function App() {
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
      <InlineStyle />
      <CssModule />
      <StyledJsx />
      <StyledComponent />
    </>
  );
}
