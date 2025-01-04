import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

// Lazy load components
const Home = lazy(() => import("../pages/Home"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Demo = lazy(() => import("../pages/Demo"));

const Router = () => {
  return (
    <>
      <Styles />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((routeItem) => {
            let Component;
            switch (routeItem.component) {
              case "FAQ":
                Component = FAQ;
                break;
              case "Demo":
                Component = Demo;
                break;
              default:
                Component = Home;
            }
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={Component}
              />
            );
          })}
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

export default Router;