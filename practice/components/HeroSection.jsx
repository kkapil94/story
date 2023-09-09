import "../style.css"

export default function HeroSection(){
    const logo = new URL("../logo.png", import.meta.url);
    return (
      <div className="hero ">
        <img src={logo} alt=""/>
        <a href="/movies" className="hero-text">
          <span >
          Explore Movies
        </span> </a>
      </div>
    );
  };
  