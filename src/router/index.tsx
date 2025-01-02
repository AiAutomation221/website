import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

// Lazy load the Home component
const Home = lazy(() => import("../pages/Home"));

const Router = () => {
  return (
    <>
      <Styles />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((routeItem) => {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={Home}
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