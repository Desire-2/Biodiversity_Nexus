import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 587,
      secure: false,
      auth: {
        user: 'biodiversitynexus@yahoo.com',
        pass: 'youth@#1'
      }
    });

    try {
      // Send email
      await transporter.sendMail({
        from: email, // Sender's email address from the form
        to: 'biodiversitynexus@yahoo.com', // Receiver's email address
        subject: 'New Contact Form Submission',
        html: `
          <div>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
        `
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
