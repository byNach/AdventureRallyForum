import "../assets/Styles/Styled-components/Header-style.css";
import helmet from "../assets/Images/icons8-helmet-64.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-base">
        <div className="Name-logo-box">
          AdventureRallyForum
          <img className="Helmet-img" src={helmet}></img>
        </div>
        <div className="Header-credentials">
          <Link to="/Home">
            <button className="Other-button">HOME</button>
          </Link>
          <Link to="/Events">
            <button className="Other-button">EVENTOS</button>
          </Link>
          <Link to="/Forum">
            <button className="Foro-button">FORO</button>
          </Link>
        </div>
      </div>
      <div className="Nav-down">
        <Link to="/SingUpPage">
          <button className="SingUp">Sing Up</button>
        </Link>
        <Link to="/LogInPage">
          <button className="LogIn">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
