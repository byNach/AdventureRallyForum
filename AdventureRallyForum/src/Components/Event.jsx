import "../assets/Styles/Styled-components/Event-style.css";
import PlaceIcon from "@mui/icons-material/Place";
import { useAuth } from "../Context/AuthContext";

const Event = (props) => {
  const auth = useAuth();
  console.log(props);

  return auth.dataFromApi === "" ? null : (
    <div className="Event-card" key={props.EVENT}>
      <div className="Data-image-row">
        <div className="Day-location">
          <div className="Data">
            <div className="Num-day">{props["START-DAY"]}</div>
            <div className="Bar"></div>
            <div className="Month">{props["START-MONTH"]}</div>
          </div>
          <div className="Location-box">
            <PlaceIcon variant="Contained"></PlaceIcon>
            {props["LOCATION"]}
          </div>
          <div className="Data">
            <div className="Num-day">{props["END-DAY"]}</div>
            <div className="Bar"></div>
            <div className="Month">{props["END-MONTH"]}</div>
          </div>
        </div>
        <div className="Event-name-logo">
          <div className="Event-name-box">{props["EVENT"]}</div>
          <img
            className="Organizer"
            src={`../../src/assets/Images/Organizations/${props["LOGO"]}`}
          ></img>
        </div>
      </div>
      <div className="Ver-mas">
        <div className="Icons">
          <img
            className="Icons-style"
            src={`../../src/assets/Images/Icons/${props["COUNTRY"]}.png`}
          ></img>
          {props["COUNTRY2"] === "FALSE" ? null : (
            <img
              className="Icons-style"
              src={`../../src/assets/Images/Icons/${props["COUNTRY2"]}.png`}
            ></img>
          )}
          {props["ENDURO"] === "FALSE" ? null : (
            <img
              className="Icons-style"
              src={`../../src/assets/Images/Icons/${props["ENDURO"]}.png`}
            ></img>
          )}
          {props["TRAIL"] === "FALSE" ? null : (
            <img
              className="Icons-style"
              src={`../../src/assets/Images/Icons/${props["TRAIL"]}.png`}
            ></img>
          )}
          {props["ATV"] === "FALSE" ? null : (
            <img
              className="Icons-style"
              src={`../../src/assets/Images/Icons/${props["ATV"]}.png`}
            ></img>
          )}
          {props["ROADBOOK"] === "FALSE" ? null : (
            <img
              className="Icons-style"
              src={`../../src/assets/Images/Icons/${props["ROADBOOK"]}.png`}
            ></img>
          )}
          {props["GPS"] === "FALSE" ? null : (
            <img
              className="Icons-style"
              src={`../../src/assets/Images/Icons/${props["GPS"]}.png`}
            ></img>
          )}
        </div>
        <button className="Ver-mas-button">
          <a href={props["WEB"]} target="_blank" rel="noreferrer">
            Ver más
          </a>
        </button>
      </div>
    </div>
  );
};

export default Event;
