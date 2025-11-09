import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/new-customer', label: t('newCustomer') },
    { to: '/existing-customer', label: t('existingCustomer') },
    { to: '/spare-parts', label: t('spareParts') },
    { to: '/maintenance', label: t('maintenance') },
    { to: '/contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              MY HOME
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary"
            >
              <Languages className="h-5 w-5" />
            </Button>
            
            <Button className="hidden md:inline-flex bg-gradient-gold text-background hover:opacity-90">
              {t('getQuote')}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-gradient-gold text-background hover:opacity-90 mt-4">
              {t('getQuote')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
