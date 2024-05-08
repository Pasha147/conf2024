import cl from "./main.module.css";
import { links } from "../appdata";

export default function Main() {
  const item = links.map((link, n) => {
    if (link.cont) {
      return link.cont;
    } else {
      return <h2>{`${n + 1} ${link.name}`}</h2>;
    }
  });

  return (
    <div className="container">
      <main className={cl.main}>
        {links.map((link, n) => {
          return (
            <article className={cl.article} key={`artKey${n}`} id={`artId${n}`}>
              {item[n]}
            </article>
          );
        })}
      </main>
    </div>
  );
}
