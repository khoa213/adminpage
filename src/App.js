import React, { useState } from "react";
import Home from "containers/Home";
import About from "containers/Users";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import { Dashboard } from "containers/Dashboard";
import { Product } from "containers/Product";
import { AntLayout, PrimaryLayout } from "components/Layout";
import { useRoutes } from "react-router-dom";
function App() {
  let element = useRoutes([
    { path: "login", element: <Login /> },
    { path: "", element: <PrimaryLayout><Home /></PrimaryLayout> },
    { path: "users", element: <PrimaryLayout><About /></PrimaryLayout> },
    { path: "dashboard", element: <PrimaryLayout><Dashboard /></PrimaryLayout> },
    { path: "product", element: <PrimaryLayout><Product /></PrimaryLayout>},
    { path: "*", element: <NotFoundPage /> },
  ]);

  return element;
}
export default App;
