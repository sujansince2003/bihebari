import React from "react";
import Footer from "../Components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <p>Nav</p> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
