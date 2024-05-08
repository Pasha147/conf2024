import cl from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={cl.footer}>
      <p>
        Інститут механіки ім.С.П.Тимошенко НАН України. <br />
        03057 Київ, Україна, вул. Нестерова, 3.
        <br />
      
      <span style={{ whiteSpace: "nowrap" }}>
        Email: conference@inmech.kyiv.ua{" "}
      </span>
      <br/>
      <span style={{ whiteSpace: "nowrap" }}>Тел: +380(63) 369-38-97 </span>
      </p>
    </footer>
  );
}
