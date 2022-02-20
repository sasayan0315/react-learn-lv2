import { Home } from "./Router/Home";
import { Page1 } from "./Router/Page1";
import { Page2 } from "./Router/Page2";

export const Router = () => {
  return (
    <>
      <h1> Router Text </h1>
      <Home />
      <Page1 />
      <Page2 />
    </>
  );
};
