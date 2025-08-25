import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar for Consultants */}
      <div className="bg-brand-blue text-white py-2">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{t('header.phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{t('header.email')}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('language')}
                  className="flex items-center gap-1 text-white hover:text-brand-yellow transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{t(`language.${language === 'de' ? 'german' : 'english'}`)}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'language' && (
                  <div className="absolute top-full right-0 mt-2 w-36 bg-white shadow-lg rounded-lg border border-neutral-200 py-2 z-50">
                    <button
                      onClick={() => {
                        setLanguage('de');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 transition-colors ${
                        language === 'de' ? 'text-brand-blue font-medium' : 'text-neutral-700'
                      }`}
                    >
                      🇩🇪 {t('language.german')}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 transition-colors ${
                        language === 'en' ? 'text-brand-blue font-medium' : 'text-neutral-700'
                      }`}
                    >
                      🇺🇸 {t('language.english')}
                    </button>
                  </div>
                )}
              </div>
              <span className="text-sm">{t('header.become_consultant')}</span>
              <a
                href="/steuerberater-werden"
                className="bg-brand-green hover:bg-brand-green-600 px-4 py-1 rounded text-sm font-medium transition-colors"
              >
                {t('header.register_now')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-brand-blue">MeinSteuerberater</span>
                  <span className="text-sm text-neutral-600 block">.de</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center gap-1 text-neutral-700 hover:text-brand-blue font-medium transition-colors"
                >
                  {t('header.services')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg border border-neutral-200 py-4 px-6">
                    <div className="space-y-3">
                      <a href="/steuerberatung" className="block text-neutral-700 hover:text-brand-blue">{t('services.tax_consulting')}</a>
                      <a href="/buchhaltung" className="block text-neutral-700 hover:text-brand-blue">{t('services.bookkeeping')}</a>
                      <a href="/jahresabschluss" className="block text-neutral-700 hover:text-brand-blue">{t('services.annual_statement')}</a>
                      <a href="/gruendungsberatung" className="block text-neutral-700 hover:text-brand-blue">{t('services.startup_consulting')}</a>
                      <a href="/unternehmensteuer" className="block text-neutral-700 hover:text-brand-blue">{t('services.corporate_tax')}</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('locations')}
                  className="flex items-center gap-1 text-neutral-700 hover:text-brand-blue font-medium transition-colors"
                >
                  {t('header.locations')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'locations' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-lg border border-neutral-200 py-4 px-6">
                    <div className="grid grid-cols-2 gap-3">
                      <a href="/berlin" className="block text-neutral-700 hover:text-brand-blue">{t('locations.berlin')}</a>
                      <a href="/muenchen" className="block text-neutral-700 hover:text-brand-blue">{t('locations.munich')}</a>
                      <a href="/hamburg" className="block text-neutral-700 hover:text-brand-blue">{t('locations.hamburg')}</a>
                      <a href="/koeln" className="block text-neutral-700 hover:text-brand-blue">{t('locations.cologne')}</a>
                      <a href="/frankfurt" className="block text-neutral-700 hover:text-brand-blue">{t('locations.frankfurt')}</a>
                      <a href="/stuttgart" className="block text-neutral-700 hover:text-brand-blue">{t('locations.stuttgart')}</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/preise" className="text-neutral-700 hover:text-brand-blue font-medium transition-colors">
                {t('header.prices')}
              </a>
              <a href="/blog" className="text-neutral-700 hover:text-brand-blue font-medium transition-colors">
                {t('header.guide')}
              </a>
              <a href="/kontakt" className="text-neutral-700 hover:text-brand-blue font-medium transition-colors">
                {t('header.contact')}
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="/steuerberater-finden" className="btn-primary">
                {t('header.find_consultant')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-neutral-700 hover:text-brand-blue transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <div className="container-custom py-4">
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-services')}
                    className="flex items-center justify-between w-full text-left text-neutral-700 font-medium py-2"
                  >
                    {t('header.services')}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === 'mobile-services' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a href="/steuerberatung" className="block text-neutral-600 py-1">{t('services.tax_consulting')}</a>
                      <a href="/buchhaltung" className="block text-neutral-600 py-1">{t('services.bookkeeping')}</a>
                      <a href="/jahresabschluss" className="block text-neutral-600 py-1">{t('services.annual_statement')}</a>
                      <a href="/gruendungsberatung" className="block text-neutral-600 py-1">{t('services.startup_consulting')}</a>
                      <a href="/unternehmensteuer" className="block text-neutral-600 py-1">{t('services.corporate_tax')}</a>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-locations')}
                    className="flex items-center justify-between w-full text-left text-neutral-700 font-medium py-2"
                  >
                    {t('header.locations')}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === 'mobile-locations' && (
                    <div className="pl-4 mt-2 grid grid-cols-2 gap-2">
                      <a href="/berlin" className="block text-neutral-600 py-1">{t('locations.berlin')}</a>
                      <a href="/muenchen" className="block text-neutral-600 py-1">{t('locations.munich')}</a>
                      <a href="/hamburg" className="block text-neutral-600 py-1">{t('locations.hamburg')}</a>
                      <a href="/koeln" className="block text-neutral-600 py-1">{t('locations.cologne')}</a>
                      <a href="/frankfurt" className="block text-neutral-600 py-1">{t('locations.frankfurt')}</a>
                      <a href="/stuttgart" className="block text-neutral-600 py-1">{t('locations.stuttgart')}</a>
                    </div>
                  )}
                </div>

                <a href="/preise" className="block text-neutral-700 font-medium py-2">{t('header.prices')}</a>
                <a href="/blog" className="block text-neutral-700 font-medium py-2">{t('header.guide')}</a>
                <a href="/kontakt" className="block text-neutral-700 font-medium py-2">{t('header.contact')}</a>

                <div className="pt-4 border-t border-neutral-200">
                  <a href="/steuerberater-finden" className="btn-primary w-full justify-center">
                    {t('header.find_consultant')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
