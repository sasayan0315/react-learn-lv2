import { BrowserRouter, Link, Switch, Route, Router } from "react-router-dom";
import { ReactRouter } from "./components/Router/ReactRouter";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ReactRouter />
      </BrowserRouter>
    </>
  );
}
