import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { name, email, sessionType, date, time } = req.body;

    console.log("Incoming body:", req.body);

    const priceMap = {
      "1hr": 75,
      "2hr": 140,
    };

    const amount = priceMap[sessionType];
    if (!amount) {
      return res.status(400).json({ error: "Invalid sessionType" });
    }

<<<<<<< HEAD
  const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  mode: "payment",
  line_items: [
    {
      price_data: {
        currency: "usd",
        product_data: { name: "Creative Breakthrough Session" },
        unit_amount: amount * 100,
=======
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Creative Breakthrough Session" },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "https://music-consult.onrender.com/payment-success",
      cancel_url: "https://music-consult.onrender.com/booking",
      metadata: {
        email,
        name,
        sessionType,
        date,
        time,
>>>>>>> 6ddbbcc25e1f5499b98395040577573c3e26c376
      },
      quantity: 1,
    },
  ],
  success_url: `${process.env.FRONTEND_URL}/payment-success`,
  cancel_url: `${process.env.FRONTEND_URL}/booking`,
  metadata: {
    email,
    name,
    sessionType,
    date,
    time,
  },
});

    res.json({ id: session.id });
  } catch (err) {
    console.error("Error creating checkout session", err);
    res.status(500).json({ error: err.message });
  }
};
