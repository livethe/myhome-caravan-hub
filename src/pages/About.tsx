import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  const processSteps = language === 'ar' ? [
    { title: 'التصميم', description: 'نبدأ بتصميم دقيق يلبي احتياجاتك' },
    { title: 'اللحام والهيكل', description: 'بناء هيكل قوي ومتين' },
    { title: 'العزل والدهان', description: 'عزل حراري وصوتي ممتاز' },
    { title: 'الكهرباء والسباكة', description: 'تركيب أنظمة حديثة وآمنة' },
    { title: 'التشطيب الداخلي', description: 'إضافة اللمسات النهائية الفاخرة' },
  ] : [
    { title: 'Design', description: 'We start with precise design that meets your needs' },
    { title: 'Welding & Structure', description: 'Building a strong and durable structure' },
    { title: 'Insulation & Paint', description: 'Excellent thermal and sound insulation' },
    { title: 'Electrical & Plumbing', description: 'Installing modern and safe systems' },
    { title: 'Interior Finishing', description: 'Adding luxurious final touches' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('aboutTitle')}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('aboutDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'مراحل التصنيع' : 'Manufacturing Process'}
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start bg-card p-6 rounded-lg border border-border hover:border-primary transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {language === 'ar' ? 'لماذا نحن؟' : 'Why Choose Us?'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                language === 'ar' ? 'خبرة واسعة في التصنيع' : 'Extensive manufacturing experience',
                language === 'ar' ? 'مواد عالية الجودة' : 'High quality materials',
                language === 'ar' ? 'ضمان على جميع الأعمال' : 'Warranty on all work',
                language === 'ar' ? 'توصيل للسعودية والإمارات' : 'Delivery to Saudi Arabia and UAE',
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
