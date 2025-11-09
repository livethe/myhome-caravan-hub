import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DoorOpen, Zap, Droplets, Wind, ShieldCheck } from 'lucide-react';

const SpareParts = () => {
  const { language } = useLanguage();

  const categories = language === 'ar' ? [
    { icon: DoorOpen, title: 'نوافذ وأبواب', description: 'نوافذ وأبواب عالية الجودة' },
    { icon: Zap, title: 'تجهيزات كهربائية', description: 'أنظمة كهربائية متكاملة' },
    { icon: Droplets, title: 'سباكة', description: 'أدوات ومعدات سباكة' },
    { icon: Wind, title: 'مكيفات', description: 'أنظمة تكييف عالية الكفاءة' },
    { icon: ShieldCheck, title: 'عزل', description: 'مواد عزل حراري وصوتي' },
  ] : [
    { icon: DoorOpen, title: 'Windows & Doors', description: 'High quality windows and doors' },
    { icon: Zap, title: 'Electrical Equipment', description: 'Complete electrical systems' },
    { icon: Droplets, title: 'Plumbing', description: 'Plumbing tools and equipment' },
    { icon: Wind, title: 'Air Conditioning', description: 'High efficiency AC systems' },
    { icon: ShieldCheck, title: 'Insulation', description: 'Thermal and sound insulation materials' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'ar' ? 'قطع الغيار' : 'Spare Parts'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'ar' 
                ? 'قطع غيار أصلية وعالية الجودة لكرفانك' 
                : 'Genuine and high-quality spare parts for your caravan'}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'الفئات' : 'Categories'}
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'قطع غيار مميزة' : 'Featured Parts'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-card border-border overflow-hidden group">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 flex items-end justify-center p-6">
                    <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'ar' ? `قطعة ${item}` : `Part ${item}`}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === 'ar' 
                      ? 'وصف القطعة وتفاصيلها' 
                      : 'Part description and details'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'لم تجد ما تبحث عنه؟' : 'Didn\'t find what you\'re looking for?'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === 'ar' 
                ? 'تواصل معنا وسنساعدك في العثور على القطعة المناسبة' 
                : 'Contact us and we\'ll help you find the right part'}
            </p>
            <Button size="lg" className="bg-gradient-gold text-background hover:opacity-90">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpareParts;
