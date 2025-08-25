import { Search, Users, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Anfrage stellen",
      description: "Beschreiben Sie Ihr Anliegen und geben Sie Ihren Standort an. Unsere intelligente Suche findet passende Steuerberater in Ihrer Nähe.",
      features: ["Kostenlos & unverbindlich", "Nur wenige Minuten", "Präzise Filterung"]
    },
    {
      number: 2,
      icon: Users,
      title: "Angebote vergleichen",
      description: "Erhalten Sie maßgeschneiderte Angebote von qualifizierten Steuerberatern. Vergleichen Sie Leistungen, Preise und Bewertungen.",
      features: ["Bis zu 5 Angebote", "Transparente Preise", "Echte Bewertungen"]
    },
    {
      number: 3,
      icon: Handshake,
      title: "Berater wählen",
      description: "Entscheiden Sie sich für den Steuerberater, der am besten zu Ihnen passt. Beginnen Sie direkt mit der professionellen Beratung.",
      features: ["Freie Auswahl", "Direkter Kontakt", "Sofortiger Start"]
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            In 3 Schritten zum perfekten Steuerberater
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Unser bewährter Prozess macht es Ihnen leicht, den idealen Steuerberater für Ihre Bedürfnisse zu finden. 
            Schnell, einfach und völlig kostenlos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLastStep = index === steps.length - 1;
            
            return (
              <div key={step.number} className="relative">
                {/* Connector Line (Desktop) */}
                {!isLastStep && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brand-blue to-brand-green transform translate-x-6 -translate-y-1/2 opacity-30">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-brand-blue w-5 h-5 bg-neutral-50 rounded-full p-1" />
                  </div>
                )}

                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 mt-4">
                    <IconComponent className="w-8 h-8 text-brand-blue" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile Connector */}
                {!isLastStep && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-brand-blue transform rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Bereit, den perfekten Steuerberater zu finden?
            </h3>
            <p className="text-neutral-600 mb-6">
              Starten Sie jetzt und erhalten Sie in wenigen Minuten passende Angebote von qualifizierten Steuerberatern.
            </p>
            <a 
              href="#search-form" 
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Jetzt kostenlos starten
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue mb-2">10.000+</div>
            <div className="text-sm text-neutral-600">Erfolgreiche Vermittlungen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">98%</div>
            <div className="text-sm text-neutral-600">Kundenzufriedenheit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue mb-2">1.500+</div>
            <div className="text-sm text-neutral-600">Geprüfte Steuerberater</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">24h</div>
            <div className="text-sm text-neutral-600">Durchschnittliche Antwortzeit</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
