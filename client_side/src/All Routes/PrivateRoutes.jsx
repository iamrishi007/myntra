import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); 
  return token ? children : <Navigate to="/signup" replace />;
};

export default PrivateRoute;
