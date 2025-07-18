'use server';

import { z } from 'zod';
import { generatePersonalizedWelcome } from '@/ai/flows/personalized-welcome';
import { tailorExperience, type TailorExperienceInput } from '@/ai/flows/tailor-experience';


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

export async function submitContactForm(data: unknown) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  // In a real application, you would integrate with an email service like Resend or SendGrid here.
  // For this example, we'll just log the data and simulate a successful submission.
  console.log('New contact form submission:');
  console.log(result.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Message sent successfully!' };
}
