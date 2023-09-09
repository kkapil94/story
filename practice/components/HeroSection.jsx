import { useEffect } from "react";

export default function HeroSection(){
    const logo = new URL("../logo.png", import.meta.url);
    const route = ()=>{
      if (window.location.pathname==="/movies") {
        root.render(<Movies/>)
      }
    }
    useEffect(()=>{
      route()
    },[])
    return (
      <div className="hero ">
        <img src={logo} alt=""/>
        <span className="hero-text">
          <a href="/movies">Explore Movies </a>
        </span>
      </div>
    );
  };
  