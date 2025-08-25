import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  de: {
    // Header
    'header.phone': '0800 123 456 789',
    'header.email': 'info@meinsteuerberater.de',
    'header.become_consultant': 'Steuerberater werden?',
    'header.register_now': 'Jetzt anmelden',
    'header.services': 'Leistungen',
    'header.locations': 'Standorte',
    'header.prices': 'Preise',
    'header.guide': 'Ratgeber',
    'header.contact': 'Kontakt',
    'header.find_consultant': 'Steuerberater finden',
    
    // Services
    'services.tax_consulting': 'Steuerberatung',
    'services.bookkeeping': 'Buchhaltung',
    'services.annual_statement': 'Jahresabschluss',
    'services.startup_consulting': 'Gründungsberatung',
    'services.corporate_tax': 'Unternehmensteuer',
    
    // Locations
    'locations.berlin': 'Berlin',
    'locations.munich': 'München',
    'locations.hamburg': 'Hamburg',
    'locations.cologne': 'Köln',
    'locations.frankfurt': 'Frankfurt',
    'locations.stuttgart': 'Stuttgart',
    
    // Hero Section
    'hero.rating_text': 'basierend auf',
    'hero.reviews': 'Bewertungen',
    'hero.title': 'Steuerberater gesucht?',
    'hero.title_highlight': 'Wir haben die Lösung!',
    'hero.subtitle': 'Finden Sie in nur 3 Schritten den perfekten Steuerberater in Ihrer Nähe. Kostenlos, unverbindlich und schnell.',
    'hero.search_placeholder': 'Welche Leistung benötigen Sie?',
    'hero.location_placeholder': 'PLZ oder Ort eingeben',
    'hero.search_button': 'Jetzt Steuerberater finden',
    'hero.popular_searches': 'Beliebte Suchen:',
    'hero.search_tax_return': 'Steuererklärung',
    'hero.search_bookkeeping': 'Buchhaltung',
    'hero.search_startup': 'Gründungsberatung',
    'hero.search_annual': 'Jahresabschluss',
    'hero.usp_free': '100% Kostenlos',
    'hero.usp_free_desc': 'Unverbindliche Beratung',
    'hero.usp_fast': 'Schnelle Vermittlung',
    'hero.usp_fast_desc': 'Meist binnen 24h',
    'hero.usp_verified': 'Geprüfte Experten',
    'hero.usp_verified_desc': 'Nur qualifizierte Berater',
    'hero.trust_placements': 'Über 10.000 erfolgreiche Vermittlungen',
    'hero.trust_quality': 'TÜV geprüfte Qualität',
    'hero.professional_tax_consulting': 'Professionelle Steuerberatung',
    'hero.platform_trust': 'Vertrauen Sie auf Deutschlands führende Steuerberater-Plattform',
    'hero.customer_satisfaction': '98% Kundenzufriedenheit',
    'hero.verified_reviews': 'Verifizierte Bewertungen',
    'hero.avg_response': 'Ø 2,3 Stunden',
    'hero.response_time': 'Antwortzeit',
    
    // Process Section
    'process.title': 'In 3 Schritten zum perfekten Steuerberater',
    'process.subtitle': 'Unser bewährter Prozess macht es Ihnen leicht, den idealen Steuerberater für Ihre Bedürfnisse zu finden. Schnell, einfach und völlig kostenlos.',
    'process.step1_title': 'Anfrage stellen',
    'process.step1_desc': 'Beschreiben Sie Ihr Anliegen und geben Sie Ihren Standort an. Unsere intelligente Suche findet passende Steuerberater in Ihrer Nähe.',
    'process.step1_feature1': 'Kostenlos & unverbindlich',
    'process.step1_feature2': 'Nur wenige Minuten',
    'process.step1_feature3': 'Präzise Filterung',
    'process.step2_title': 'Angebote vergleichen',
    'process.step2_desc': 'Erhalten Sie maßgeschneiderte Angebote von qualifizierten Steuerberatern. Vergleichen Sie Leistungen, Preise und Bewertungen.',
    'process.step2_feature1': 'Bis zu 5 Angebote',
    'process.step2_feature2': 'Transparente Preise',
    'process.step2_feature3': 'Echte Bewertungen',
    'process.step3_title': 'Berater wählen',
    'process.step3_desc': 'Entscheiden Sie sich für den Steuerberater, der am besten zu Ihnen passt. Beginnen Sie direkt mit der professionellen Beratung.',
    'process.step3_feature1': 'Freie Auswahl',
    'process.step3_feature2': 'Direkter Kontakt',
    'process.step3_feature3': 'Sofortiger Start',
    
    // Language
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.select': 'Sprache wählen',
    
    // Common
    'common.or': 'oder',
    'common.call_us': 'Oder rufen Sie uns an:',
    'common.free': 'kostenlos',
    'common.fast': 'schnell',
    'common.verified': 'geprüft'
  },
  en: {
    // Header
    'header.phone': '+49 800 123 456 789',
    'header.email': 'info@meinsteuerberater.de',
    'header.become_consultant': 'Become a tax advisor?',
    'header.register_now': 'Register now',
    'header.services': 'Services',
    'header.locations': 'Locations',
    'header.prices': 'Prices',
    'header.guide': 'Guide',
    'header.contact': 'Contact',
    'header.find_consultant': 'Find Tax Advisor',
    
    // Services
    'services.tax_consulting': 'Tax Consulting',
    'services.bookkeeping': 'Bookkeeping',
    'services.annual_statement': 'Annual Statement',
    'services.startup_consulting': 'Startup Consulting',
    'services.corporate_tax': 'Corporate Tax',
    
    // Locations
    'locations.berlin': 'Berlin',
    'locations.munich': 'Munich',
    'locations.hamburg': 'Hamburg',
    'locations.cologne': 'Cologne',
    'locations.frankfurt': 'Frankfurt',
    'locations.stuttgart': 'Stuttgart',
    
    // Hero Section
    'hero.rating_text': 'based on',
    'hero.reviews': 'reviews',
    'hero.title': 'Looking for a tax advisor?',
    'hero.title_highlight': 'We have the solution!',
    'hero.subtitle': 'Find the perfect tax advisor in your area in just 3 steps. Free, non-binding and fast.',
    'hero.search_placeholder': 'What service do you need?',
    'hero.location_placeholder': 'Enter ZIP code or city',
    'hero.search_button': 'Find Tax Advisor Now',
    'hero.popular_searches': 'Popular searches:',
    'hero.search_tax_return': 'Tax Return',
    'hero.search_bookkeeping': 'Bookkeeping',
    'hero.search_startup': 'Startup Consulting',
    'hero.search_annual': 'Annual Statement',
    'hero.usp_free': '100% Free',
    'hero.usp_free_desc': 'Non-binding consultation',
    'hero.usp_fast': 'Fast Matching',
    'hero.usp_fast_desc': 'Usually within 24h',
    'hero.usp_verified': 'Verified Experts',
    'hero.usp_verified_desc': 'Only qualified advisors',
    'hero.trust_placements': 'Over 10,000 successful placements',
    'hero.trust_quality': 'TÜV certified quality',
    'hero.professional_tax_consulting': 'Professional Tax Consulting',
    'hero.platform_trust': 'Trust Germany\'s leading tax advisor platform',
    'hero.customer_satisfaction': '98% Customer Satisfaction',
    'hero.verified_reviews': 'Verified Reviews',
    'hero.avg_response': 'Avg 2.3 hours',
    'hero.response_time': 'Response Time',
    
    // Process Section
    'process.title': 'Find the perfect tax advisor in 3 steps',
    'process.subtitle': 'Our proven process makes it easy for you to find the ideal tax advisor for your needs. Quick, simple and completely free.',
    'process.step1_title': 'Submit request',
    'process.step1_desc': 'Describe your requirements and provide your location. Our intelligent search finds suitable tax advisors in your area.',
    'process.step1_feature1': 'Free & non-binding',
    'process.step1_feature2': 'Just a few minutes',
    'process.step1_feature3': 'Precise filtering',
    'process.step2_title': 'Compare offers',
    'process.step2_desc': 'Receive tailored offers from qualified tax advisors. Compare services, prices and reviews.',
    'process.step2_feature1': 'Up to 5 offers',
    'process.step2_feature2': 'Transparent prices',
    'process.step2_feature3': 'Real reviews',
    'process.step3_title': 'Choose advisor',
    'process.step3_desc': 'Choose the tax advisor that best suits you. Start directly with professional consultation.',
    'process.step3_feature1': 'Free choice',
    'process.step3_feature2': 'Direct contact',
    'process.step3_feature3': 'Immediate start',
    
    // Language
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.select': 'Select language',
    
    // Common
    'common.or': 'or',
    'common.call_us': 'Or call us:',
    'common.free': 'free',
    'common.fast': 'fast',
    'common.verified': 'verified'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['de', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
