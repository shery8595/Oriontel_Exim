import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email sending function
async function sendEmail(params: {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  try {
    await sgMail.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || "",
      html: params.html || ""
    });
    return true;
  } catch (error) {
    console.error("SendGrid email error:", error);
    return false;
  }
}

// Email template function
function createContactEmailTemplate(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #1e293b; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
        New Contact Form Submission - ORIONTEL EXIM
      </h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #475569; margin-top: 0;">Contact Details</h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.email}</td>
          </tr>
          ${data.company ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Company:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.company}</td>
          </tr>
          ` : ""}
          ${data.phone ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.phone}</td>
          </tr>
          ` : ""}
        </table>
      </div>
      
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
        <h3 style="color: #475569; margin-top: 0;">Message</h3>
        <p style="color: #1e293b; line-height: 1.6; margin: 0;">${data.message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="color: #64748b; font-size: 14px; margin: 0;">
          This email was sent from the ORIONTEL EXIM website contact form.
        </p>
      </div>
    </div>
  `;
  
  const text = `
New Contact Form Submission - ORIONTEL EXIM

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ""}
${data.phone ? `Phone: ${data.phone}` : ""}

Message:
${data.message}

This email was sent from the ORIONTEL EXIM website contact form.
  `;
  
  return { html, text };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const validatedData = insertContactSchema.parse(req.body);
    
    const emailTemplate = createContactEmailTemplate({
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company || undefined,
      phone: validatedData.phone || undefined,
      message: validatedData.message
    });

    const emailSent = await sendEmail({
      to: "oriontelexim@gmail.com",
      from: "noreply@oriontelexim.com", // This should be a verified sender domain
      subject: `New Contact Form Submission - ${validatedData.name}`,
      text: emailTemplate.text,
      html: emailTemplate.html
    });

    if (!emailSent) {
      console.error("Failed to send email notification");
    }

    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      emailSent,
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours."
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Please check your form inputs",
        errors: error.errors
      });
    } else {
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred. Please try again later."
      });
    }
  }
}
