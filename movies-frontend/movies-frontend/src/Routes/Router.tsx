import { Route, Routes } from "react-router-dom";

const Router = (props: RouterProps) => {
  return (
    <Routes>
      {props.routes?.map((el, index) => (
        <Route key={index} path={el.path} element={<el.component />}></Route>
      ))}
    </Routes>
  );
};

export default Router;

interface RouteLink {
  path: string;
  component: React.ComponentType<any>;
}

interface RouterProps {
  routes: RouteLink[];
}
