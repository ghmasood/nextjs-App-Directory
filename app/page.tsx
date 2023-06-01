import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Traversy Media</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
