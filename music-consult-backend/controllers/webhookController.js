// controllers/webhookController.js
import Stripe from "stripe";
import sendEmail from "../utils/sendEmail.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Change this to your mentor email (you)
const MENTOR_EMAIL = "rsantoshsharma9730@gmail.com";

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { email, name, sessionType, date, time } = session.metadata;

    const meetLink = "https://meet.google.com/abc-defg-hij"; 


    await sendEmail({
      to: email,
      subject: "Your Music Consult Booking Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #6b21a8;">Hi ${name},</h2>
          <p style="font-size: 16px; color: #333;">Thank you for booking your session with <b>Music Consult</b>!</p>
          
          <div style="background-color: #fff; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #ddd;">
            <h3 style="margin-top: 0; color: #6b21a8;">Your Session Details:</h3>
            <p><b>Date:</b> ${new Date(date).toLocaleDateString()}</p>
            <p><b>Time:</b> ${time}</p>
            <p><b>Duration:</b> ${sessionType}</p>
            <p><b>Google Meet link:</b> <a href="${meetLink}" style="color: #2563eb;">${meetLink}</a></p>
          </div>

          <p style="color: #444;">Please be ready on time. Bring your ideas, questions, and let's make magic!</p>
          <p style="margin-top: 30px;">Cheers,<br><b>The Music Consult Team</b></p>
        </div>
      `
    });

      await sendEmail({
      to: MENTOR_EMAIL,
      subject: `New Booking from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #fff0f6; border-radius: 8px;">
          <h2 style="color: #db2777;">New Session Booking!</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Date:</b> ${new Date(date).toLocaleDateString()}</p>
          <p><b>Time:</b> ${time}</p>
          <p><b>Duration:</b> ${sessionType}</p>
          <p><b>Meet Link:</b> <a href="${meetLink}" style="color: #2563eb;">${meetLink}</a></p>
        </div>
      `
    });

    console.log(`Confirmation emails sent to ${email} and mentor`);
  }

  res.json({ received: true });
};
