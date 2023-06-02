import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href={"/"}>Traversy Media</Link>
        </div>
        <div className="links">
          <Link href={"/about"}>About</Link>
          <Link href={"/about/team"}>Our Team</Link>
          <Link href={"/code/repos"}>Code</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
