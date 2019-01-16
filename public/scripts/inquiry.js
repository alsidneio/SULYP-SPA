const nodemailer = require('nodemailer');
const {google} = require('googleapis');
require('dotenv').config();

const inquiry = (sender,inquiryEmail,inquiryMessage) =>{
    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT  
    );
    
    
    oauth2Client.setCredentials({
        refresh_token: process.env.RERFRESH_TOKEN,
    });
    
    
    const smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:465,
        secure: true,
        auth: {
             type:"OAuth2",
             user: process.env.USER_EMAIL, 
             clientId: process.env.CLIENT_ID,
             clientSecret:  process.env.CLIENT_SECRET,
             refreshToken: process.env.REFRESH_TOKEN,
        }
    });
    
    const mailOptions = {
        from: ` "${sender}" <${inquiryEmail}>`,
        to: process.env.USER_EMAIL,
        subject: "General Inquiry from Website",
        generateTextFromHTML: true,
        html:`<p> Email: ${inquiryEmail}</p>
        <b>${inquiryMessage}</b>`
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });
}


module.exports = inquiry;