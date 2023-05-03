import "../assets/Styles/Header-style.css";
import helmet from "../assets/Images/icons8-helmet-64.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-box">
        <div className="Header-base">
          <div className="Name-logo-box">
            AdventureRallyForum
            <img className="Helmet-img" src={helmet}></img>
          </div>
          <div className="Header-credentials">
            <Link to="/Forum">
              <button className="Foro-button">FORO</button>
            </Link>
            <Link to="/Events">
              <button className="Eventos-button">EVENTOS</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Nav-down">
        <div className="Sing-up">Sing Up</div>
        <div className="Login">Login</div>
      </div>
    </div>
  );
};

export default Header;
