import cl from "./menu.module.css";
// import { links } from "../appdata";
import { useState } from "react";

export default function Menu(props) {
  const [burMenu, setBurMenu] = useState(false);
  let links=props.textCont.links
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
        <div
          className={burMenu ? cl.m_burgOn : cl.m_burgOff}
          onClick={()=>setBurMenu((prev) => !prev)}
        >
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
              <div className={cl.liNum}>
                <span>{`${props.colorMenu[num].ratio}`}</span>
              </div>
              <div className={burMenu ? cl.liNameOn : cl.liNameOff}>
                <span>{`${link.name}`}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
