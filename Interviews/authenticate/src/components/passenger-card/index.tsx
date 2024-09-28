import React, { useContext } from "react";
import { usePassengerDetailsContext } from "../../context";
import { PassengerBookingDetails } from "../../types";
import "./passenger-card.css";

export function PassengerCard(): React.ReactElement | null {
  const { passengerDetails } = usePassengerDetailsContext()

  if (passengerDetails.length) {
    return (
      <div id="card-wrapper">
        {passengerDetails.map((details) => {
          return Object.keys(details).map((key) => {
            const inputValue = details[key as keyof PassengerBookingDetails];

            return (
              <div className="item">
                <label>{key}</label>
                <input disabled={key === "seatNumber"} value={inputValue} />
              </div>
            );
          });
        })}
      </div>
    );
  }

  return null;
}
