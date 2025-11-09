import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ClipboardList, Wrench, Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ExistingCustomer = () => {
  const { language } = useLanguage();
  const [orderNumber, setOrderNumber] = useState('');
  const [requestData, setRequestData] = useState({
    name: '',
    phone: '',
    description: '',
  });

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'ar' ? 'جاري البحث عن الطلب...' : 'Searching for order...');
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'ar' ? 'تم إرسال الطلب بنجاح' : 'Request submitted successfully');
    setRequestData({ name: '', phone: '', description: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'ar' ? 'عميل موجود' : 'Existing Customer'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'ar' 
                ? 'خدمات ما بعد البيع والدعم الفني' 
                : 'After-sales services and technical support'}
            </p>
          </div>
        </div>
      </section>

      {/* Track Order */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">
                    {language === 'ar' ? 'تتبع طلبك' : 'Track Your Order'}
                  </h2>
                </div>
                
                <form onSubmit={handleTrackOrder} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'رقم الطلب' : 'Order Number'}
                    </label>
                    <Input
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder={language === 'ar' ? 'أدخل رقم الطلب' : 'Enter order number'}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-gold text-background hover:opacity-90">
                    {language === 'ar' ? 'تتبع' : 'Track'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            {language === 'ar' ? 'خدماتنا لك' : 'Our Services for You'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'ar' ? 'صيانة' : 'Maintenance'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'ar' 
                    ? 'خدمة صيانة شاملة لكرفانك' 
                    : 'Comprehensive maintenance service for your caravan'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <Plus className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'ar' ? 'إضافات' : 'Additions'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'ar' 
                    ? 'إضافة تجهيزات جديدة' 
                    : 'Add new equipment'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <ClipboardList className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'ar' ? 'قطع غيار' : 'Spare Parts'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'ar' 
                    ? 'قطع غيار أصلية' 
                    : 'Genuine spare parts'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'ar' ? 'طلب خدمة' : 'Service Request'}
                </h2>
                
                <form onSubmit={handleSubmitRequest} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'الاسم' : 'Name'}
                    </label>
                    <Input
                      value={requestData.name}
                      onChange={(e) => setRequestData({ ...requestData, name: e.target.value })}
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
                      value={requestData.phone}
                      onChange={(e) => setRequestData({ ...requestData, phone: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'ar' ? 'وصف المشكلة أو الطلب' : 'Problem or Request Description'}
                    </label>
                    <Textarea
                      value={requestData.description}
                      onChange={(e) => setRequestData({ ...requestData, description: e.target.value })}
                      required
                      rows={5}
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
    </div>
  );
};

export default ExistingCustomer;
