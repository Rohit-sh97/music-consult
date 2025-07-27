import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import { stripeWebhook } from "./controllers/webhookController.js";

dotenv.config();

// Initialize app FIRST
const app = express();

// Stripe webhook must use raw body BEFORE json middleware
app.post(
  "/api/webhook",
  bodyParser.raw({ type: "application/json" }),
  stripeWebhook
);

// Apply JSON middleware to all other routes
app.use((req, res, next) => {
  if (req.originalUrl === "/api/webhook") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

const allowedOrigins = [
  "https://music-consult-be.vercel.app", // your frontend Vercel URL
  "http://localhost:3000",            // for local development
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (e.g. mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

connectDB();

app.get("/", (req, res) => res.send("API running"));

// Routes
app.use("/api", paymentRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
