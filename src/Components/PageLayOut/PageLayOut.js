import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default PageLayout
