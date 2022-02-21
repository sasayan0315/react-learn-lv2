import { useLocation } from "react-router-dom";

export const Page1Detail1 = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <h1> Page1 Detail1 </h1>
      {location.state.map((val) => {
        return <p>{val}</p>;
      })}
    </>
  );
};
