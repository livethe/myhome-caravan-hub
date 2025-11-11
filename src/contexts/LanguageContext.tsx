import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    newCustomer: 'عميل جديد',
    existingCustomer: 'عميل موجود',
    spareParts: 'قطع الغيار',
    maintenance: 'الصيانة',
    contact: 'تواصل معنا',
    
    // Hero
    heroTitle: 'ماي هوم – تصنيع كرفانات عالية الجودة',
    heroSubtitle: 'متخصصون في تصنيع الكرفانات الثابتة والمتحركة بأعلى معايير الجودة في السعودية والإمارات',
    orderNew: 'اطلب كرفان جديد',
    requestMaintenance: 'اطلب صيانة',
    whatsappContact: 'تواصل عبر واتساب',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesDesc: 'نقدم حلول شاملة لتصنيع وصيانة الكرفانات',
    customManufacturing: 'تصنيع حسب الطلب',
    customManufacturingDesc: 'نصمم وننفذ الكرفان حسب احتياجاتك الخاصة',
    fullEquipment: 'تجهيز كامل',
    fullEquipmentDesc: 'كهرباء، سباكة، عزل، أثاث، مكيفات',
    maintenanceService: 'الصيانة',
    maintenanceServiceDesc: 'خدمة صيانة شاملة وقطع غيار أصلية',
    
    // About
    aboutTitle: 'عن ماي هوم',
    aboutDesc: 'خبرة واسعة في تصنيع الكرفانات بأعلى معايير الجودة',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactDesc: 'نحن هنا للإجابة على استفساراتك',
    saudiArabia: 'السعودية - الرياض',
    uae: 'الإمارات - الفجيرة',
    name: 'الاسم',
    phone: 'رقم الهاتف',
    message: 'الرسالة',
    send: 'إرسال',
    
    // Common
    getQuote: 'احصل على عرض سعر',
    learnMore: 'اعرف المزيد',
    viewAll: 'عرض الكل',
    requestQuote: 'اطلب عرض سعر',
    
    // Projects
    projects: 'أعمالنا السابقة',
    projectsTitle: 'أعمالنا السابقة',
    projectsDesc: 'تصفح مجموعة من مشاريعنا المنفذة بنجاح في السعودية والإمارات',
    startYourProject: 'ابدأ مشروعك معنا',
    startYourProjectDesc: 'نحن جاهزون لتحويل فكرتك إلى واقع',
    
    // Quick Links
    quickLinks: 'روابط سريعة',
    quickLinksDesc: 'اختر الخدمة التي تحتاجها',
    trackCaravan: 'متابعة كرفاني',
    newCaravan: 'كرفان جديد',
    ourWorks: 'من أعمالنا',
    companyClient: 'عميل للشركة',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    newCustomer: 'New Customer',
    existingCustomer: 'Existing Customer',
    spareParts: 'Spare Parts',
    maintenance: 'Maintenance',
    contact: 'Contact Us',
    
    // Hero
    heroTitle: 'MY HOME – High Quality Caravan Manufacturing',
    heroSubtitle: 'Specialized in manufacturing fixed and mobile caravans with the highest quality standards in Saudi Arabia and UAE',
    orderNew: 'Order New Caravan',
    requestMaintenance: 'Request Maintenance',
    whatsappContact: 'Contact via WhatsApp',
    
    // Services
    servicesTitle: 'Our Services',
    servicesDesc: 'We provide comprehensive solutions for caravan manufacturing and maintenance',
    customManufacturing: 'Custom Manufacturing',
    customManufacturingDesc: 'We design and build caravans according to your specific needs',
    fullEquipment: 'Complete Equipment',
    fullEquipmentDesc: 'Electrical, plumbing, insulation, furniture, air conditioning',
    maintenanceService: 'Maintenance',
    maintenanceServiceDesc: 'Comprehensive maintenance service and genuine spare parts',
    
    // About
    aboutTitle: 'About MY HOME',
    aboutDesc: 'Extensive experience in caravan manufacturing with the highest quality standards',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDesc: 'We are here to answer your questions',
    saudiArabia: 'Saudi Arabia - Riyadh',
    uae: 'UAE - Fujairah',
    name: 'Name',
    phone: 'Phone Number',
    message: 'Message',
    send: 'Send',
    
    // Common
    getQuote: 'Get a Quote',
    learnMore: 'Learn More',
    viewAll: 'View All',
    requestQuote: 'Request Quote',
    
    // Projects
    projects: 'Our Projects',
    projectsTitle: 'Our Previous Projects',
    projectsDesc: 'Browse a collection of our successfully completed projects in Saudi Arabia and UAE',
    startYourProject: 'Start Your Project With Us',
    startYourProjectDesc: 'We are ready to turn your idea into reality',
    
    // Quick Links
    quickLinks: 'Quick Links',
    quickLinksDesc: 'Choose the service you need',
    trackCaravan: 'Track My Caravan',
    newCaravan: 'New Caravan',
    ourWorks: 'Our Works',
    companyClient: 'Company Client',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    document.documentElement.dir = language === 'ar' ? 'ltr' : 'rtl';
    document.documentElement.lang = language === 'ar' ? 'en' : 'ar';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
