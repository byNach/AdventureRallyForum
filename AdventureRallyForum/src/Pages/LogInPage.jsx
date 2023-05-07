import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import "../assets/Styles/Styled-pages/LogInPage-style.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Header />
      <div className="Center-box">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
