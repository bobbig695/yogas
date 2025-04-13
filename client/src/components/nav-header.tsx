import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-heading">
            Serenity<span className="text-accent">Yoga</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link text-neutral-900 hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="nav-link text-neutral-900 hover:text-primary transition-colors">
            About
          </a>
          <a href="#classes" className="nav-link text-neutral-900 hover:text-primary transition-colors">
            Classes
          </a>
          <a href="#schedule" className="nav-link text-neutral-900 hover:text-primary transition-colors">
            Schedule
          </a>
          <a href="#testimonials" className="nav-link text-neutral-900 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full transition-colors font-medium"
          >
            Get Started
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white w-full absolute top-full left-0 p-4 shadow-md`}
      >
        <nav className="flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-neutral-900 hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-neutral-900 hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#classes" 
            className="text-neutral-900 hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            Classes
          </a>
          <a 
            href="#schedule" 
            className="text-neutral-900 hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            Schedule
          </a>
          <a 
            href="#testimonials" 
            className="text-neutral-900 hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="bg-primary text-white px-5 py-2 rounded-full transition-colors font-medium text-center mt-2"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;
