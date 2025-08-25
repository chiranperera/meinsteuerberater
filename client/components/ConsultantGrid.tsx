import { useState } from 'react';
import { Star, MapPin, Phone, Mail, Award, Users, Clock, Check, ArrowRight } from 'lucide-react';

const ConsultantGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const consultants = [
    {
      id: 1,
      name: "Dr. Marina Weber",
      title: "Steuerberaterin",
      location: "München",
      distance: "2.5 km",
      rating: 4.9,
      reviewCount: 127,
      experience: "15 Jahre",
      specialties: ["Unternehmensteuer", "Internationale Steuer", "Gründungsberatung"],
      languages: ["Deutsch", "Englisch"],
      responseTime: "< 2 Stunden",
      pricing: "ab 85€/h",
      verified: true,
      topRated: true,
      avatar: "MW",
      description: "Expertin für Unternehmensteuer und internationale Steuerplanung mit über 15 Jahren Erfahrung.",
      achievements: ["Fachanwältin für Steuerrecht", "IHK-zertifiziert"],
      availableToday: true
    },
    {
      id: 2,
      name: "Thomas Schneider",
      title: "Steuerberater & Wirtschaftsprüfer",
      location: "Berlin",
      distance: "1.2 km",
      rating: 4.8,
      reviewCount: 89,
      experience: "12 Jahre",
      specialties: ["Jahresabschluss", "Buchhaltung", "GmbH-Beratung"],
      languages: ["Deutsch"],
      responseTime: "< 4 Stunden",
      pricing: "ab 75€/h",
      verified: true,
      topRated: false,
      avatar: "TS",
      description: "Spezialisiert auf Jahresabschlüsse und Buchhaltung für kleine und mittlere Unternehmen.",
      achievements: ["Wirtschaftsprüfer", "Certified Tax Advisor"],
      availableToday: false
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Steuerberaterin",
      location: "Hamburg",
      distance: "800 m",
      rating: 4.9,
      reviewCount: 156,
      experience: "18 Jahre",
      specialties: ["Privatsteuern", "Erbschaftsteuer", "Immobiliensteuern"],
      languages: ["Deutsch", "Englisch", "Französisch"],
      responseTime: "< 1 Stunde",
      pricing: "ab 90€/h",
      verified: true,
      topRated: true,
      avatar: "SJ",
      description: "Führende Expertin für Privatsteuern und Erbschaftssteueroptimierung.",
      achievements: ["Master of Tax Law", "Erbschaftsteuer-Spezialistin"],
      availableToday: true
    },
    {
      id: 4,
      name: "Michael Braun",
      title: "Steuerberater",
      location: "Köln",
      distance: "3.1 km",
      rating: 4.7,
      reviewCount: 92,
      experience: "10 Jahre",
      specialties: ["Startup-Beratung", "Freelancer-Steuern", "Digitale Nomaden"],
      languages: ["Deutsch", "Englisch"],
      responseTime: "< 3 Stunden",
      pricing: "ab 70€/h",
      verified: true,
      topRated: false,
      avatar: "MB",
      description: "Moderner Steuerberater mit Fokus auf Startups, Freelancer und digitale Geschäftsmodelle.",
      achievements: ["Startup-Mentor", "Digitalisierungs-Experte"],
      availableToday: true
    }
  ];

  const filters = [
    { id: 'all', label: 'Alle Berater', count: consultants.length },
    { id: 'topRated', label: 'Top bewertet', count: consultants.filter(c => c.topRated).length },
    { id: 'available', label: 'Heute verfügbar', count: consultants.filter(c => c.availableToday).length },
    { id: 'experienced', label: '15+ Jahre', count: consultants.filter(c => parseInt(c.experience) >= 15).length }
  ];

  const filteredConsultants = consultants.filter(consultant => {
    switch (selectedFilter) {
      case 'topRated':
        return consultant.topRated;
      case 'available':
        return consultant.availableToday;
      case 'experienced':
        return parseInt(consultant.experience) >= 15;
      default:
        return true;
    }
  });

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? 'fill-brand-yellow text-brand-yellow' 
            : index < rating
            ? 'fill-brand-yellow/50 text-brand-yellow' 
            : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <section className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Qualifizierte Steuerberater in Ihrer Nähe
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Entdecken Sie geprüfte Steuerberater mit nachgewiesener Expertise und exzellenten Bewertungen. 
            Alle Profile sind verifiziert und TÜV-geprüft.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Consultant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {filteredConsultants.map((consultant) => (
            <div key={consultant.id} className="card group cursor-pointer">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white text-lg font-semibold flex-shrink-0">
                    {consultant.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {consultant.name}
                      </h3>
                      {consultant.verified && (
                        <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {consultant.topRated && (
                        <div className="px-2 py-1 bg-brand-yellow text-white text-xs rounded-full font-medium">
                          TOP
                        </div>
                      )}
                    </div>
                    <p className="text-neutral-600 text-sm">{consultant.title}</p>
                    <div className="flex items-center gap-1 text-neutral-500 text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{consultant.location} • {consultant.distance}</span>
                    </div>
                  </div>
                </div>
                {consultant.availableToday && (
                  <div className="px-3 py-1 bg-brand-green bg-opacity-10 text-brand-green text-xs rounded-full font-medium">
                    Heute verfügbar
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(consultant.rating)}
                </div>
                <span className="font-semibold text-neutral-900">{consultant.rating}</span>
                <span className="text-neutral-600 text-sm">({consultant.reviewCount} Bewertungen)</span>
              </div>

              {/* Description */}
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                {consultant.description}
              </p>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-neutral-900 mb-2">Spezialisierungen:</h4>
                <div className="flex flex-wrap gap-2">
                  {consultant.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-brand-blue bg-opacity-10 text-brand-blue text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-green" />
                  <span className="text-neutral-600">{consultant.experience} Erfahrung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-green" />
                  <span className="text-neutral-600">{consultant.responseTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-green" />
                  <span className="text-neutral-600">{consultant.languages.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-900 font-semibold">{consultant.pricing}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-1">
                  {consultant.achievements.map((achievement, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-neutral-200">
                <button className="flex-1 btn-primary text-sm py-3">
                  Kostenloses Angebot anfragen
                </button>
                <button className="px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors">
                  <Phone className="w-4 h-4 text-neutral-600" />
                </button>
                <button className="px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors">
                  <Mail className="w-4 h-4 text-neutral-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center gap-2">
            Weitere Steuerberater anzeigen
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-hero rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            Nicht der richtige Steuerberater dabei?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Nutzen Sie unsere intelligente Suche und erhalten Sie bis zu 5 maßgeschneiderte Angebote 
            von Steuerberatern, die perfekt zu Ihren Bedürfnissen passen.
          </p>
          <a href="#search-form" className="btn-primary inline-flex items-center gap-2">
            Jetzt kostenlos Angebote erhalten
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultantGrid;
