import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <p>Nav</p> */}
      {children}
      <p>Footer</p>
    </div>
  );
};

export default Layout;
