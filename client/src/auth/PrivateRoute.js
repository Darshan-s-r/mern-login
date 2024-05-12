import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { isAuth } from './helpers';

export default function PrivateRoute({ component: Component, ...rest }) {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      element={isAuth() ? <Component /> : <Navigate to="/signin" />}
    />
  );
}
