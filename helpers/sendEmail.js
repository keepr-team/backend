const nodemailer = require('nodemailer');

const sendEmail = function(req, res, next){
  nodemailer.createTestAccount((err, account) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    let mailOptions = {
        from: '<ngasal@mail.com>', 
        to: 'heraldoyusrontris@gmail.com', 
        subject: 'Hello ✔', 
        text: "Ini shortUrlnya"+shortUrl, 
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send({message: "message error", error: error})
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send({message:`message has been sent to ${mailOptions.to}`, result: info.message, preview: nodemailer.getTestMessageUrl(info)})
    });
  });
}

module.exports = sendEmail;