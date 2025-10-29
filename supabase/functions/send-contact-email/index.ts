import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  diagnosis: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, diagnosis, message }: ContactFormRequest = await req.json();

    console.log("Processing contact form submission from:", email);

    // Send notification email to law firm
    const notificationEmail = await resend.emails.send({
      from: "Schilling Law Firm <onboarding@resend.dev>",
      to: ["contact@schillinglawfirm.com"], // Replace with actual law firm email
      subject: `New Contact Form Submission - ${diagnosis}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Diagnosis:</strong> ${diagnosis}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to user
    const confirmationEmail = await resend.emails.send({
      from: "Schilling Law Firm <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Message - Schilling Law Firm",
      html: `
        <h1>Thank you for contacting Schilling Law Firm, ${firstName}!</h1>
        <p>We have received your message regarding ${diagnosis} and will get back to you within 24 hours.</p>
        <p>Our team is reviewing your case and will contact you at ${phone} or ${email} soon.</p>
        <br>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>The Schilling Law Firm Team</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
