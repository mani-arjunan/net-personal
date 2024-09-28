import React from "react";

import "./dashboard.css";
import { usePassengerDetailsContext } from "../../context";
import { PassengerCard } from "../../components/passenger-card";

export function DashboardPage(): React.ReactElement {
  const value = usePassengerDetailsContext();

  console.log(value, "Dashboardd");
  return (
    <div id="dashboard-container">
      Welcome To Dashboard
      <div id="card-container">
        <PassengerCard /> 
        <PassengerCard /> 
      </div>
    </div>
  );
}
