import React from "react";

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>This IS THE ABOUT LAYOUT</h1>
      {children}
    </div>
  );
}

export default AboutLayout;
