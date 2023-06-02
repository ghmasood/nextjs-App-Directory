import Link from "next/link";
import React from "react";
import Courses from "./components/Courses";

function HomePage() {
  return (
    <>
      <h1>Welcome to Traversy Media</h1>
      {/* @ts-expect-error Server Component */}
      <Courses />
    </>
  );
}

export default HomePage;
