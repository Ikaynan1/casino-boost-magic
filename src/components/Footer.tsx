
import { Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-5">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold to-gold-light">
                PREMIUM PLAY
              </span>
            </div>
            <p className="mb-4">
              A premium entertainment platform offering the best gaming experience with generous bonuses and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Instagram} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#games">Games</FooterLink>
              <FooterLink href="#bonus">Bonus</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Games</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Table Games</FooterLink>
              <FooterLink href="#">Card Games</FooterLink>
              <FooterLink href="#">Live Dealers</FooterLink>
              <FooterLink href="#">Game Shows</FooterLink>
              <FooterLink href="#">New Releases</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span>support@premiumplay.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span>24/7 Live Chat Support</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span>Operated by Play Entertainment Ltd.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Premium Play. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <p className="text-white/60 text-sm text-center md:text-right">
                This website is for adults (18+). Play responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a 
    href={href} 
    className="bg-white/10 hover:bg-white/20 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="hover:text-white transition-colors duration-300 inline-block"
    >
      {children}
    </a>
  </li>
);

export default Footer;
