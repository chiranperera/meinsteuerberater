import { Phone, Mail, MapPin, Star, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Steuerberatung', href: '/steuerberatung' },
    { label: 'Buchhaltung', href: '/buchhaltung' },
    { label: 'Jahresabschluss', href: '/jahresabschluss' },
    { label: 'Gründungsberatung', href: '/gruendungsberatung' },
    { label: 'Unternehmensteuer', href: '/unternehmensteuer' },
    { label: 'Lohnbuchhaltung', href: '/lohnbuchhaltung' },
    { label: 'Steueroptimierung', href: '/steueroptimierung' },
    { label: 'Erbschaftsteuer', href: '/erbschaftsteuer' }
  ];

  const locationLinks = [
    { label: 'Berlin', href: '/berlin' },
    { label: 'München', href: '/muenchen' },
    { label: 'Hamburg', href: '/hamburg' },
    { label: 'Köln', href: '/koeln' },
    { label: 'Frankfurt', href: '/frankfurt' },
    { label: 'Stuttgart', href: '/stuttgart' },
    { label: 'Düsseldorf', href: '/duesseldorf' },
    { label: 'Alle Standorte', href: '/standorte' }
  ];

  const companyLinks = [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Karriere', href: '/karriere' },
    { label: 'Presse', href: '/presse' },
    { label: 'Partner werden', href: '/partner-werden' },
    { label: 'Affiliate-Programm', href: '/affiliate' },
    { label: 'Auszeichnungen', href: '/auszeichnungen' }
  ];

  const supportLinks = [
    { label: 'Hilfe & FAQ', href: '/hilfe' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Live Chat', href: '/chat' },
    { label: 'Steuerrechner', href: '/rechner' },
    { label: 'Ratgeber', href: '/ratgeber' },
    { label: 'Glossar', href: '/glossar' }
  ];

  const legalLinks = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
    { label: 'Cookie-Richtlinie', href: '/cookies' },
    { label: 'Widerrufsrecht', href: '/widerruf' }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">MeinSteuerberater</span>
                  <span className="text-lg text-neutral-400">.de</span>
                </div>
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Deutschlands führende Plattform für die Vermittlung qualifizierter Steuerberater. 
                Seit 2018 vertrauen uns über 10.000 zufriedene Kunden.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-green" />
                  <div>
                    <div className="font-medium">0800 123 456 789</div>
                    <div className="text-sm text-neutral-400">Mo-Fr 8-18 Uhr, Sa 9-14 Uhr</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-green" />
                  <div>
                    <div className="font-medium">info@meinsteuerberater.de</div>
                    <div className="text-sm text-neutral-400">Antwort binnen 2 Stunden</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-green" />
                  <div>
                    <div className="font-medium">Hauptsitz München</div>
                    <div className="text-sm text-neutral-400">Maximilianstraße 13, 80539 München</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Leistungen</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Standorte</h3>
              <ul className="space-y-3">
                {locationLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Unternehmen</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Hilfe & Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-neutral-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-brand-yellow" />
              </div>
              <div className="text-2xl font-bold mb-1">4.9/5</div>
              <div className="text-sm text-neutral-400">Kundenbewertung</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-green font-bold text-lg">TÜV</span>
              </div>
              <div className="text-2xl font-bold mb-1">TÜV</div>
              <div className="text-sm text-neutral-400">Geprüfte Qualität</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-blue font-bold text-sm">TEST</span>
              </div>
              <div className="text-2xl font-bold mb-1">1,2</div>
              <div className="text-sm text-neutral-400">Stiftung Warentest</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-green font-bold text-xs">AWARD</span>
              </div>
              <div className="text-2xl font-bold mb-1">2024</div>
              <div className="text-sm text-neutral-400">Service Champion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-neutral-950 py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm">
              © {currentYear} MeinSteuerberater.de - Alle Rechte vorbehalten
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-neutral-400 text-sm mr-2">Folgen Sie uns:</span>
              <a 
                href="https://facebook.com/meinsteuerberater" 
                className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/meinsteuerberater" 
                className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/meinsteuerberater"
                className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/meinsteuerberater" 
                className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
            <p className="text-neutral-400 text-xs leading-relaxed">
              MeinSteuerberater.de ist ein Service der Steuerberater Vermittlung GmbH. 
              Wir vermitteln ausschließlich qualifizierte und zugelassene Steuerberater nach §36 StBerG. 
              Alle Angaben ohne Gewähr.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
