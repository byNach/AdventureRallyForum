import "../assets/Styles/Styled-components/Event-style.css";
import PlaceIcon from "@mui/icons-material/Place";
import Data from "../Data";

const Event = () => {
  return (
    <div className="Event-card">
      <div className="Data-image-row">
        <div className="Day-location">
          <div className="Data">
            <div className="Num-day">{Data[1].difficulty}</div>
            <div className="Bar"></div>
            <div className="Month">OCT</div>
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
            src="../../src/assets/Images/Icons/motocross.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/motorcycle.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/atv.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/open-book.png"
          ></img>
          <img
            className="Icons-style"
            src="../../src/assets/Images/Icons/smartphone.png"
          ></img>
        </div>
        <button className="Ver-mas-button">Ver más</button>
      </div>
    </div>
  );
};

export default Event;
