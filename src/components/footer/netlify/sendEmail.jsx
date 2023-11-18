// netlify/sendEmail.js

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const { namaDepan, namaBelakang, email, subject, pesan } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      // Your email service configuration
      service: 'gmail',
      auth: {
        user: 'ahlilfikri49@gmail.com',
        pass: 'futari1234',
      },
    });

    const mailOptions = {
      from: 'ahlilfikri49@gmail.com',
      to: 'ahlilfikri94@example.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Nama Depan: ${namaDepan}
        Nama Belakang: ${namaBelakang}
        Email: ${email}
        Subject: ${subject}
        Pesan: ${pesan}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', info }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
