import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import Menu01 from "./component/Menu01/Menu01";
import Menu02 from "./component/Menu02/Menu02";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Menu01 />
      <Menu02 />

      <Footer />
    </>
  );
}

export default App;
