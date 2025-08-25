import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Schmidt",
      location: "München",
      occupation: "Geschäftsführer",
      rating: 5,
      date: "vor 2 Wochen",
      text: "Dank MeinSteuerberater.de habe ich innerhalb von 24 Stunden den perfekten Steuerberater für mein Unternehmen gefunden. Die Beratung war hervorragend und hat mir viel Zeit und Geld gespart. Absolut empfehlenswert!",
      service: "Unternehmensteuer",
      avatar: "M",
      verified: true,
    },
    {
      id: 2,
      name: "Sandra Müller",
      location: "Berlin",
      occupation: "Freiberuflerin",
      rating: 5,
      date: "vor 1 Woche",
      text: "Als Freiberuflerin war ich unsicher bei meiner Steuererklärung. Der vermittelte Steuerberater hat mir nicht nur geholfen, sondern auch wertvolle Tipps für die Zukunft gegeben. Der Service ist kostenlos und absolut professionell!",
      service: "Steuererklärung",
      avatar: "S",
      verified: true,
    },
    {
      id: 3,
      name: "Thomas Wagner",
      location: "Hamburg",
      occupation: "Startup-Gründer",
      rating: 5,
      date: "vor 3 Tagen",
      text: "Die Gründungsberatung war genau das, was ich brauchte. Kompetent, schnell und unkompliziert. Mein Steuerberater begleitet mich auch weiterhin und ich bin sehr zufrieden mit der Zusammenarbeit.",
      service: "Gründungsberatung",
      avatar: "T",
      verified: true,
    },
    {
      id: 4,
      name: "Julia Hoffmann",
      location: "Köln",
      occupation: "Angestellte",
      rating: 5,
      date: "vor 5 Tagen",
      text: "Endlich eine Plattform, die hält was sie verspricht! Schnelle Vermittlung, transparente Preise und einen Steuerberater, der wirklich versteht, was ich brauche. Ich kann es nur weiterempfehlen.",
      service: "Jahresabschluss",
      avatar: "J",
      verified: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-brand-yellow text-brand-yellow"
            : "text-neutral-300"
        }`}
      />
    ));
  };

  return (
    <section className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Das sagen unsere zufriedenen Kunden
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Über 10.000 Kunden haben bereits ihren perfekten Steuerberater über
            unsere Plattform gefunden. Lesen Sie hier ihre Erfahrungen.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">{renderStars(5)}</div>
            <div className="text-lg font-semibold text-neutral-900">4.9/5</div>
            <div className="text-neutral-600">
              basierend auf 2,847 Bewertungen
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 mx-4 shadow-lg border border-neutral-200 relative">
                    {/* Quote Icon */}
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-green opacity-20" />

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Customer Info */}
                      <div className="text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start gap-4">
                          {/* Avatar */}
                          <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white text-xl font-semibold">
                            {testimonial.avatar}
                          </div>

                          {/* Customer Details */}
                          <div>
                            <h4 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                              {testimonial.name}
                              {testimonial.verified && (
                                <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                              )}
                            </h4>
                            <p className="text-neutral-600">
                              {testimonial.occupation}
                            </p>
                            <div className="flex items-center gap-1 text-neutral-500 text-sm mt-1">
                              <MapPin className="w-4 h-4" />
                              <span>{testimonial.location}</span>
                            </div>
                          </div>

                          {/* Service Badge */}
                          <div className="px-3 py-1 bg-brand-blue bg-opacity-10 text-brand-blue text-sm rounded-full">
                            {testimonial.service}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="lg:col-span-2 space-y-4">
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {renderStars(testimonial.rating)}
                          </div>
                          <div className="flex items-center gap-1 text-neutral-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{testimonial.date}</span>
                          </div>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg text-neutral-700 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-neutral-600" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-brand-blue" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-neutral-200">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 icon-gradient" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-2">
              4.9/5
            </div>
            <div className="text-sm text-neutral-600">
              Durchschnittsbewertung
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Quote className="w-8 h-8 icon-gradient" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-2">
              2.847
            </div>
            <div className="text-sm text-neutral-600">Kundenbewertungen</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl icon-gradient">98%</span>
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-2">98%</div>
            <div className="text-sm text-neutral-600">
              Weiterempfehlungsrate
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-lg icon-gradient">TÜV</span>
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-2">TÜV</div>
            <div className="text-sm text-neutral-600">Geprüfte Qualität</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
