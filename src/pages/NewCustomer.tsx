import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileText, Pencil, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewCustomer = () => {
  const { language } = useLanguage();

  const steps = language === 'ar' ? [
    { icon: Pencil, title: 'اختيار التصميم', description: 'اختر التصميم والمقاس المناسب' },
    { icon: FileText, title: 'عرض سعر', description: 'نقدم لك عرض سعر مفصل' },
    { icon: CheckCircle2, title: 'التوقيع', description: 'الموافقة على العرض والبدء بالتصنيع' },
    { icon: Truck, title: 'التسليم', description: 'تصنيع وتوصيل الكرفان' },
  ] : [
    { icon: Pencil, title: 'Design Selection', description: 'Choose the appropriate design and size' },
    { icon: FileText, title: 'Quote', description: 'We provide you with a detailed quote' },
    { icon: CheckCircle2, title: 'Signature', description: 'Approve the quote and start manufacturing' },
    { icon: Truck, title: 'Delivery', description: 'Manufacture and deliver the caravan' },
  ];

  const faqs = language === 'ar' ? [
    { q: 'كم تستغرق مدة التصنيع؟', a: 'تستغرق من 4-8 أسابيع حسب حجم المشروع' },
    { q: 'هل يوجد ضمان؟', a: 'نعم، نوفر ضمان شامل على جميع الأعمال' },
    { q: 'هل تشمل الخدمة التوصيل؟', a: 'نعم، نوصل لجميع مناطق السعودية والإمارات' },
    { q: 'هل يمكن التعديل على التصميم؟', a: 'نعم، نوفر تصميم حسب الطلب بالكامل' },
  ] : [
    { q: 'How long does manufacturing take?', a: '4-8 weeks depending on project size' },
    { q: 'Is there a warranty?', a: 'Yes, we provide comprehensive warranty on all work' },
    { q: 'Does the service include delivery?', a: 'Yes, we deliver to all areas of Saudi Arabia and UAE' },
    { q: 'Can the design be modified?', a: 'Yes, we provide fully custom design' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'ar' ? 'عميل جديد' : 'New Customer'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'ar' 
                ? 'نرحب بك في ماي هوم - دعنا نساعدك في بناء الكرفان المثالي' 
                : 'Welcome to MY HOME - Let us help you build the perfect caravan'}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'كيف تطلب الكرفان؟' : 'How to Order Your Caravan?'}
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {language === 'ar' ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ar' ? 'جاهز للبدء؟' : 'Ready to Start?'}
            </h2>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-gold text-background hover:opacity-90">
                {language === 'ar' ? 'احصل على عرض سعر' : 'Get a Quote'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCustomer;
