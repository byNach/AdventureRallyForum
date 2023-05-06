import Header from "../Components/Header";
import Footer from "../Components/Footer";
import EventList from "../Components/Events-List";
import "../assets/Styles/Styled-pages/Events-style.css";

const Events = () => {
  return (
    <div className="Base-Events">
      <Header />
      <div className="Central-Events">
        <EventList />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
