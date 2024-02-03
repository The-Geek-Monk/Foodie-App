import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { Card } from "./Components/Card/Card";
import { Footer } from "./Components/Footer/Footer";
import { About } from "./Components/About/About";

import "./App.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Search />
      <Card />
      <Footer /> */}
      <About />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
