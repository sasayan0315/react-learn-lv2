import { Link } from "react-router-dom";
import { UseParam } from "./UseParam";
export const Page2 = () => {
  return (
    <>
      <h1> Page2 </h1>
      <Link to="/page2/100/test"> URL PARAM LINK </Link>
      <UseParam />
    </>
  );
};
