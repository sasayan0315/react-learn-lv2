import { useParams } from "react-router-dom";

export const UseParam = () => {
  const { id, name } = useParams();
  console.log(id);
  return (
    <>
      <p>param1={id}</p>
      <p>param2={name}</p>
    </>
  );
};
