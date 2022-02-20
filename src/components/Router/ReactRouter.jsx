import { Switch, Route, Link } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { ReactCss } from "../Css/ReactCss";
import { CallBack } from "../Callback/CallBack";

export const ReactRouter = () => {
  return (
    <>
      <Home />

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
          <CallBack />
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
    </>
  );
};
