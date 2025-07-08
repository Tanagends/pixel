import nodemailer from 'nodemailer';

export async function POST(req) {
    
  const { email, phone, serviceDescription } = await req.json();

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
    subject: `New Quote Request from ${email}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Quote Request</title>
          <style>
              body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;}
              .header { background-color: #FF5722; color: #ffffff; padding: 20px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { padding: 30px; line-height: 1.6; color: #333333; }
              .content p { margin: 0 0 15px; }
              .details { background-color: #f9f9f9; border-left: 4px solid #FF5722; padding: 15px; margin: 20px 0; }
              .details strong { display: block; color: #555555; margin-bottom: 5px; }
              .footer { text-align: center; font-size: 12px; color: #777777; padding: 20px; background-color: #f9f9f9; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>New Quote Request</h1>
              </div>
              <div class="content">
                  <p>Hello,</p>
                  <p>You have received a new request for a quote. Here are the details:</p>
                  <div class="details">
                      <strong>Email:</strong>
                      <p>${email}</p>
                      <strong>Phone:</strong>
                      <p>${phone || 'Not provided'}</p>
                      <strong>Service Description:</strong>
                      <p>${serviceDescription}</p>
                  </div>
                  <p>Please follow up with them as soon as possible.</p>
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
    return new Response(JSON.stringify({ message: 'Quote request sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending quote request email.' }), {
      status: 500,
    });
  }
}