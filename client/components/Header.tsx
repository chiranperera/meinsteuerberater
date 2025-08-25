import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
                <span>0800 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@meinsteuerberater.de</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">Steuerberater werden?</span>
              <a 
                href="/steuerberater-werden" 
                className="bg-brand-green hover:bg-brand-green-600 px-4 py-1 rounded text-sm font-medium transition-colors"
              >
                Jetzt anmelden
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
                  Leistungen
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg border border-neutral-200 py-4 px-6">
                    <div className="space-y-3">
                      <a href="/steuerberatung" className="block text-neutral-700 hover:text-brand-blue">Steuerberatung</a>
                      <a href="/buchhaltung" className="block text-neutral-700 hover:text-brand-blue">Buchhaltung</a>
                      <a href="/jahresabschluss" className="block text-neutral-700 hover:text-brand-blue">Jahresabschluss</a>
                      <a href="/gruendungsberatung" className="block text-neutral-700 hover:text-brand-blue">Gründungsberatung</a>
                      <a href="/unternehmensteuer" className="block text-neutral-700 hover:text-brand-blue">Unternehmensteuer</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('locations')}
                  className="flex items-center gap-1 text-neutral-700 hover:text-brand-blue font-medium transition-colors"
                >
                  Standorte
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'locations' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-lg border border-neutral-200 py-4 px-6">
                    <div className="grid grid-cols-2 gap-3">
                      <a href="/berlin" className="block text-neutral-700 hover:text-brand-blue">Berlin</a>
                      <a href="/muenchen" className="block text-neutral-700 hover:text-brand-blue">München</a>
                      <a href="/hamburg" className="block text-neutral-700 hover:text-brand-blue">Hamburg</a>
                      <a href="/koeln" className="block text-neutral-700 hover:text-brand-blue">Köln</a>
                      <a href="/frankfurt" className="block text-neutral-700 hover:text-brand-blue">Frankfurt</a>
                      <a href="/stuttgart" className="block text-neutral-700 hover:text-brand-blue">Stuttgart</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/preise" className="text-neutral-700 hover:text-brand-blue font-medium transition-colors">
                Preise
              </a>
              <a href="/blog" className="text-neutral-700 hover:text-brand-blue font-medium transition-colors">
                Ratgeber
              </a>
              <a href="/kontakt" className="text-neutral-700 hover:text-brand-blue font-medium transition-colors">
                Kontakt
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="/steuerberater-finden" className="btn-primary">
                Steuerberater finden
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
                    Leistungen
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === 'mobile-services' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a href="/steuerberatung" className="block text-neutral-600 py-1">Steuerberatung</a>
                      <a href="/buchhaltung" className="block text-neutral-600 py-1">Buchhaltung</a>
                      <a href="/jahresabschluss" className="block text-neutral-600 py-1">Jahresabschluss</a>
                      <a href="/gruendungsberatung" className="block text-neutral-600 py-1">Gründungsberatung</a>
                      <a href="/unternehmensteuer" className="block text-neutral-600 py-1">Unternehmensteuer</a>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-locations')}
                    className="flex items-center justify-between w-full text-left text-neutral-700 font-medium py-2"
                  >
                    Standorte
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === 'mobile-locations' && (
                    <div className="pl-4 mt-2 grid grid-cols-2 gap-2">
                      <a href="/berlin" className="block text-neutral-600 py-1">Berlin</a>
                      <a href="/muenchen" className="block text-neutral-600 py-1">München</a>
                      <a href="/hamburg" className="block text-neutral-600 py-1">Hamburg</a>
                      <a href="/koeln" className="block text-neutral-600 py-1">Köln</a>
                      <a href="/frankfurt" className="block text-neutral-600 py-1">Frankfurt</a>
                      <a href="/stuttgart" className="block text-neutral-600 py-1">Stuttgart</a>
                    </div>
                  )}
                </div>

                <a href="/preise" className="block text-neutral-700 font-medium py-2">Preise</a>
                <a href="/blog" className="block text-neutral-700 font-medium py-2">Ratgeber</a>
                <a href="/kontakt" className="block text-neutral-700 font-medium py-2">Kontakt</a>
                
                <div className="pt-4 border-t border-neutral-200">
                  <a href="/steuerberater-finden" className="btn-primary w-full justify-center">
                    Steuerberater finden
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
