import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";
import Menu from "./components/menu/Menu";
import './app.scss'
import { useState } from "react";


function App() {
const [menuOpen, setMenuopen]  = useState(false)

  return (
    <div className="app">

      <Topbar menuOpen={menuOpen} setMenuopen={setMenuopen}/>
      <Menu menuOpen={menuOpen} setMenuopen={setMenuopen}/>
      
      <div className="sections">
   
        <About/>
        <Portfolio/>
        <Works/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
