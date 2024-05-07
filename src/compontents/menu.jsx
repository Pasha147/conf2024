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
      <div className={cl.m_burg}>
        <div onClick={() => setBurMenu((prev) => !prev)}>
          <div></div>
          <div></div>
          <div></div>
         
        </div>
      </div>
      <ul>
        {links.map((link, num) => {
          return (
            <li
              key={`nav${num}`}
              id={`nav${num}`}
              href="/"
              className={cl.navLink}
              onClick={() => handleClick(num)}
            >
              <span className={cl.liNum}>{`${num + 1}`}</span>
              <span
                className={burMenu ? cl.liNameOn : cl.liNameOff}
              >{`${link.name}`}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
