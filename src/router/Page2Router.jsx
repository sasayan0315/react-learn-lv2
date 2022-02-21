import { Page2 } from "../components/Page/Page2";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id/:name",
    exact: false,
    children: <Page2 />
  }
];
