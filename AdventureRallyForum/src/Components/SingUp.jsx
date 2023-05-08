import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import "../assets/Styles/Styled-components/SingUp-style.css";

const SingUp = () => {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };
  return (
    <form className="SingUp-base">
      <div className="SingUp-title">Sing Up</div>
      <div className="Inputs-base">
        <div className="Top-input-tetx">Usuario</div>
        <input
          type="email"
          className="Input"
          placeholder="Introduce tu email"
          onChange={(e) => setEmailRegister(e.target.value)}
        ></input>
        <div className="Top-input-tetx">Password</div>
        <input
          type="password"
          className="Input"
          placeholder="Introduce una contraseña"
          onChange={(e) => setPasswordRegister(e.target.value)}
        ></input>
        <div className="Top-input-tetx">Repeat Password</div>
        <input
          type="password"
          className="Input"
          placeholder="Repite la contraseña"
      //    onChange={(e) => setPasswordRepeat(e.target.value)}
        ></input>
      </div>
      <button className="Submit-button" onClick={(e) => handleRegister(e)}>
        Sing Up
      </button>
      <div className="Or-option">Registrate con tu cuenta de Google</div>
      <div className="Social-icons-SingUp"></div>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <div className="btn-text">Sign Up with google</div>
      </div>
    </form>
  );
};

export default SingUp;
