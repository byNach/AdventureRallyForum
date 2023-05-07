import "../assets/Styles/Styled-components/Login-style.css";

const Login = () => {
  return (
    <form className="Login-base">
      <div className="Login-title">Login</div>
      <div className="Inputs-base">
        <div className="Top-input-tetx">Usuario</div>
        <input
          type="text"
          className="Input"
          placeholder="Introduce tu email"
        ></input>
        <div className="Top-input-tetx">Password</div>
        <input
          type="password"
          className="Input"
          placeholder="Introduce una contraseña"
        ></input>
      </div>
      <button className="Submit-button">Login</button>
      <div className="Or-option">Accede con tu cuenta de Google</div>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <div className="btn-text">
          Sign in with google
        </div>
      </div>
      <div className="Not-registered-user">Aún no tienes cuenta?</div>
      <div className="Redirect-singUp-button">Sing Up</div>
    </form>
  );
};

export default Login;
