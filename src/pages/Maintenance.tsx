import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap, Droplets, Paintbrush, Wrench, Home } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Maintenance = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'ar' ? 'تم إرسال طلب الصيانة بنجاح' : 'Maintenance request submitted successfully');
    setFormData({ name: '', phone: '', serviceType: '', description: '' });
  };

  const services = language === 'ar' ? [
    { icon: Zap, title: 'كهرباء', description: 'صيانة وإصلاح الأنظمة الكهربائية' },
    { icon: Droplets, title: 'سباكة', description: 'إصلاح وصيانة أنظمة المياه' },
    { icon: Paintbrush, title: 'دهانات', description: 'تجديد الدهانات والتشطيبات' },
    { icon: Wrench, title: 'صيانة الهيكل', description: 'إصلاح وتقوية الهيكل' },
    { icon: Home, title: 'صيانة داخلية', description: 'تجديد وصيانة التجهيزات الداخلية' },
  ] : [
    { icon: Zap, title: 'Electrical', description: 'Maintenance and repair of electrical systems' },
    { icon: Droplets, title: 'Plumbing', description: 'Repair and maintenance of water systems' },
    { icon: Paintbrush, title: 'Painting', description: 'Renovation of paint and finishes' },
    { icon: Wrench, title: 'Structure Maintenance', description: 'Repair and reinforcement of structure' },
    { icon: Home, title: 'Interior Maintenance', description: 'Renovation and maintenance of interior equipment' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'ar' ? 'خدمات الصيانة' : 'Maintenance Services'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'ar' 
                ? 'خدمة صيانة شاملة للحفاظ على كرفانك في أفضل حال' 
                : 'Comprehensive maintenance service to keep your caravan in top condition'}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'أنواع الصيانة' : 'Maintenance Types'}
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'ar' ? 'احجز موعد صيانة' : 'Book Maintenance Appointment'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'الاسم' : 'Name'}
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'نوع الخدمة' : 'Service Type'}
                    </label>
                    <Select onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder={language === 'ar' ? 'اختر نوع الخدمة' : 'Select service type'} />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'وصف المشكلة' : 'Problem Description'}
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={5}
                      placeholder={language === 'ar' ? 'صف المشكلة بالتفصيل...' : 'Describe the problem in detail...'}
                      className="bg-background border-border"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-gold text-background hover:opacity-90">
                    {language === 'ar' ? 'إرسال الطلب' : 'Submit Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'قبل وبعد' : 'Before & After'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((item) => (
              <Card key={item} className="bg-card border-border overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-muted relative">
                    <div className="absolute bottom-2 left-2 bg-background/80 px-3 py-1 rounded text-sm font-medium">
                      {language === 'ar' ? 'قبل' : 'Before'}
                    </div>
                  </div>
                  <div className="aspect-square bg-muted/50 relative">
                    <div className="absolute bottom-2 left-2 bg-primary/80 px-3 py-1 rounded text-sm font-medium">
                      {language === 'ar' ? 'بعد' : 'After'}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {language === 'ar' ? `مشروع صيانة ${item}` : `Maintenance Project ${item}`}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
