import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  const [auth] = useState(false);
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
