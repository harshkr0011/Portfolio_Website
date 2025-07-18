'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { services } from '@/data';

const ServicesSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">What I Offer</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            From crafting beautiful frontends to building robust backends, I provide a comprehensive suite of services to bring your digital vision to life.
            </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  offscreen: { x: -100, opacity: 0 },
                  onscreen: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: index * 0.2 }
                  }
                }}
              >
                <AccordionItem value={`item-${index}`} className="bg-secondary rounded-lg border-l-4 border-primary shadow-sm">
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-8 w-8 text-primary" />
                      <span className="font-headline text-xl font-semibold">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground">{service.description}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
