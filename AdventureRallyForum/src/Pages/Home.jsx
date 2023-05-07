import Header from "../Components/Header";
import SearcherGroup from "../Components/Search-components/SearcherGroup";
import EventList from "../Components/Events-List";
import Banner from "../Components/Banner-aside";
import Footer from "../Components/Footer";
import "../assets/Styles/Styled-Pages/Home-style.css";

const Home = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="Content-home">
        <div className="Left-aside">
          <SearcherGroup />
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
