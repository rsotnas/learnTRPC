import React from "react";
import Header from "../../components/Header";

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />

      {children}
    </div>
  );
};
