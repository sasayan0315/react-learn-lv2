import { Link } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <>
      <h1> Page1 </h1>
      <Link to={{ pathname: "/page1/detail1/", state: arr }}>Detail 1</Link>
      <Link to="/page1/detail2/">Detail 2</Link>
    </>
  );
};
