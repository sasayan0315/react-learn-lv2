import { Link, BrowserRouter } from "react-router-dom";
import { MyRouter } from "./components/Router/MyRouter";
import "./styles.css";

export default function App() {
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
        <MyRouter />
      </BrowserRouter>
    </>
  );
}
