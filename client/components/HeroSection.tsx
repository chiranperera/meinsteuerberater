import { useState } from 'react';
import { Search, MapPin, Check, Star, Users, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search:', { searchQuery, location });
  };

  return (
    <section className="section-hero relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <span className="text-neutral-600">
                4.9/5 {t('hero.rating_text')} <strong>2,847 {t('hero.reviews')}</strong>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight">
                {t('hero.title')}{' '}
                <span className="text-brand-blue">{t('hero.title_highlight')}</span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-neutral-200">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder={t('hero.search_placeholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-lg text-base focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder={t('hero.location_placeholder')}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-lg text-base focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-cta text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-200 text-lg"
                >
                  {t('hero.search_button')}
                </button>
              </form>

              {/* Popular Searches */}
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 mb-2">{t('hero.popular_searches')}</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'hero.search_tax_return', value: t('hero.search_tax_return') },
                    { key: 'hero.search_bookkeeping', value: t('hero.search_bookkeeping') },
                    { key: 'hero.search_startup', value: t('hero.search_startup') },
                    { key: 'hero.search_annual', value: t('hero.search_annual') }
                  ].map((term) => (
                    <button
                      key={term.key}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-neutral-200 transition-colors"
                      onClick={() => setSearchQuery(term.value)}
                    >
                      {term.value}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* USP Points */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green bg-opacity-20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{t('hero.usp_free')}</p>
                  <p className="text-sm text-neutral-600">{t('hero.usp_free_desc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green bg-opacity-20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{t('hero.usp_fast')}</p>
                  <p className="text-sm text-neutral-600">{t('hero.usp_fast_desc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green bg-opacity-20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{t('hero.usp_verified')}</p>
                  <p className="text-sm text-neutral-600">{t('hero.usp_verified_desc')}</p>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-neutral-600">
                <Users className="w-5 h-5 text-brand-blue" />
                <span className="text-sm font-medium">{t('hero.trust_placements')}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Shield className="w-5 h-5 text-brand-blue" />
                <span className="text-sm font-medium">{t('hero.trust_quality')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Professional Business Image */}
              <div className="min-h-[600px] lg:min-h-[650px] bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-2xl border border-neutral-200 overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(27, 94, 155, 0.85) 0%, rgba(93, 183, 69, 0.75) 100%), url('https://images.pexels.com/photos/7821546/pexels-photo-7821546.jpeg?auto=compress&cs=tinysrgb&w=1200')`
                  }}
                />

                {/* Content Overlay */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                      {t('hero.professional_tax_consulting') || 'Professionelle Steuerberatung'}
                    </h3>
                    <p className="text-white/90 text-lg drop-shadow-md max-w-xs mx-auto">
                      {t('hero.platform_trust') || 'Vertrauen Sie auf Deutschlands führende Steuerberater-Plattform'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-6 -right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">98% Kundenzufriedenheit</p>
                    <p className="text-xs text-neutral-600">Verifizierte Bewertungen</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 -left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Ø 2,3 Stunden</p>
                    <p className="text-xs text-neutral-600">Antwortzeit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-brand-green/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
