import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/Auth";
import AppLayout from "../layouts/App";

import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={"/"} element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path={"/login"}
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path={"/register"}
            element={
              <Suspense>
                <Register />
              </Suspense>
            }
          />
          <Route
            path={"/forgot-password"}
            element={
              <Suspense>
                <ForgotPassword />
              </Suspense>
            }
          />
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
