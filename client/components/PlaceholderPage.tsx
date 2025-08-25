import { ArrowRight, Home } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description = "Diese Seite befindet sich noch im Aufbau. Nutzen Sie gerne unsere Hauptseite, um Ihren perfekten Steuerberater zu finden." 
}) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* Page Icon */}
            <div className="w-24 h-24 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-white text-2xl font-bold">
                {title.charAt(0).toUpperCase()}
              </span>
            </div>

            {/* Content */}
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Zur Startseite
              </a>
              <a 
                href="/steuerberater-finden" 
                className="btn-secondary inline-flex items-center gap-2"
              >
                Steuerberater finden
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Help Text */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Brauchen Sie Hilfe?
              </h3>
              <p className="text-neutral-600 mb-4">
                Unser Team steht Ihnen gerne zur Verfügung und hilft Ihnen bei der Suche nach dem richtigen Steuerberater.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="tel:08001234567" 
                  className="text-brand-blue hover:text-brand-teal transition-colors"
                >
                  📞 0800 123 456 789
                </a>
                <a 
                  href="mailto:info@meinsteuerberater.de" 
                  className="text-brand-green hover:text-brand-green-600 transition-colors"
                >
                  ✉️ info@meinsteuerberater.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
