import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({success: false, message: 'Method not allowed'});
  }

  const {name, email, subject, message} = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({success: false, message: 'All fields are required'});
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({success: false, message: 'Invalid email address'});
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const contactEmail = process.env.CONTACT_EMAIL || 'andy@charlwood.xyz';

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: contactEmail,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #005EB8; border-bottom: 2px solid #005EB8; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="padding: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from your CV website contact form.
          </p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Andy Charlwood" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for getting in touch!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #005EB8; border-bottom: 2px solid #005EB8; padding-bottom: 10px;">
            Thanks for your message, ${name}!
          </h2>
          <p style="line-height: 1.6;">
            I've received your message and will get back to you as soon as possible.
          </p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <p style="line-height: 1.6;">
            Best regards,<br/>
            <strong>Andy Charlwood</strong><br/>
            Clinical Pharmacist & Digital Health Innovator
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    return res.status(200).json({success: true, message: 'Message sent successfully!'});
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({success: false, message: 'Failed to send message. Please try again.'});
  }
}
