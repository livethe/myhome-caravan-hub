import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      titleAr: 'كرفان سكني - الرياض',
      titleEn: 'Residential Caravan - Riyadh',
      descAr: 'كرفان سكني مجهز بالكامل مع غرفة نوم وحمام ومطبخ',
      descEn: 'Fully equipped residential caravan with bedroom, bathroom and kitchen',
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070',
    },
    {
      id: 2,
      titleAr: 'كرفان مكتبي - جدة',
      titleEn: 'Office Caravan - Jeddah',
      descAr: 'كرفان مكتبي لموقع بناء مع تجهيزات كاملة',
      descEn: 'Office caravan for construction site with complete equipment',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070',
    },
    {
      id: 3,
      titleAr: 'كرفان كافيه - دبي',
      titleEn: 'Cafe Caravan - Dubai',
      descAr: 'كرفان متحرك مجهز كمقهى متنقل',
      descEn: 'Mobile caravan equipped as a mobile cafe',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c3a5?q=80&w=2070',
    },
    {
      id: 4,
      titleAr: 'كرفان عمال - الخبر',
      titleEn: 'Workers Caravan - Khobar',
      descAr: 'كرفان لإقامة العمال مع مرافق كاملة',
      descEn: 'Workers accommodation caravan with complete facilities',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    },
    {
      id: 5,
      titleAr: 'كرفان مطعم - أبوظبي',
      titleEn: 'Restaurant Caravan - Abu Dhabi',
      descAr: 'كرفان مطعم متنقل بتجهيزات احترافية',
      descEn: 'Mobile restaurant caravan with professional equipment',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    },
    {
      id: 6,
      titleAr: 'كرفان حراسة - الدمام',
      titleEn: 'Security Caravan - Dammam',
      descAr: 'كرفان حراسة للمواقع والمشاريع',
      descEn: 'Security caravan for sites and projects',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {t('projectsTitle')}
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            {t('projectsDesc')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.titleAr}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {t('language') === 'ar' ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('language') === 'ar' ? project.descAr : project.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('startYourProject')}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('startYourProjectDesc')}
          </p>
          <a href="/new-customer" className="inline-block">
            <button className="bg-gradient-gold text-background px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              {t('orderNew')}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
