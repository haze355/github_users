import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const PrivateRoute = ({ children, ...props }) => {
  const { isAuthenticated, user } = useAuth0();
  const authenticatedUser = isAuthenticated && user;
  return (
    <Route
      {...props}
      render={() => {return authenticatedUser ? children : <Redirect to='/login'></Redirect>;}}
    ></Route>
  );
};
export default PrivateRoute;
