import { Page1 } from "../components/Page/Page1/Page1";
import { Page1Detail1 } from "../components/Page/Page1/Page1Detail1";
import { Page1Detail2 } from "../components/Page/Page1/Page1Detail2";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detail1",
    exact: false,
    children: <Page1Detail1 />
  },
  {
    path: "/detail2",
    exact: false,
    children: <Page1Detail2 />
  }
];
