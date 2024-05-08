import cl from "./main.module.css";
// import { links } from "../appdata";

export default function Main(props) {

  let articles=props.textCont.articles
  // const articles = links.map((link, n) => {
  //   if (link.cont) {
  //     if (props.lang==='Ukr') {
  //       return link.cont;
  //     }else{
  //       return link.contEn;
        
  //     }
      
  //   } else {
  //     if (props.lang==='Ukr') {
  //       return <h2>{`${n + 1} ${link.name}`}</h2>;
  //     }else{
  //       return <h2>{`${n + 1} ${link.nameEn}`}</h2>;
        
  //     }
      
  //   }
  // });

  return (
    <div className="container">
      <main className={cl.main}>
        {articles.map((article, n) => {
          return (
            <article className={cl.article} key={`artKey${n}`} id={`artId${n}`}>
              {article}
            </article>
          );
        })}
      </main>
    </div>
  );
}
