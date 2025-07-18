'use server';

/**
 * @fileOverview Generates a personalized welcome message based on the visitor's referrer.
 *
 * - generatePersonalizedWelcome - A function that generates a personalized welcome message.
 * - PersonalizedWelcomeInput - The input type for the generatePersonalizedWelcome function.
 * - PersonalizedWelcomeOutput - The return type for the generatePersonalizedWelcome function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWelcomeInputSchema = z.object({
  referrer: z
    .string()
    .describe('The referrer URL of the visitor, or null if there is none.'),
});
export type PersonalizedWelcomeInput = z.infer<typeof PersonalizedWelcomeInputSchema>;

const PersonalizedWelcomeOutputSchema = z.object({
  message: z
    .string()
    .describe('A personalized welcome message based on the referrer.'),
});
export type PersonalizedWelcomeOutput = z.infer<typeof PersonalizedWelcomeOutputSchema>;

export async function generatePersonalizedWelcome(
  input: PersonalizedWelcomeInput
): Promise<PersonalizedWelcomeOutput> {
  return personalizedWelcomeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedWelcomePrompt',
  input: {schema: PersonalizedWelcomeInputSchema},
  output: {schema: PersonalizedWelcomeOutputSchema},
  prompt: `You are a website copywriter who specializes in personalized welcome messages.

  Generate a personalized welcome message for a visitor to a web developer portfolio website.

  The message should be tailored to the visitor's referrer, if available. If there is no referrer, generate a generic welcome message.

  Referrer: {{{referrer}}}
  `,
});

const personalizedWelcomeFlow = ai.defineFlow(
  {
    name: 'personalizedWelcomeFlow',
    inputSchema: PersonalizedWelcomeInputSchema,
    outputSchema: PersonalizedWelcomeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
