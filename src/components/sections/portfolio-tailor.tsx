'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { generateTailoredSummary } from '@/app/actions';
import { Loader2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const formSchema = z.object({
  jobDescription: z.string().min(50, { message: 'Job description must be at least 50 characters.' }),
  projectExperience: z.string().min(50, { message: 'Project experience must be at least 50 characters.' }),
});

const PortfolioTailorSection = () => {
  const { toast } = useToast();
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: '',
      projectExperience: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsGenerating(true);
    setGeneratedSummary('');
    try {
      const result = await generateTailoredSummary(values);
      if (result.success) {
        setGeneratedSummary(result.summary);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: (error as Error).message || 'There was a problem with your request.',
      });
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <section id="portfolio-tailor" className="py-12 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-3">AI-Powered Portfolio Tailor</h2>
            <p className="text-base text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                Paste a job description and your project experience to let AI highlight your most relevant skills.
            </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="p-6 bg-background shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="jobDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Paste the job description here..." {...field} rows={6} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Project Experience</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe your project experience in detail..." {...field} rows={6} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isGenerating}>
                      {isGenerating ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                      )}
                      {isGenerating ? 'Generating...' : 'Generate Summary'}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="sticky top-24"
            >
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                            <Sparkles className="text-primary"/>
                            Your Tailored Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm dark:prose-invert min-h-[150px]">
                        {isGenerating && (
                            <div className="flex items-center justify-center h-full">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                            </div>
                        )}
                        {!isGenerating && !generatedSummary && (
                            <p className="text-muted-foreground">Your generated summary will appear here.</p>
                        )}
                        {generatedSummary && <ReactMarkdown>{generatedSummary}</ReactMarkdown>}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTailorSection;
