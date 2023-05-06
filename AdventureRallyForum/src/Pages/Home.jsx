import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import EventList from "../Components/Events-List";
import Banner from "../Components/Banner-aside";
import Footer from "../Components/Footer";
import "../assets/Styles/Styled-Pages/Home-style.css";

const Home = () => {
  return (
    <div className="Base-home">
      <Header />
      <div className="Content-home">
        <div className="Left-aside">
          <Searcher />
        </div>
        <div className="Central-home">
          <EventList />
        </div>
        <div className="Right-aside">
          <Banner />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
