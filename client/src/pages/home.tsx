import NavHeader from "@/components/nav-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ClassesSection from "@/components/classes-section";
import ScheduleSection from "@/components/schedule-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <NavHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <ScheduleSection />
        <TestimonialsSection />
        <div className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-2">
                  Ready to Transform Your Practice?
                </h2>
                <p className="text-white/80">
                  Join our community today and get 20% off your first month.
                </p>
              </div>
              <a
                href="#contact"
                className="bg-white hover:bg-neutral-100 text-primary px-8 py-3 rounded-full transition-colors font-medium text-lg"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
