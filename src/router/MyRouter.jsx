import { Switch, Route } from "react-router-dom";

import { Home } from "../components/Page/Home";
import { ReactCss } from "../components/Css/ReactCss";
import { CallBack } from "../components/Callback/CallBack";
import { page1Routes } from "./Page1Router";
import { page2Routes } from "./Page2Router";

export const MyRouter = () => {
  return (
    <>
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
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {page1Routes.map((route) => {
                console.log(`${url}${route.path}`);
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                );
              })}
            </Switch>
          )}
        ></Route>
        <Route
          path="/page2"
          render={({ match: { url } }) => (
            <Switch>
              {page2Routes.map((route) => {
                console.log(`${url}${route.path}`);
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                );
              })}
            </Switch>
          )}
        ></Route>
      </Switch>
    </>
  );
};
