import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Styled-components/LogOut-style.css";

const LogOut = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/Home");
      })
      .catch((error) => {
        console.log("An error happened.", error);
      });
  };

  return (
    <form className="Login-base">
      <div className="Login-title">Log Out</div>
      <div className="Inputs-base">Pulsa LOGOUT para cerrar tu sesión.</div>
      <div className="Inputs-base">
        Aunque recuerda, cada vez que te vas, una KTM va al taller.
      </div>
      <button className="Submit-button" onClick={(e) => handleLogOut(e)}>
        Log Out
      </button>
    </form>
  );
};

export default LogOut;
