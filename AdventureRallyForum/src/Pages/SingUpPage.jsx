import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SingUp from "../Components/SingUp";
import "../assets/Styles/Styled-pages/SingUpPage-style.css";

const SingUpPage = () => {
  return (
    <div className="SingUpPage">
    <Header />
    <div className="Center-box">
      <SingUp />
    </div>
    <Footer />
  </div>
  )
}

export default SingUpPage;