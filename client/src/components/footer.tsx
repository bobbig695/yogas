import { Mail, Phone, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-heading text-xl font-medium mb-4">
              SerenityYoga
            </h3>
            <p className="text-white/70 mb-6">
              Transforming lives through mindful movement and breathwork,
              wherever you are in the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Classes</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#classes"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Gentle Flow
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Power Vinyasa
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Yin Yoga
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Meditation
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Prenatal Yoga
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Restorative Yoga
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-primary mr-3 mt-1 h-5 w-5" />
                <span className="text-white/70">info@serenityyoga.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary mr-3 mt-1 h-5 w-5" />
                <span className="text-white/70">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-primary mr-3 mt-1 h-5 w-5" />
                <span className="text-white/70">
                  Mon-Fri: 6am - 8pm
                  <br />
                  Sat-Sun: 8am - 6pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SerenityYoga. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
