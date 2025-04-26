
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-futurity-blue text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white font-montserrat font-bold text-2xl mb-2">
              Futurity<span className="text-futurity-orange">.</span>
            </Link>
            <p className="text-gray-300 max-w-xs">
              We create digital experiences that drive meaningful results for ambitious brands.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services#web-development">Web Development</FooterLink>
              <FooterLink href="/services#mobile-apps">Mobile Apps</FooterLink>
              <FooterLink href="/services#ui-ux-design">UI/UX Design</FooterLink>
              <FooterLink href="/services#digital-marketing">Digital Marketing</FooterLink>
              <FooterLink href="/services#branding">Branding</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/portfolio">Our Work</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-futurity-orange" />
                <span>hello@futurity.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-futurity-orange" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-futurity-orange mt-1" />
                <span>123 Innovation Drive<br />San Francisco, CA 94105</span>
              </li>
            </ul>
            <Button asChild className="mt-4" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {currentYear} Futurity Digital Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-futurity-orange transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link to={href} className="text-gray-300 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
