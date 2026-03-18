'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Loader2, Github, Linkedin, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: (error as Error).message || 'There was a problem with your request.',
      });
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary underline decoration-wavy decoration-primary/50 underline-offset-8 mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
        </motion.div>

        {/* Social Media Links Hub */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16"
        >
             <a href="https://x.com/Harshkr04_19?t=mJRp9uIuzQINXol5pjV3DA&s=08" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
               <Twitter className="w-6 h-6" />
             </a>
             <a href="https://github.com/harshkr0011" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
               <Github className="w-6 h-6" />
             </a>
             <a href="https://www.linkedin.com/in/harsh-kumar-1b359b21a/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
               <Linkedin className="w-6 h-6" />
             </a>
             <a href="https://www.youtube.com/@KnowledgeWallahHarsh" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
               <Youtube className="w-6 h-6" />
             </a>
             <a href="https://www.instagram.com/kaushik0419?igsh=c2t0dXl2OGFqcXBr" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
               <Instagram className="w-6 h-6" />
             </a>
             <a href="https://www.facebook.com/share/16gagkwwCt/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
               <Facebook className="w-6 h-6" />
             </a>
        </motion.div>
        
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-8 bg-background shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] inline-flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Dummy Card component to resolve compilation error
const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={className}>{children}</div>
);


export default ContactSection;
