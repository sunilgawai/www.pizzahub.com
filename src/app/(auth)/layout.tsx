import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="flex min-h-full flex-col items-center justify-between pt-16 ">
      {children}
    </div>
  );
};

export default layout;
