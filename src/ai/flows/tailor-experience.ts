'use server';
/**
 * @fileOverview A flow to generate a tailored summary based on a job description and project experience.
 *
 * - tailorExperience - A function that handles the summary generation process.
 * - TailorExperienceInput - The input type for the tailorExperience function.
 * - TailorExperienceOutput - The return type for the tailorExperience function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorExperienceInputSchema = z.object({
  jobDescription: z.string().describe('The job description to tailor the experience to.'),
  projectExperience: z.string().describe('The user\'s project experience.'),
});
export type TailorExperienceInput = z.infer<typeof TailorExperienceInputSchema>;

const TailorExperienceOutputSchema = z.object({
  summary: z.string().describe('A tailored summary highlighting the most relevant skills and experience.'),
});
export type TailorExperienceOutput = z.infer<typeof TailorExperienceOutputSchema>;

export async function tailorExperience(input: TailorExperienceInput): Promise<TailorExperienceOutput> {
  return tailorExperienceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorExperiencePrompt',
  input: {schema: TailorExperienceInputSchema},
  output: {schema: TailorExperienceOutputSchema},
  prompt: `You are an expert career coach specializing in helping web developers tailor their resumes and cover letters. Your task is to generate a concise and impactful summary that highlights how a developer's experience aligns with a specific job description.

Analyze the provided Job Description and the developer's Project Experience.

Your generated summary should:
- Be 2-4 sentences long.
- Directly address the key requirements and technologies mentioned in the job description.
- Use strong action verbs and professional language.
- Emphasize the most relevant skills and accomplishments from the developer's experience.
- Do not invent skills or experiences. Base the summary strictly on the information provided.

Job Description:
---
{{{jobDescription}}}
---

Developer's Project Experience:
---
{{{projectExperience}}}
---

Generate the tailored summary based on this information.`,
});

const tailorExperienceFlow = ai.defineFlow(
  {
    name: 'tailorExperienceFlow',
    inputSchema: TailorExperienceInputSchema,
    outputSchema: TailorExperienceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
