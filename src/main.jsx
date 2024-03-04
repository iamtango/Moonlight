import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Shimmer from "./components/Shimmer.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Shimmer /> */}
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
