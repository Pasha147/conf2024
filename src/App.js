// import logo from './logo.svg';
import { useState} from 'react';
import './App.css';
import Footer from './compontents/footer';
import Header from './compontents/header'
import Main from './compontents/main';
import Menu from './compontents/menu';
import { text } from './appdata';

function App() {
  const[lang, setLang]=useState('Ukr')
  const[colorMenu, setColorMenu]=useState(
    text.Ukr.menu.links.map(()=>{return {ratio: 0}})
  )
 let textCont= lang==='Ukr'? text.Ukr: text.En
  return (
    <div className="App">
     
      <Header textCont={textCont.header} lang={lang} setLang={setLang}/>
      <Menu textCont={textCont.menu} colorMenu={colorMenu}/>
      <Main textCont={textCont.main} setColorMenu={setColorMenu}/>
      <Footer textCont={textCont.footer}/>
     
    </div>
  );
}

export default App;

// function useOnScreen(ref) {

//   const [isIntersecting, setIntersecting] = useState(false)

//   const observer = useMemo(() => new IntersectionObserver(
//     ([entry]) => setIntersecting(entry.isIntersecting)
//   ), [ref])


//   useEffect(() => {
//     observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])

//   return isIntersecting
// }

// const DummyComponent = () => {
  
//   const ref = useRef(null)
//   const [isIntersecting, setIntersecting] = useState(false)

//   const observer = new IntersectionObserver(
//     ([entry]) => setIntersecting(entry.isIntersecting)
//   )


//   useEffect(() => {
//     observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])


  
//   return <div ref={ref}>{isIntersecting && `Yep, I'm on screen`}</div>
// }