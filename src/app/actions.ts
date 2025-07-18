'use server';

import { z } from 'zod';
import { generatePersonalizedWelcome } from '@/ai/flows/personalized-welcome';
import { tailorExperience, type TailorExperienceInput } from '@/ai/flows/tailor-experience';
import { Resend } from 'resend';


// --- AI WELCOME ACTION ---
export async function getWelcomeMessage(referrer: string | null) {
  try {
    const response = await generatePersonalizedWelcome({ referrer: referrer || 'direct' });
    return response;
  } catch (error) {
    console.error("AI welcome message generation failed:", error);
    // Return a graceful fallback message
    return { message: "Welcome to my digital space. Let's build something amazing." };
  }
}

// --- PORTFOLIO TAILOR ACTION ---
export async function generateTailoredSummary(input: TailorExperienceInput) {
    try {
        const response = await tailorExperience(input);
        return { success: true, summary: response.summary };
    } catch (error) {
        console.error("AI summary generation failed:", error);
        return { success: false, message: 'Failed to generate summary. Please try again.' };
    }
}


// --- CONTACT FORM ACTION ---
const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const resend = new Resend('re_5WYSDcgE_LKVX2QqF4gECNsBBayePSumo');

export async function submitContactForm({ name, email, message }: { name: string; email: string; message: string }) {
  try {
    // For best deliverability, use the default Resend onboarding address for testing.
    // For production, verify your own domain and use it as the 'from' address.
    const response = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'harshkr5454@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });
    console.log('Resend API response:', response);
    return { success: true };
  } catch (error: any) {
    console.error('Resend API error:', error);
    return { success: false, message: error.message || 'Failed to send message.' };
  }
}
