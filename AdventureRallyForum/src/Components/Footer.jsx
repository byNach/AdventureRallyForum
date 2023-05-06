import "../assets/Styles/Footer-style.css";
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
            <ul className="Breadcrumbs">
              <li>
                <a href="/">Normas</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
              <li>
                <a href="/">Sobre nosotros</a>
              </li>
            </ul>
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
