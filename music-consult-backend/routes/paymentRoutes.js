import express from "express";
import { createCheckoutSession } from "../controllers/paymentController.js";
import { stripeWebhook } from "../controllers/webhookController.js";

const router = express.Router();

router.post("/create-checkout-session", createCheckoutSession);

// Webhook must use raw body, NOT json middleware
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

export default router;
