// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Footer from './compontents/footer';
import Header from './compontents/header'
import Main from './compontents/main';
import Menu from './compontents/menu';
import { text } from './appdata';

function App() {
  const[lang, setLang]=useState('Ukr')
 let textCont= lang==='Ukr'? text.Ukr: text.En
  return (
    <div className="App">
     
      <Header textCont={textCont.header} lang={lang} setLang={setLang}/>
      <Menu textCont={textCont.menu}/>
      <Main textCont={textCont.main} />
      <Footer textCont={textCont.footer}/>
     

    </div>
  );
}

export default App;
