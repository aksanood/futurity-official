import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, isStaff, logout } = useAuth();

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

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-futurity-blue py-4'}`}>
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={scrolled ? "/Futurity_Logo_Light_Background.svg" : "/Futurity_Logo_Dark_Background.svg"} 
            alt="Futurity Logo" 
            className="h-8 w-auto mr-2" 
            style={{
              maxHeight: scrolled ? 30 : 32
            }} 
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks scrolled={scrolled} />
          
          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {isStaff && (
                  <Button asChild variant="ghost" className={`${scrolled ? 'text-futurity-blue hover:text-futurity-orange' : 'text-white hover:text-white/80'}`}>
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className={`${scrolled ? 'text-futurity-blue hover:text-futurity-orange' : 'text-white hover:text-white/80'}`}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild variant="ghost" className={`${scrolled ? 'text-futurity-blue hover:text-futurity-orange' : 'text-white hover:text-white/80'}`}>
                <Link to="/auth" className="flex items-center gap-2">
                  <LogIn size={16} />
                  Login
                </Link>
              </Button>
            )}
            
            <Button asChild className="bg-futurity-orange hover:bg-futurity-orange/90 border-0">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </nav>
        
        <button className={`md:hidden ${scrolled ? 'text-futurity-blue' : 'text-white'}`} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white w-full shadow-md`}>
        <div className="container py-4 flex flex-col space-y-4">
          <NavLinksMobile toggleMenu={toggleMenu} />
          
          {/* Mobile auth buttons */}
          {isAuthenticated ? (
            <>
              {isStaff && (
                <Button asChild variant="ghost" className="text-gray-800 hover:text-futurity-orange justify-start">
                  <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
                </Button>
              )}
              <Button 
                variant="ghost" 
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-gray-800 hover:text-futurity-orange justify-start"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button asChild variant="ghost" className="text-gray-800 hover:text-futurity-orange justify-start">
              <Link to="/auth" onClick={toggleMenu} className="flex items-center gap-2">
                <LogIn size={16} />
                Login
              </Link>
            </Button>
          )}
          
          <Button asChild className="bg-futurity-orange hover:bg-futurity-orange/90 border-0">
            <Link to="/contact" onClick={toggleMenu}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({
  scrolled = false
}: {
  scrolled?: boolean;
}) => {
  return (
    <>
      <Link to="/" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Home
      </Link>
      <Link to="/about-futurity" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        About
      </Link>
      <Link to="/services" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Services
      </Link>
      <Link to="/portfolio" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Portfolio
      </Link>
      <Link to="/reviews" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>Reviews</Link>
      <Link to="/contact" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-futurity-orange' : 'text-white/90 hover:text-white'}`}>
        Contact
      </Link>
    </>
  );
};

const NavLinksMobile = ({
  toggleMenu
}: {
  toggleMenu: () => void;
}) => {
  return (
    <>
      <Link to="/" className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors" onClick={toggleMenu}>
        Home
      </Link>
      <Link to="/about-futurity" className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors" onClick={toggleMenu}>
        About
      </Link>
      <Link to="/services" className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors" onClick={toggleMenu}>
        Services
      </Link>
      <Link to="/portfolio" className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors" onClick={toggleMenu}>
        Portfolio
      </Link>
      <Link to="/reviews" className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors" onClick={toggleMenu}>
        Customer Reviews
      </Link>
      <Link to="/contact" className="font-medium py-2 text-gray-800 hover:text-futurity-orange transition-colors" onClick={toggleMenu}>
        Contact
      </Link>
    </>
  );
};

export default Navbar;
