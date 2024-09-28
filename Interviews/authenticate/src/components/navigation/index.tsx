import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navigation.css";

export function Navigation(): React.ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  function navigateToRoute(routeName: string) {
    navigate(routeName)
  }
  
  return (
    <div id="nav-bar">
      <button
        onClick={() => navigateToRoute('/')}
        disabled={location.pathname === "/"}
        className={`${
          location.pathname === "/" ? "nav-btns-current" : "nav-btns"
        }`}
      >
        Dashboard
      </button>
      <button
        onClick={() => navigateToRoute('/reservation')}
        disabled={location.pathname === "/reservation"}
        className={`${
          location.pathname === "/reservation" ? "nav-btns-current" : "nav-btns"
        }`}
      >
        Reservation
      </button>
    </div>
  );
}


