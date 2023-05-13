import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import "../assets/Styles/Styled-components/SignUp-style.css";

const SignUp = () => {
  const ValidationEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [errorMailMessage, setErrorMailMessage] = useState("");
  const [errorPassMessage, setErrorPassMessage] = useState("");
  const [errorRepassMessage, setErrorRePassMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (emailRegister !== "" && passwordRegister !== "") {
      registerMailPassOnFirebase();
    }
  }, [emailRegister, userName, passwordRegister]);

  const handleValidation = (e) => {
    e.preventDefault();
    ValidationEmail.test(email) === false
      ? setErrorMailMessage("Email no válido!")
      : setEmailRegister(email) & setErrorMailMessage("");
    password.length < 6
      ? setErrorPassMessage(
          "Introduce una contraseña de al menos 6 caracteres!"
        )
      : setErrorPassMessage("");
    passwordRepeat.length < 6
      ? setErrorPassMessage(
          "Introduce una contraseña de al menos 6 caracteres!"
        )
      : setErrorPassMessage("");
    password === passwordRepeat
      ? setPasswordRegister(password) & setErrorRePassMessage("")
      : setErrorRePassMessage("Los password deben coincidir");
  };

  const registerMailPassOnFirebase = async () => {
    setLoading(true);
    try {
      await auth.register(emailRegister, passwordRegister, userName);
      setLoading(false);
      alert("Te has registrado correctamente!");
    } catch (error) {
      setLoading(false);
      alert(
        "Ha habido un error con el registro. Inténtelo pasados unos minutos."
      );
      console.error("Error en el registro:", error);
    }
  };

  return loading ? (
    <div className="SignUp-base">
      <div className="Title-box">
        <div className="Loading-title">
          Registrando en AdventureRallyForum.com
        </div>
      </div>
    </div>
  ) : auth.user ? (
    <form className="SignUp-base">
      <div className="Title-box">
        <div className="SignUp-title">Bienvenido/a</div>
        <div className="SignUp-title"> {auth.user.displayName} </div>
      </div>
      <div className="Inputs-base">
        Te has registrado en AdventureRallyForum.com y ahora formas parte de una
        nueva família del offroad
      </div>
      <Link to="/Home">
        <button className="Submit-button">Entrar</button>
      </Link>
    </form>
  ) : (
    <form className="SignUp-base">
      <div className="SignUp-title">Sign Up</div>
      <div className="Inputs-base">
        <div className="Top-input-tetx">Email</div>
        <input
          type="email"
          className="Input"
          placeholder="Introduce tu email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div className="Top-input-tetx">Nombre de usuario</div>
        <input
          type="email"
          className="Input"
          placeholder="Cómo quieres llamarte aquí?"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <div className="Top-input-tetx">Password</div>
        <input
          type="password"
          className="Input"
          placeholder="Introduce una contraseña!"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="Top-input-tetx">Repeat Password</div>
        <input
          type="password"
          className="Input"
          placeholder="Repite la contraseña!"
          onChange={(e) => setPasswordRepeat(e.target.value)}
        ></input>
      </div>
      <button className="Submit-button" onClick={(e) => handleValidation(e)}>
        Sign Up
      </button>
      {errorMailMessage !== "" ? (
        <div className="ErrorMessage">{errorMailMessage}</div>
      ) : null}
      {errorPassMessage !== "" ? (
        <div className="ErrorMessage">{errorPassMessage}</div>
      ) : null}
      {errorRepassMessage !== "" ? (
        <div className="ErrorMessage">{errorRepassMessage}</div>
      ) : null}
      <div className="Or-option">Registrate con tu cuenta de Google</div>
      <div className="Social-icons-SignUp"></div>
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

export default SignUp;
