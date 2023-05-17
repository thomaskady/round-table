const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

export const GET = async () => {
    console.log('test');
    mg.messages.create('sandboxac2c34f7810c44a5af71939d429ec327.mailgun.org', {
        from: "Round Table <mailgun@sandboxac2c34f7810c44a5af71939d429ec327.mailgun.org>",
        to: ["19709806253@tmomail.net"],
        subject: "Good morning",
        text: "Start today's journey <link>",
        html: "<h1>Start today's journey!</h1>"
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


    const response = 'TEST';
    
    return new Response(JSON.stringify(response));
}