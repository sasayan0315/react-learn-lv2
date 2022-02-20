import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useState, useCallback } from "react";
import { ChildComponent } from "./ChildComponent";
import { ReactCss } from "./components/ReactCss";
import { Home } from "./components/Router/Home";
import { Page1 } from "./components/Router/Page1";
import { Page2 } from "./components/Router/Page2";
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
      <BrowserRouter>
        <Link to="/">home</Link>
        <br />
        <Link to="/callback">useCallBack</Link>
        <br />
        <Link to="/css">CSS</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
        <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/callback">
            <input onChange={onChangeText} value={inputText} />
            <br />
            <button onClick={onClickButton}>表示</button>
            <ChildComponent
              isVisible={isVisibleChild}
              onClickClose={onClickClose}
            />
          </Route>
          <Route path="/css">
            <ReactCss />
          </Route>

          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
