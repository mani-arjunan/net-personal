import React from "react";
import { usePassengerDetailsContext } from "../../context";

export function ReservationPage(): React.ReactElement {
  const value = usePassengerDetailsContext();

  console.log(value)
  return <div>Welcome to Reservation Page</div>;
}
