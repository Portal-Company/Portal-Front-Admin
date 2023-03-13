import { Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from '../views/dashboard/auth/services';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} element={getCurrentUser() ? <Component /> : <Navigate to="/auth/sign-in" replace />} />
  );
};

export default PrivateRoute;