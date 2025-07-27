import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  genre: String,
  sessionType: String,
  date: Date,
  time: String,
  message: String,
  paymentStatus: { type: String, default: "pending" },
  meetLink: { type: String, default: "" }
});

export default mongoose.model("Booking", bookingSchema);
