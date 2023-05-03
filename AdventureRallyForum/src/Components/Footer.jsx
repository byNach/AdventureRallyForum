import "../assets/Styles/Footer-style.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
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
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="white" href="/">
                Normas
              </Link>
              <Link underline="hover" color="white" href="/">
                Contacto
              </Link>
              <Link underline="hover" color="white" href="/">
                Sobre nosotros
              </Link>
            </Breadcrumbs>
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
