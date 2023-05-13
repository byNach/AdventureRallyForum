import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LogOut from "../Components/LogOut";
import "../assets/Styles/Styled-pages/LogOutPage-style.css";

const LogOutPage = () => {
  return (
    <div className="LogOutPage">
      <Header />
      <div className="Center-box">
        <LogOut />
      </div>
      <Footer />
    </div>
  );
};

export default LogOutPage;