import cl from "./menu.module.css";
import { links } from "../appdata";
import { useState } from "react";

export default function Menu() {
  const [burMenu, setBurMenu] = useState(false);
  const handleClick = (num) => {
    // console.log(num);
    const square = document.getElementById(`artId${num}`);
    square.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={cl.nav}>
      <div
        className={
          burMenu ? [cl.m_burger, cl.m_burgerOff].join(" ") : cl.m_burger
        }
        onClick={() => setBurMenu((prev) => !prev)}
      >
        <span></span>
      </div>
      {links.map((link, num) => {
        return (
          <div
            key={`nav${num}`}
            id={`nav${num}`}
            href="/"
            className={cl.navLink}
            onClick={() => handleClick(num)}
          >{`${num + 1} ${link.name}`}</div>
        );
      })}
    </nav>
  );
}
