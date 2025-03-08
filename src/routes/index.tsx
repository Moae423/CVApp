import { RouteObject } from "react-router-dom";
import MainLayouts from "@/layouts/MainLayouts";
import Homepage from "@/pages/HomePage";
import Resume from "@/pages/Resume";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "Resume",
        element: <Resume />,
      },
    ],
  },
];

export default routes;
