
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-futurity-blue font-montserrat font-bold text-2xl">
            Futurity<span className="text-futurity-orange">.</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button asChild variant="outline">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </nav>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white w-full shadow-md`}>
        <div className="container py-4 flex flex-col space-y-4">
          <NavLinksMobile toggleMenu={toggleMenu} />
          <Button asChild>
            <Link to="/contact" onClick={toggleMenu}>Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="font-medium hover:text-futurity-orange transition-colors">
        Home
      </Link>
      <Link to="/about" className="font-medium hover:text-futurity-orange transition-colors">
        About
      </Link>
      <Link to="/services" className="font-medium hover:text-futurity-orange transition-colors">
        Services
      </Link>
      <Link to="/portfolio" className="font-medium hover:text-futurity-orange transition-colors">
        Portfolio
      </Link>
    </>
  );
};

const NavLinksMobile = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <>
      <Link 
        to="/" 
        className="font-medium py-2 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="font-medium py-2 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className="font-medium py-2 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Services
      </Link>
      <Link 
        to="/portfolio" 
        className="font-medium py-2 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Portfolio
      </Link>
    </>
  );
};

export default Navbar;
