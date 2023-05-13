import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Forum from "./Pages/Forum";
import Events from "./Pages/Events";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import LogOutPage from "./Pages/LogOutPage";
import EventDetails from "./Pages/EventDetails";
import InfoPage from "./Pages/InfoPage";

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
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/LogOutPage" element={<LogOutPage />} />
          <Route path="/Info" element={<InfoPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Routing;