import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Wrench, Settings, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070)',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/new-customer">
              <Button size="lg" className="bg-gradient-gold text-background hover:opacity-90">
                {t('orderNew')}
              </Button>
            </Link>
            <Link to="/maintenance">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
                {t('requestMaintenance')}
              </Button>
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mt-16">
            <Link to="/new-customer" className="group">
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-2">🆕</div>
                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                  {t('newCustomer')}
                </h3>
              </div>
            </Link>

            <Link to="/existing-customer" className="group">
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-2">📋</div>
                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                  {t('trackCaravan')}
                </h3>
              </div>
            </Link>

            <Link to="/projects" className="group">
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                  {t('projects')}
                </h3>
              </div>
            </Link>

            <Link to="/spare-parts" className="group">
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-2">🔧</div>
                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                  {t('spareParts')}
                </h3>
              </div>
            </Link>

            <Link to="/maintenance" className="group">
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                  {t('maintenance')}
                </h3>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-2">📞</div>
                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">
                  {t('contact')}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('servicesTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('servicesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Settings}
              title={t('customManufacturing')}
              description={t('customManufacturingDesc')}
            />
            <ServiceCard
              icon={Package}
              title={t('fullEquipment')}
              description={t('fullEquipmentDesc')}
            />
            <ServiceCard
              icon={Wrench}
              title={t('maintenanceService')}
              description={t('maintenanceServiceDesc')}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-gold rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-background mb-4">
              {t('getQuote')}
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('contactDesc')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                {t('contact')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
