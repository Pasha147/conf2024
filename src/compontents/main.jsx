import { useRef, useEffect } from "react";
import cl from "./main.module.css";
// import { links } from "../appdata";

export default function Main(props) {
  // const elementRef = useRef(null)

  // useEffect(() => {
   
  //   function handleResize(){
  //     const x = elementRef.current.offsetLeft;
  //     const y = elementRef.current.offsetTop;
  //     console.log(`x=${x}  y=${y}`);
  //   }
  //     // console.log( elementRef);

  //   handleResize(); // initial call to get position of the element on mount
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [elementRef]);

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

  const itemEls = useRef(new Array())

  useEffect(() => {
    
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="container">
      <main className={cl.main} >
        {articles.map((article, n) => {
          return (
            <article
            ref={(element) => itemEls.current.push(element)}
            className={cl.article} key={`artKey${n}`} id={`artId${n}`}>
              {article}
            </article>
          );
        })}
      </main>
    </div>
  );
}
