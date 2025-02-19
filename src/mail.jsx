const sendBookingEmail = async (bookingData) => {
  try {
    const response = await fetch("./../.netlify/functions/mailer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookingData }),
    });
    // console.log({ bookingData });
    const result = await response.json();
    if (response.ok) {
      console.log("Email sent successfully:", result.message);
    } else {
      console.error("Failed to send email:", result.error);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export default sendBookingEmail;
