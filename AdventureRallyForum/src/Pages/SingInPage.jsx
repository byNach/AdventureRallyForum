import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SingIn from "../Components/SingIn";
import "../assets/Styles/Styled-pages/SingInPage.css";

const SingInPage = () => {
  return (
    <div className="SingInPage">
    <Header />
    <div className="Center-box">
      <SingIn />
    </div>
    <Footer />
  </div>
  )
}

export default SingInPage;