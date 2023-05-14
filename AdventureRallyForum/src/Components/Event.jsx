import "../assets/Styles/Styled-components/Event-style.css";
import PlaceIcon from "@mui/icons-material/Place";

const Event = () => { 
  return (
    <div className="Event-card">
      <div className="Data-image-row">
        <div className="Day-location">
          <div className="Data">
            <div className="Num-day"></div>
            <div className="Bar"></div>
            <div className="Month"></div>
          </div>
          <div className="Location-box">
            <PlaceIcon variant="Contained"></PlaceIcon>
            Granada
          </div>
        </div>
      </div>
      <div className="Ver-mas">
        <div className="Icons">
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/spain.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/portugal.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/motocross-w.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/adv-icon-w.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/atv-w.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/roadbook-w.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/smartphone-w.png"
          ></img>
        </div>
        <button className="Ver-mas-button">Ver más</button>
      </div>
    </div>
  );
};

export default Event;
