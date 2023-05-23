import "../assets/Styles/Styled-components/Events-list-style.css";
import { useAuth } from "../Context/AuthContext";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

import Event from "./Event";

const EventList = () => {
  const auth = useAuth();
  const { eventsFilterPassed } = useContext(FilterContext);
  console.log(eventsFilterPassed);

  return (
    <div className="event-list-container">
      {auth.dataFromApi === "" ? (
        <div className="Charging-card">
          <div className="Charging-row">Cargando eventos...</div>
          <div className="Ver-mas">
            <div className="Icons">
              <img
                className="Icons-style"
                src="../../src/assets/Images/Icons/wheele.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      ) : (
        <div className="event-list">
          {eventsFilterPassed.length === 0
            ? auth.dataFromApi.record.map((e, index) => Event(e, index))
            : eventsFilterPassed.map((e, index) => Event(e, index))}
        </div>
      )}
    </div>
  );
};

export default EventList;
