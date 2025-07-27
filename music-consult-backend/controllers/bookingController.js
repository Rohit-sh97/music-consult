import Booking from "../models/Booking.js";

export const getBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};
