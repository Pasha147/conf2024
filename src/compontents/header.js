import cl from "./header.module.css";

export default function Header() {
 
  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.h_body}>
          <a className={cl.link_logo} href="/">
            <img className={cl.h_logo} src="./img/logo1.jpg" alt="Logo"></img>
          </a>
          <div className={cl.h_text}>
            <h1>Механіка</h1>
            <h2>сучасність і перспективи</h2>
          </div>
         
        </div>
       
      </div>
    </header>
  );
}
