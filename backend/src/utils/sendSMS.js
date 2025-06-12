import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = async (to, body) => {
  try {
    await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE, // Your Twilio phone number
      to, // Must be in E.164 format: +91XXXXXXXXXX
    });
    console.log(`✅ SMS sent to ${to}`);
  } catch (error) {
    console.error("❌ Error sending SMS:", error.message);
  }
};

export default sendSMS;
