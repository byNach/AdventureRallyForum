import "../assets/Styles/Footer-style.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <div className="Footer-base">
      <div className="Title-box">
        <h1 className="Footer-title ">AdventureRallyForum.com</h1>
      </div>
      <div className="Developer-box">
        <p>2023 devByNach</p>
      </div>
      <div className="Breadcrumbs-box">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="white" href="/">
            Normas
          </Link>
          <Link underline="hover" color="white" href="/">
            Contacto
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};
export default Footer;
