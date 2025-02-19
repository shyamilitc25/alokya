const nodemailer = require("nodemailer");
require("dotenv").config();

exports.handler = async (event, context) => {
  try {
    const { bookingData } = JSON.parse(event.body);
    // VITE_EMAIL_USER=aleykaayurveda@gmail.com
    // VITE_EMAIL_PASSWORD=AleykaAkhilAmrutha@278411
    // Set up the email transport using your SMTP server (example: Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_EMAIL_USER, // Use email from .env file
        pass: process.env.VITE_EMAIL_PASSWORD,
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.VITE_EMAIL_USER,
      to: bookingData.customerEmail,
      subject: "Buchungsbestätigung bei Aleyka Ayurveda", // Booking confirmation in German
      text: `Hello ${bookingData.customerName},\n\nwir freuen uns, Ihre Massagebuchung bei Aleyka Ayurveda zu bestätigen\n\nDatum: ${bookingData.bookingDetails.date}\nUhrzeit: ${bookingData.bookingDetails.time}\nMassage: ${bookingData.bookingDetails.massage} (${bookingData.bookingDetails.duration})\n\nOrt:      Weststraße 37\n            57392 Schmallenberg\n\nWenn Sie die Buchung ändern oder stornieren möchten, kontaktieren Sie uns bitte unter \n0160 5607278\n\nViele Grüße\nAkhil (Aleyka Ayurveda)`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error in mailer function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
