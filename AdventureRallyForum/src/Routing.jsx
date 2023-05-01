import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Forum from "./Pages/Forum";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import LogOut from "./Pages/LogOut";
import EventDetails from "./Pages/EventDetails";

const Routing = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/EventDetails" element={<EventDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Routing;