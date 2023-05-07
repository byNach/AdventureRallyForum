import "../assets/Styles/Styled-components/SingIn-style.css";

const SingIn = () => {
  return (
    <form className="SingIn-base">
      <div className="SingIn-title">Sing In</div>
      <div className="Inputs-base">
        <div className="Top-input-tetx">Usuario</div>
        <input type="text" className="Input" placeholder="Introduce tu email"></input>
        <div className="Top-input-tetx">Password</div>
        <input type="password" className="Input" placeholder="Introduce una contraseña"></input>
        <div className="Top-input-tetx">Repeat Password</div>
        <input type="password" className="Input" placeholder="Repite la contraseña"></input>
      </div>
      <button className="Submit-button">Sing In</button>
      <div className="Or-option">Registrate con tu cuenta de Google</div>
      <div className="Social-icons-SingIn"></div>
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
    </form>
  );
};

export default SingIn; 