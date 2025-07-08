import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"PixelCrafte" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Subscription Request from ${email}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Subscription Request</title>
          <style>
              body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;}
              .header { background-color: #FF5722; color: #ffffff; padding: 20px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { padding: 30px; line-height: 1.6; color: #333333; }
              .content p { margin: 0 0 15px; }
              .highlight { color: #FF5722; font-weight: bold; font-size: 18px; }
              .footer { text-align: center; font-size: 12px; color: #777777; padding: 20px; background-color: #f9f9f9; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>New Subscription Request</h1>
              </div>
              <div class="content">
                  <p>Hello,</p>
                  <p>You have a new subscriber for your newsletter:</p>
                  <p style="text-align: center; margin: 25px 0;">
                      <span class="highlight">${email}</span>
                  </p>
                  <p>Don't forget to add them to your mailing list!</p>
              </div>
              <div class="footer">
                  <p>This is an automated notification from PixelCrafte.</p>
              </div>
          </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Subscription sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending subscription email.' }), {
      status: 500,
    });
  }
}