import "../assets/Styles/Styled-components/Header-style.css";
import helmet from "../assets/Images/Icons/icons8-helmet-64.png";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const auth = useAuth();

  return auth.user ? (
    <div className="Header">
      <div className="Header-base">
        <Link to="/home">
          <div className="Name-logo-box">
            AdventureRallyForum
            <img className="Helmet-img" src={helmet}></img>
          </div>
        </Link>
        <div className="Header-credentials">
          <Link to="/Events">
            <button className="Other-button">EVENTOS</button>
          </Link>
          <a href="https://adventurerallyforum.flarum.cloud/" target="_blank" rel="noreferrer">
            <button className="Foro-button">FORO</button>
          </a>
        </div>
      </div>
      <div className="Nav-down">
        <div className="User-box">
          <img
            className="User-icon"
            src="\src\assets\Images\Icons\user.png"
          ></img>
          <div className="User-name">{auth.user.displayName}</div>
        </div>
        <Link to="/LogOutPage">
          <button className="LogIn-Out">Log Out</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="Header">
      <div className="Header-base">
        <Link to="/home">
          <div className="Name-logo-box">
            AdventureRallyForum
            <img className="Helmet-img" src={helmet}></img>
          </div>
        </Link>
        <div className="Header-credentials">
          <Link to="/Events">
            <button className="Other-button">EVENTOS</button>
          </Link>
          <a href="https://adventurerallyforum.flarum.cloud/" target="_blank" rel="noreferrer">
            <button className="Foro-button">FORO</button>
          </a>
          <div className="MenuIcon-burger">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="Nav-down">
        <Link to="/SignUpPage">
          <button className="SignUp">Sign Up</button>
        </Link>
        <Link to="/LogInPage">
          <button className="LogIn-Out">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
