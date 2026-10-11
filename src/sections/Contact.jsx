import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-25 relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Contact me
          </p>

          <a
            href="mailto:letsioumaria1@gmail.com"
            className="inline-flex items-center gap-3 text-2xl md:text-2xl font-semibold text-white hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
            letsioumaria1@gmail.com
          </a>
      <p></p>
          <a
            href="tel:+46790398304"
            className="inline-flex items-center gap-3 text-2xl md:text-2xl font-semibold text-white hover:text-primary transition-colors duration-300"
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8" />
            +46 79 039 83 04
          </a>
        </div>
      </div>
    </section>
  );
};