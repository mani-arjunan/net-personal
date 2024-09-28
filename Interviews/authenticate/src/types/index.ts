export type PassengerBookingDetails = {
  firstName: string;
  lastName: string;
  email: string;
  seatNumber: number;
  dateOfBooking: string;
};


export type PassengerDetailsContext = {
  passengerDetails: Array<PassengerBookingDetails>,
  addPassenger: (passenger: PassengerBookingDetails) => void,
  updatePassengerDetails: (index: number, passenger: Record<string, unknown>) => void
}
