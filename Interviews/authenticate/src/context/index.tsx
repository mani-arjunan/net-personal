import React, { useContext, useState } from "react";
import { getDataFromLocalStorage } from "../services";
import { PassengerBookingDetails, PassengerDetailsContext } from "../types";

const PassengersDetails = React.createContext<PassengerDetailsContext>({
  passengerDetails: [],
  addPassenger: () => {},
  updatePassengerDetails: () => {}
});

export function PassengersContextProvider(props: {
  children: React.ReactNode;
}) {
  const [passengerDetails, setPassengerDetails] = useState<
    PassengerBookingDetails[]
  >(getDataFromLocalStorage());

  const addPassenger = (passenger: PassengerBookingDetails): void => {
    setPassengerDetails([...passengerDetails, passenger]);
  };

  const updatePassengerDetails = (
    index: number,
    passenger: Record<string, unknown>,
  ) => {
    passengerDetails[index] = {
      ...passengerDetails[index],
      lastName:
        (passenger.lastName as string) || passengerDetails[index].lastName,
      firstName:
        (passenger.firstName as string) || passengerDetails[index].firstName,
      email: (passenger.email as string) || passengerDetails[index].email,
      dateOfBooking:
        (passenger.dateOfBooking as string) ||
        passengerDetails[index].dateOfBooking,
    };

    setPassengerDetails([...passengerDetails]);
  };

  return (
    <PassengersDetails.Provider
      value={{ passengerDetails, addPassenger, updatePassengerDetails }}
    >
      {props.children}
    </PassengersDetails.Provider>
  );
}

export const usePassengerDetailsContext = () => useContext(PassengersDetails);
