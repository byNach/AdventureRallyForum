import { useState, useEffect, useRef } from "react";
import "../assets/Styles/Styled-components/Header-style.css";
import helmet from "../assets/Images/Icons/icons8-helmet-64.png";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemIcon } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Divider from '@mui/material/Divider';

const Header = () => {
  const auth = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  return auth.user ? (
    <div className="Header">
      <div className="Header-base">
        <Link to="/home">
          <div className="Name-logo-box">
            AdventureRallyForum
            <img className="Helmet-img" src={helmet}></img>
          </div>
        </Link>
        <div className="Header-credentials">
          <Link to="/Events">
            <button className="Other-button">EVENTOS</button>
          </Link>
          <a href="https://adventurerallyforum.flarum.cloud/" target="_blank" rel="noreferrer">
            <button className="Foro-button">FORO</button>
          </a>
          <div className="MenuIcon-burger" onClick={toggleDrawer}>
            <MenuIcon />
            <Drawer
              ref={drawerRef}
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                sx: {
                  width: "50vw",
                  backgroundColor: "rgba(0,0,0)",
                  color: "rgba(255,255,255)",
                  fontFamily: "monospace",
                  fontSize: "1.5em",
                  maxWidth: "300px",
                },
              }}
            >
              <List style={{ paddingTop: "20px" }}>
                <ListItem>
                  <div className="User-box">
                    <img
                      className="User-icon"
                      src="\src\assets\Images\Icons\user.png"
                    ></img>
                    <div className="User-name">{auth.user.displayName}</div>
                  </div>
                </ListItem>
                <Divider style={{ borderColor: "rgba(255,255,255,0.7", borderWidth: "1px" }} />
                <ListItem>
                  <Link to="/Home" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <HomeIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    HOME
                  </Link>
                </ListItem>
                <Divider style={{ borderColor: "rgba(255,255,255,0.7", borderWidth: "1px" }} />
                <ListItem>
                  <a
                    href="https://adventurerallyforum.flarum.cloud/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <GroupsIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    FORO
                  </a>
                </ListItem>
                <Divider style={{ borderColor: "rgba(255,255,255,0.7", borderWidth: "1px" }} />
                <ListItem>
                  <Link to="/Events" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <EventNoteIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    EVENTOS
                  </Link>
                </ListItem>
                <Divider style={{ borderColor: "rgba(255,255,255,0.7", borderWidth: "1px" }} />
                <ListItem>
                  <Link to="/LogOutPage" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <LogoutIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    LOGOUT
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="Nav-down">
        <div className="User-box">
          <img
            className="User-icon"
            src="\src\assets\Images\Icons\user.png"
          ></img>
          <div className="User-name">{auth.user.displayName}</div>
        </div>
        <Link to="/LogOutPage">
          <button className="LogIn-Out">Log Out</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="Header">
      <div className="Header-base">
        <Link to="/home">
          <div className="Name-logo-box">
            AdventureRallyForum
            <img className="Helmet-img" src={helmet}></img>
          </div>
        </Link>
        <div className="Header-credentials">
          <Link to="/Events">
            <button className="Other-button">EVENTOS</button>
          </Link>
          <a href="https://adventurerallyforum.flarum.cloud/" target="_blank" rel="noreferrer">
            <button className="Foro-button">FORO</button>
          </a>
          <div className="MenuIcon-burger" onClick={toggleDrawer}>
            <MenuIcon />
            <Drawer
              ref={drawerRef}
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                sx: {
                  width: "50vw",
                  backgroundColor: "rgba(0,0,0)",
                  color: "rgba(255,255,255)",
                  fontFamily: "monospace",
                  fontSize: "1.5em",
                  maxWidth: "300px",
                },
              }}
            >
              <List style={{ paddingTop: "20px" }}>
                <ListItem>
                  <Link to="/Home" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <HomeIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    HOME
                  </Link>
                </ListItem>
                <Divider style={{ borderColor: "rgba(255,255,255,0.7", borderWidth: "1px" }} />
                <ListItem>
                  <a
                    href="https://adventurerallyforum.flarum.cloud/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <GroupsIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    FORO
                  </a>
                </ListItem>
                <Divider style={{ borderColor: "rgba(255,255,255,0.7", borderWidth: "1px" }} />
                <ListItem>
                  <Link to="/Events" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <EventNoteIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    EVENTOS
                  </Link>
                </ListItem>
                <Divider style={{ borderColor: "rgba(255,255,255,0.7", borderWidth: "1px" }} />
                <ListItem>
                  <Link to="/LogInPage" style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon style={{ marginBottom: "10px", marginTop: "10px" }}>
                      <LoginIcon
                        sx={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "10px",
                          marginRight: "20px",
                          backgroundColor: "red",
                        }}
                      />
                    </ListItemIcon>
                    LOGIN
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="Nav-down">
        <Link to="/SignUpPage">
          <button className="SignUp">Sign Up</button>
        </Link>
        <Link to="/LogInPage">
          <button className="LogIn-Out">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
