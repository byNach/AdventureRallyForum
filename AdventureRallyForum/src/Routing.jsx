import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Forum from "./Pages/Forum";
import Events from "./Pages/Events";
import LogInPage from "./Pages/LogInPage";
import SingInPage from "./Pages/SingInPage";
import EventDetails from "./Pages/EventDetails";
import Legal from "./Pages/Legal";

const Routing = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/EventDetails" element={<EventDetails />} />
          <Route path="/LogInPage" element={<LogInPage />} />
          <Route path="/SingInPage" element={<SingInPage />} />
          <Route path="/Legal" element={<Legal />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Routing;