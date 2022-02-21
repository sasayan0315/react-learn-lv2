import { Link } from "react-router-dom";
export const Page1 = () => {
  return (
    <>
      <h1> Page1 </h1>
      <Link to="/page1/detail1/">Detail 1</Link>
      <Link to="/page1/detail2/">Detail 2</Link>
    </>
  );
};
