import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-futurity-blue text-white">
      <div className="container-wide pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/Futurity_Logo_Dark_Background.svg"
                alt="Futurity Logo"
                className="h-8 w-auto mr-2"
              />
            </Link>
            <p className="text-white/80 max-w-xs">
              We create digital experiences that matter. Transforming businesses through innovative design and technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/about-futurity">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              {/* <FooterLink href="/blog">Blog</FooterLink> */}
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services#web-development">
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Web Development
                </span>
              </FooterLink>
              <FooterLink href="/services#digital-marketing">
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Digital Marketing
                </span>
              </FooterLink>
              <FooterLink href="/services#ui-ux-design">
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  UX Design
                </span>
              </FooterLink>
              <FooterLink href="/services#branding">
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Branding
                </span>
              </FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-futurity-orange mt-1 flex-shrink-0" />
                <span>Based in Leamington spa, Warwickshire.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-futurity-orange flex-shrink-0" />
                <a href="tel:+447356250335" className="hover:underline text-white/80">+44 7356 250335</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-futurity-orange flex-shrink-0" />
                <span>info@futurity.biz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-b border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-6 text-white/80">Stay updated with our latest insights and industry trends.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-futurity-orange hover:bg-futurity-orange/90 border-0 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm">
          <p>© {currentYear} Futurity. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link to={href} className="text-white/70 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
