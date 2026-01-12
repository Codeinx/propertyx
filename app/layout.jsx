import "@/assets/styles/globals.css";
import React from "react";

export const metadata = {
  title: "PropertyX",
  keywords: "property, listing, platform",
  description: "PropertyX is a property listing platform",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;