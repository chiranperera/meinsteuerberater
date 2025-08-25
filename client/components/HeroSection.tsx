import { useState } from "react";
import {
  Search,
  MapPin,
  Check,
  Star,
  Users,
  Shield,
  Clock,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search:", { searchQuery, location });
  };

  return (
    <section className="relative overflow-hidden bg-white pb-12 lg:pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-yellow text-brand-yellow"
                  />
                ))}
              </div>
              <span className="text-slate-700 text-sm font-medium">
                4.9/5 • <strong>2,847 {t("hero.reviews")}</strong>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.05] tracking-wide">
                {t("hero.title")}{" "}
                <span className="icon-gradient">
                  {t("hero.title_highlight")}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded shadow-lg p-8 border border-slate-100/80 relative overflow-hidden">
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder={t("hero.search_placeholder")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded text-base focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder={t("hero.location_placeholder")}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded text-base focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-lg"
                >
                  {t("hero.search_button")}
                </button>
              </form>

              {/* Popular Searches */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-3 font-medium">
                  {t("hero.popular_searches")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      key: "hero.search_tax_return",
                      value: t("hero.search_tax_return"),
                    },
                    {
                      key: "hero.search_bookkeeping",
                      value: t("hero.search_bookkeeping"),
                    },
                    {
                      key: "hero.search_startup",
                      value: t("hero.search_startup"),
                    },
                    {
                      key: "hero.search_annual",
                      value: t("hero.search_annual"),
                    },
                  ].map((term) => (
                    <button
                      key={term.key}
                      className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm hover:bg-slate-100 transition-all border border-slate-200 font-medium"
                      onClick={() => setSearchQuery(term.value)}
                    >
                      {term.value}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* USP Points */}
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <Check className="w-6 h-6 icon-gradient" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    100% Kostenlos
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <Clock className="w-6 h-6 icon-gradient" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Schnelle Vermittlung
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <Shield className="w-6 h-6 icon-gradient" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Geprüfte Experten
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-8 pt-6">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="text-sm font-medium">
                  {t("hero.trust_placements")}
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="text-sm font-medium">
                  {t("hero.trust_quality")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Visual */}
          <div className="relative lg:pl-0">
            <div className="relative">
              {/* Professional Business Image */}
              <div className="min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-white overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fb6a2def9d1b24188a9a9c876266a2852%2F27511d7389ce4b8698c493b260f2558c?format=webp&width=800')`,
                  }}
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute top-8 -right-6 bg-white/97 backdrop-blur-md rounded-xl shadow-sm p-5 border border-white/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-lg flex items-center justify-center shadow-sm">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t("hero.customer_satisfaction")}
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      {t("hero.verified_reviews")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -left-6 bg-white/97 backdrop-blur-md rounded-xl shadow-sm p-5 border border-white/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-lg flex items-center justify-center shadow-sm">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t("hero.avg_response")}
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      {t("hero.response_time")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/3 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-brand-green/3 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
