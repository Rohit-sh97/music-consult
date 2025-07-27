# 🎵 MusicConsult

**MusicConsult** is a full-stack platform where upcoming artists can book 1-on-1 creative breakthrough sessions.  
It integrates **Stripe payments, video scheduling, and email notifications** to connect artists with mentors.

---

## 🚀 Features

- **Secure Booking Flow**: Artists select a session type, date, and time.
- **Stripe Payments**: Integrated Stripe checkout for instant payments.
- **Automated Email Notifications**:
  - Confirmation email sent to the artist
  - Notification email sent to the mentor
- **Mentor Dashboard (Coming soon)**: Manage all bookings.
- **Responsive UI**: Optimized for mobile and desktop.

---

## 🛠 Tech Stack

### Frontend
- **Next.js 14 (App Router)**
- **React / TypeScript**
- **Tailwind CSS + shadcn/ui**
- **Stripe.js**

### Backend
- **Node.js + Express**
- **MongoDB with Mongoose**
- **Stripe (Checkout + Webhooks)**
- **Nodemailer (Gmail SMTP)**

---

## 🏗 Project Structure


---

## ⚙️ How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/music-consult.git
cd music-consult


2. Setup Backend :

cd backend
npm install
cp .env.example .env  # Add your MongoDB, Stripe and Gmail creds
npm run dev

3. Setup Frontend :

cd ../frontend
npm install
npm run dev

Frontend runs at: http://localhost:3000
Backend runs at: http://localhost:5000
