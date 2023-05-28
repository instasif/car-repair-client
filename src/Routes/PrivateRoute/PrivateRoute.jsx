import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>Loading.....</p>
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
