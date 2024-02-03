import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Search />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
