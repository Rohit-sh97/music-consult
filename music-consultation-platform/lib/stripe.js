import { loadStripe } from "@stripe/stripe-js";

// Public key (from Stripe dashboard)
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
