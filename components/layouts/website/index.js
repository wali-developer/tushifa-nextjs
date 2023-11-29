import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const WebsiteLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
