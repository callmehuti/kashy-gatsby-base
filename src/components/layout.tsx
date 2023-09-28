import React, { FC } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

// The following function creates the navbar
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
