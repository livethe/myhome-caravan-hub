import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              MY HOME
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('aboutDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('home')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/new-customer" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t('newCustomer')}
                </Link>
              </li>
              <li>
                <Link to="/spare-parts" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t('spareParts')}
                </Link>
              </li>
              <li>
                <Link to="/maintenance" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t('maintenance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Saudi Arabia */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('saudiArabia')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>{t('saudiArabia')}</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <a href="tel:0567160888" className="hover:text-primary transition-colors">
                  0567160888
                </a>
              </li>
            </ul>
          </div>

          {/* Contact - UAE */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('uae')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>{t('uae')}</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <a href="tel:0567160888" className="hover:text-primary transition-colors">
                  0567160888
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MY HOME. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
