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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-futurity-blue py-4'}`}>
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-orange-400 mr-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="8" height="8" rx="2" fill="currentColor"/>
              <rect x="2" y="14" width="8" height="8" rx="2" fill="currentColor"/>
              <rect x="14" y="2" width="8" height="8" rx="2" fill="currentColor"/>
            </svg>
          </div>
          <span className={`font-montserrat font-bold text-2xl ${scrolled ? 'text-futurity-blue' : 'text-white'}`}>
            FUturity<span className="text-futurity-orange">.</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks scrolled={scrolled} />
          <Button asChild className="bg-futurity-orange hover:bg-futurity-orange/90 border-0">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>
        
        <button className={`md:hidden ${scrolled ? 'text-futurity-blue' : 'text-white'}`} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white w-full shadow-md`}>
        <div className="container py-4 flex flex-col space-y-4">
          <NavLinksMobile toggleMenu={toggleMenu} />
          <Button asChild className="bg-futurity-orange hover:bg-futurity-orange/90 border-0">
            <Link to="/contact" onClick={toggleMenu}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ scrolled = false }: { scrolled?: boolean }) => {
  return (
    <>
      <Link to="/" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Home
      </Link>
      <Link to="/about" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        About
      </Link>
      <Link to="/services" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Services
      </Link>
      <Link to="/portfolio" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Portfolio
      </Link>
      <Link to="/reviews" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Customer Review
      </Link>
      <Link to="/blog" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Blog
      </Link>
      <Link to="/contact" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Contact
      </Link>
    </>
  );
};

const NavLinksMobile = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <>
      <Link 
        to="/" 
        className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Services
      </Link>
      <Link 
        to="/portfolio" 
        className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Portfolio
      </Link>
      <Link 
        to="/reviews" 
        className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Customer Review
      </Link>
      <Link 
        to="/blog" 
        className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Blog
      </Link>
      <Link 
        to="/contact" 
        className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors"
        onClick={toggleMenu}
      >
        Contact
      </Link>
    </>
  );
};

export default Navbar;
