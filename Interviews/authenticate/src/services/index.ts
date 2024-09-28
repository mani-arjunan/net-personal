import { PassengerBookingDetails } from "../types";

export function getDataFromLocalStorage(): Array<PassengerBookingDetails> {
  const localStorageData = localStorage.getItem('passengerDetails');

  if(!localStorageData) {
    return []
  }

  const passengerDetails = JSON.parse(localStorageData) as Array<PassengerBookingDetails>

  return passengerDetails
}
