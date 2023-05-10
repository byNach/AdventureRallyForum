import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import "../assets/Styles/Styled-components/Login-style.css";

const Login = () => {
  const auth = useAuth();
  console.log(auth.user.email);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };

  const handleGoogle = (e) => {
    e.preventDefault;
    auth.loginWithGoogle();
  };

  return (
    <form className="Login-base">
      <div className="Login-title">Log In</div>
      <div className="Inputs-base">
        <div className="Top-input-tetx">Usuario</div>
        <input
          type="email"
          className="Input"
          placeholder="Introduce tu email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div className="Top-input-tetx">Password</div>
        <input
          type="password"
          className="Input"
          placeholder="Introduce una contraseña"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button className="Submit-button" onClick={(e) => handleLogin(e)}>
        Log In
      </button>
      <div className="Or-option">Accede con tu cuenta de Google</div>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <div className="btn-text" onClick={(e) => handleGoogle(e)}>
          Log In with Google
        </div>
      </div>
      <div className="Not-registered-user">Aún no tienes cuenta?</div>
      <Link to="/SignUpPage">
        <div className="Redirect-signUp-button">Sign Up</div>
      </Link>
    </form>
  );
};

export default Login;
