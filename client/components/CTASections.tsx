import { ArrowRight, Phone, Mail, Check, Star, Shield, Clock, Users, Award, Zap } from 'lucide-react';

// Main CTA Section for homepage
export const MainCTASection = () => {
  return (
    <section className="section-cta">
      <div className="container-custom text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Bereit für professionelle Steuerberatung?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Starten Sie jetzt und finden Sie in wenigen Minuten den perfekten Steuerberater für Ihre Bedürfnisse. 
          Kostenlos, unverbindlich und TÜV-geprüft.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/steuerberater-finden" 
            className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors inline-flex items-center gap-2 text-lg"
          >
            Jetzt kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex items-center gap-2 text-white/80">
            <Phone className="w-5 h-5" />
            <span>Oder rufen Sie uns an: 0800 123 456 789</span>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/80">
            <Check className="w-5 h-5" />
            <span>100% kostenlos</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Shield className="w-5 h-5" />
            <span>TÜV geprüft</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Clock className="w-5 h-5" />
            <span>Schnelle Vermittlung</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Emergency CTA Section
export const EmergencyCTASection = () => {
  return (
    <section className="section bg-error text-white">
      <div className="container-custom">
        <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Steuerliche Probleme? Sofortige Hilfe verfügbar!
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Bei akuten steuerlichen Problemen vermitteln wir Ihnen innerhalb von 2 Stunden 
            einen Steuerberater für Eilfälle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/eilberatung" 
              className="bg-white text-error px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Sofortberatung anfordern
            </a>
            <a 
              href="tel:08001234567" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-error transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              0800 123 456 789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Newsletter CTA Section
export const NewsletterCTASection = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Bleiben Sie steuerlich auf dem Laufenden
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Erhalten Sie wertvolle Steuertipps, Gesetzesänderungen und Expertenratschläge 
            direkt in Ihr Postfach. Kostenlos und jederzeit kündbar.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
              />
              <button
                type="submit"
                className="btn-primary px-8 py-3 whitespace-nowrap"
              >
                Jetzt anmelden
              </button>
            </form>
            <p className="text-sm text-neutral-500 mt-4">
              Über 15.000 Abonnenten vertrauen bereits unserem Newsletter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Trust Elements Component
export const TrustElements = () => {
  const trustBadges = [
    {
      icon: Shield,
      title: "TÜV geprüft",
      description: "Geprüfte Qualität und Sicherheit"
    },
    {
      icon: Award,
      title: "Testsieger 2024",
      description: "Beste Steuerberater-Plattform"
    },
    {
      icon: Users,
      title: "10.000+ Kunden",
      description: "Vertrauen uns bereits"
    },
    {
      icon: Star,
      title: "4.9/5 Sterne",
      description: "Durchschnittsbewertung"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {trustBadges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <IconComponent className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-1">{badge.title}</h3>
            <p className="text-sm text-neutral-600">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};

// Statistics Section
export const StatisticsSection = () => {
  const stats = [
    {
      number: "10.000+",
      label: "Erfolgreiche Vermittlungen",
      icon: Users
    },
    {
      number: "1.500+",
      label: "Geprüfte Steuerberater",
      icon: Award
    },
    {
      number: "98%",
      label: "Kundenzufriedenheit",
      icon: Star
    },
    {
      number: "24h",
      label: "Ø Antwortzeit",
      icon: Clock
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Zahlen, die für sich sprechen
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Diese Erfolgsgeschichte schreiben wir gemeinsam mit unseren Kunden und Partnern.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-10 h-10" style={{background: 'linear-gradient(135deg, #10f0e3 0%, #001af8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} />
                </div>
                <div className="text-4xl font-bold text-neutral-900 mb-2">{stat.number}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Contact CTA Section
export const ContactCTASection = () => {
  return (
    <section className="section bg-gradient-hero">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Haben Sie Fragen? Wir sind für Sie da!
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Unser Expertenteam steht Ihnen bei allen Fragen rund um die Steuerberater-Suche 
            zur Verfügung. Kostenlos und unverbindlich.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="tel:08001234567" 
              className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all group"
            >
              <Phone className="w-8 h-8 text-brand-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-neutral-900 mb-2">Telefonische Beratung</h3>
              <p className="text-neutral-600 text-sm mb-3">Sofortige Hilfe von unseren Experten</p>
              <div className="text-brand-blue font-semibold">0800 123 456 789</div>
            </a>
            
            <a 
              href="mailto:info@meinsteuerberater.de" 
              className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all group"
            >
              <Mail className="w-8 h-8 text-brand-green mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-neutral-900 mb-2">E-Mail Support</h3>
              <p className="text-neutral-600 text-sm mb-3">Antwort innerhalb von 2 Stunden</p>
              <div className="text-brand-green font-semibold">info@meinsteuerberater.de</div>
            </a>
          </div>
          
          <div className="mt-8 text-sm text-neutral-500">
            Montag bis Freitag: 8:00 - 18:00 Uhr | Samstag: 9:00 - 14:00 Uhr
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
export const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Check,
      title: "100% Kostenlos",
      description: "Unsere Vermittlung ist für Sie völlig kostenfrei und unverbindlich."
    },
    {
      icon: Shield,
      title: "Geprüfte Qualität",
      description: "Alle Steuerberater durchlaufen einen strengen Auswahlprozess."
    },
    {
      icon: Clock,
      title: "Schnelle Vermittlung",
      description: "Meist erhalten Sie bereits binnen 24 Stunden passende Angebote."
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Unser Team unterstützt Sie bei der Auswahl des richtigen Beraters."
    },
    {
      icon: Star,
      title: "Transparente Bewertungen",
      description: "Echte Kundenbewertungen helfen bei Ihrer Entscheidung."
    },
    {
      icon: Award,
      title: "Mehrfach ausgezeichnet",
      description: "Testsieger und TÜV-geprüfte Servicequalität."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Warum MeinSteuerberater.de?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Als Deutschlands führende Steuerberater-Plattform bieten wir Ihnen einzigartige Vorteile 
            für Ihre Beratersuche.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" style={{background: 'linear-gradient(135deg, #10f0e3 0%, #001af8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
