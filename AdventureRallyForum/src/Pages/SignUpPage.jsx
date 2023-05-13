import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SignUp from "../Components/SignUp";
import "../assets/Styles/Styled-pages/SignUpPage-style.css";

const SignUpPage = () => {
  return (
    <div className="SignUpPage">
      <Header />
      <div className="Center-box">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
