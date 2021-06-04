import React from 'react';
import Seats from "./seats/Seats";
import {Route, Switch} from "react-router-dom";

const conf = [
  {
    id: 0,
    path: '/',
    component: Seats,
    exact: true,
  }
]

const App = () => {
  return (
    <div>
      <Switch>
        {conf.map(conf => {
          return (
            <Route
              key={conf.id}
              path={conf.path}
              component={conf.component}
              exact={conf.exact}
            />
          )
        })}
      </Switch>
    </div>
  )
}
export default App;