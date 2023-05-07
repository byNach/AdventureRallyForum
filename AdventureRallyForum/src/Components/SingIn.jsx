import "../assets/Styles/Styled-components/SingIn-style.css";

const SingIn = () => {
  return (
    <form className="SingIn-base">
      <div className="SingIn-title">SingIn</div>
      <div className="Inputs-base">
        <div className="Top-input-tetx">Usuario</div>
        <input type="text" className="Input" placeholder="Introduce tu email"></input>
        <div className="Top-input-tetx">Password</div>
        <input type="password" className="Input" placeholder="Introduce una contraseña"></input>
        <input type="password" className="Input" placeholder="Repite la contraseña"></input>
      </div>
      <button className="Submit-button">SingIn</button>
      <div className="Or-option">Registrate con tu cuenta de Google</div>
      <div className="Social-icons-SingIn"></div>
    </form>
  );
};

export default SingIn; 