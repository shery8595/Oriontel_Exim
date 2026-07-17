import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  website?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  const body = req.body as ContactPayload;
  const { name, email, company, phone, subject, message, website } = body;

  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Please fill in all required fields' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: 'One or more fields exceed the maximum length' });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || 'oriontelexim@gmail.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'ORIONTEL EXIM <onboarding@resend.dev>';

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email.trim(),
      subject: `[Website Inquiry] ${subject.trim()}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #011627;">
          <div style="background: #011627; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #41EAD4; margin: 0; font-size: 20px;">New Strategic Inquiry</h1>
            <p style="color: #FDFFFC; opacity: 0.7; margin: 8px 0 0; font-size: 14px;">ORIONTEL EXIM Website</p>
          </div>
          <div style="background: #f8fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0;">${escapeHtml(name.trim())}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></td>
              </tr>
              ${company ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Company</td><td style="padding: 8px 0;">${escapeHtml(company.trim())}</td></tr>` : ''}
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone.trim())}</td></tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280; vertical-align: top;">Subject</td>
                <td style="padding: 8px 0;">${escapeHtml(subject.trim())}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="font-weight: 600; color: #6b7280; margin: 0 0 8px;">Message</p>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message.trim())}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send inquiry. Please try again or contact us directly.' });
    }

    return res.status(200).json({ success: true, message: 'Your inquiry has been submitted successfully.' });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
}
