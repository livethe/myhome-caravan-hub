import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  const whatsappNumber = '0567160888';
  const message = 'مرحباً، أرغب في الاستفسار عن خدماتكم';
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-glow transition-all hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};
