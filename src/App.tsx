import React, {FunctionComponent, ReactElement} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "components/Naviagation/constants/constants";
import {RouteItem} from "components/Naviagation/types/types";
import './App.scss';

const DefaultComponent: FunctionComponent = (): ReactElement => (
    <div>{`No Component Defined.`}</div>
);

function App() {
  return (
      <>
          <Router>
                  <Switch>
                      {ROUTES.map((route: RouteItem) => (
                          route.subRoutes ? route.subRoutes.map((item: RouteItem) => (
                                  <Route
                                      key={`${item.key}`}
                                      path={`${item.path}`}
                                      component={item.component || DefaultComponent}
                                  />
                              )) :
                              <Route
                                  key={`${route.key}`}
                                  path={`${route.path}`}
                                  component={route.component || DefaultComponent}
                              />
                      ))}
                  </Switch>
              </Router>
      </>
  );
}

export default App;
