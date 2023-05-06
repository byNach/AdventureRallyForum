import "../assets/Styles/Styled-components/Event-style.css";
import PlaceIcon from "@mui/icons-material/Place";
import Data from "../JsonDATA";

const Event = () => {

  return (
    <div className="Event-card">
      <div className="Data-image-row">
        <div className="Data">
          <div className="Num-day">{Data[1].difficulty}</div>
          <div className="Bar"></div>
          <div className="Month">OCT</div>
          <div className="Location-box">
            <PlaceIcon variant="Contained"></PlaceIcon>
            Granada
          </div>
        </div>
        <div className="Event-image"></div>
      </div>
      <div className="Description">
        <h1 className="Event-title">1000 Dunas</h1>
        <p className="Event-description-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          ipsam reprehenderit illum in saepe iusto modi maxime numquam ad illo
          mollitia vitae tempore nostrum nulla unde, amet rerum sapiente esse.
        </p>
      </div>
      <div className="Ver-mas">
        <div className="Triangle"></div>
        <button className="Ver-mas-button">Ver más</button>
      </div>
    </div>
  );
};

export default Event;
