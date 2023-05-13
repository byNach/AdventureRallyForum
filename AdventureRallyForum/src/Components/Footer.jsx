import { Link } from "react-router-dom";
import "../assets/Styles/Styled-Components/Footer-style.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-top">
        <div className="Footer-title ">AdventureRallyForum.com</div>
      </div>
      <div className="Footer-box">
        <div className="Footer-base">
          <div className="Breadcrumbs-box">
            <Link to="/Info">
              <ul className="Breadcrumbs">
                <li>
                  <p>Normas</p>
                </li>
                <li>
                  <p>Contacto</p>
                </li>
                <li>
                  <p>Sobre nosotros</p>
                </li>
              </ul>
            </Link>
          </div>
          <div className="Developer-box">
            <p>Copyright ©2023 ByNach</p>
          </div>
          <div className="Social-box">
            <LinkedInIcon color="white" fontSize="large" />
            <InstagramIcon color="white" fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
