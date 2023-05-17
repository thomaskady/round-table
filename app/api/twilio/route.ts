const SID = process.env.TWILIO_SID;
const auth = process.env.TWILIO_AUTH;
const phone = process.env.TWILIO_PHONE;

const client = require('twilio')(SID, auth);

export const GET = async () => {
    client.messages.create({body: 'Hello from Twilio', from: phone, to: "+19709806253"}).then((message: any) => console.log(message, message.sid));

    console.log(SID, auth, phone);

    const response = 'TEST';
    
    return new Response(JSON.stringify(response));
}