import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, organization, website, role, message } = req.body;

  try {

    // 1️⃣ Admin Email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RECEIVING_EMAIL,
      subject: "🚀 New Audit Request Submitted",
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2️⃣ User Auto Reply
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "✅ We Received Your Accessibility Audit Request",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to Digital Access.</p>
        <p>We have received your accessibility audit request.</p>
        <p>Our team will review your website and get back to you within 24–48 hours.</p>
        <br/>
        <p>Best Regards,<br/>Digital Access Team</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}