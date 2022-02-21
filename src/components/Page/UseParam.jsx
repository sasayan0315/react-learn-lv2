import { useLocation, useParams } from "react-router-dom";

export const UseParam = () => {
  const { id, name } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <>
      <p>param1={id}</p>
      <p>param2={name}</p>
      <p>queryparam-address={query.get("address")}</p>
    </>
  );
};
