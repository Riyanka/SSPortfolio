import "./topbar.scss"


function Topbar({menuOpen, setMenuopen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
     <div className="wrapper">
       <div className="left">
       <a href="#about" className="logo">Saptarshi.</a>
       </div>
       <div className="right">
        <div className="hamburger" onClick={()=>setMenuopen(!menuOpen)} >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Topbar
