import "../assets/Styles/Styled-components/Events-list-style.css";
import { useAuth } from "../Context/AuthContext";
import Event from "./Event";

const EventList = () => {
  const auth = useAuth();

  return auth.dataFromApi === "" ? (
    <div className="Charging-card">
      <div className="Charging-row">Cargando eventos...</div>
      <div className="Ver-mas">
        <div className="Icons">
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/wheele.png"
          ></img>
        </div>
      </div>
    </div>
  ) : (
    <>{auth.dataFromApi.record.map((e, index) => Event(e, index))};</>
  );
};

export default EventList;
