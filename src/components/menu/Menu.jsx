import "./menu.scss";

export default function Menu({ menuOpen, setMenuopen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuopen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={()=>setMenuopen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuopen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuopen(false)}>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </div>
  );
}
