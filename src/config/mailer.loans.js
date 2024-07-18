import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const CLIENT_ID = '686166001640-mukohhtq0auaejcfd6udrpjunrea3l7t.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REFRESH_TOKEN = '1//04ebzhSV2dn4ECgYIARAAGAQSNwF-L9Ir2vls28w_fm7V1YWLcoGinmtA0KZ6xBXSV5vdzMtpwSYw9xjq2br9Iu6e2onqeIj73V0';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function createTransporter() {
  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'bibliotecamunicipaljaz@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  transporter.verify().then(() => {
    console.log('Ready to send emails');
  });

  return transporter;
}

export async function sendReminderEmail(email, bookTitle, message) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: 'bibliotecamunicipaljaz@gmail.com',
    to: email,
    subject: 'Recordatorio de Devolución de Libro',
    html: `<div>
      <h1>Recordatorio de Devolución de Libro</h1>
      <p>${message}</p>
      <img style="display: block; margin: 0 auto; width: 150px; height: 70px;" src="https://i.ibb.co/YBZd43z/logo-jaz.png" alt="Logo" />
    </div>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}
