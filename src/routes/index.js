import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Account from "../pages/Account";
import { HeaderOnly } from "../components/Layout";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs, layout: null },
  { path: "/account", component: Account, layout: HeaderOnly },
];

export const privateRoutes = [];
