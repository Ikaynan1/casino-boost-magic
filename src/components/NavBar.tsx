
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-dark via-gold to-gold-light">
                PREMIUM PLAY
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#games">Games</NavLink>
              <NavLink href="#bonus">Bonus</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <div className="ml-4">
                <Button className="primary-button">
                  Play Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-navy-dark/95 backdrop-blur-md animate-fade-in">
          <MobileNavLink href="#games">Games</MobileNavLink>
          <MobileNavLink href="#bonus">Bonus</MobileNavLink>
          <MobileNavLink href="#about">About</MobileNavLink>
          <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
          <div className="pt-4 pb-2">
            <Button className="primary-button w-full">
              Play Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-background/90 hover:text-foreground transition-colors duration-200"
  >
    {children}
  </a>
);

export default NavBar;
