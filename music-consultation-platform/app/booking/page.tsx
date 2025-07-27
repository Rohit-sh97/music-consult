"use client"

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarIcon, Clock, CreditCard, AlertCircle, Shield } from "lucide-react"
import { format } from "date-fns"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    genre: "",
    sessionType: "",
    time: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required"
    if (!formData.genre) newErrors.genre = "Please select a genre"
    if (!formData.sessionType) newErrors.sessionType = "Please select session duration"
    if (!date) newErrors.date = "Please select a date"
    if (!formData.time) newErrors.time = "Please select a time"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePayAndBook = async () => {
  if (!validateForm()) return;
  setIsProcessing(true);

  try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/create-checkout-session`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    ...formData,
    date: date?.toISOString(),
  }),
});

    const { id } = await res.json();

    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: id });
  } catch (err) {
    console.error(err);
    alert("Payment failed. Please try again.");
  } finally {
    setIsProcessing(false);
  }
};

  
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ]

  const sessionPrices = {
    "1hr": 75,
    "2hr": 140,
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Book Your Creative Breakthrough Session
            </h1>
            <p className="text-xl text-gray-300">Transform your musical struggles into artistic triumphs</p>
          </div>

          <Alert className="mb-8 bg-blue-900/20 border-blue-600">
            <Shield className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-blue-200">
              <strong>Secure Booking:</strong> Payment is processed upfront via Stripe. You'll receive your Google Meet
              link immediately after successful payment.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Session Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Musical Genre *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select your genre" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="pop">Pop</SelectItem>
                          <SelectItem value="sad-pop">Sad Pop</SelectItem>
                          <SelectItem value="heartbreak-edm">Heartbreak EDM</SelectItem>
                          <SelectItem value="storytelling-rap">Storytelling Rap</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.genre && <p className="text-red-400 text-sm mt-1">{errors.genre}</p>}
                    </div>
                    <div>
                      <Label className="text-white">Session Duration *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, sessionType: value })}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="1hr">1 Hour - 800 Rs</SelectItem>
                          <SelectItem value="2hr">2 Hours - 1400 Rs</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.sessionType && <p className="text-red-400 text-sm mt-1">{errors.sessionType}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-600">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="text-white"
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <Label className="text-white">Preferred Time *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      What creative challenges are you facing?
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your current struggles, creative blocks, or specific areas where you need guidance..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white"
                      rows={4}
                    />
                  </div>

                  <Button
                    onClick={handlePayAndBook}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                    disabled={isProcessing}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    {isProcessing ? "Processing Payment..." : "Pay & Book Session"}
                  </Button>

                  {Object.keys(errors).length > 0 && (
                    <Alert className="bg-red-900/20 border-red-600">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <AlertDescription className="text-red-200">
                        Please fill in all required fields before proceeding to payment.
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Pricing Summary */}
            <div>
              <Card className="bg-gray-800 border-gray-700 sticky top-4">
                <CardHeader>
                  <CardTitle className="text-white">Session Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="font-semibold text-white">Duration</p>
                      <p className="text-sm text-gray-400">{formData.sessionType || "Not selected"}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Session Fee</span>
                      <span className="font-semibold text-white">
                        ${formData.sessionType ? sessionPrices[formData.sessionType as keyof typeof sessionPrices] : 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-purple-400">
                        ${formData.sessionType ? sessionPrices[formData.sessionType as keyof typeof sessionPrices] : 0}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-white mb-2">What's Included:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 1-on-1 Google Meet session</li>
                      <li>• Personalized creative guidance</li>
                      <li>• Breakthrough techniques & exercises</li>
                      <li>• Follow-up resources & tips</li>
                      <li>• Session recording (optional)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-500/20">
                    <h4 className="font-semibold text-white mb-2">💡 Creative Breakthrough Guarantee</h4>
                    <p className="text-sm text-gray-300">
                      If you don't gain at least one actionable insight to overcome your creative block, I'll refund
                      your session.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
