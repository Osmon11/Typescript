import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../components/auth";

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  ...rest
}) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
