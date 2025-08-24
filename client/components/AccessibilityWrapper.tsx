import { useEffect } from 'react';

interface AccessibilityWrapperProps {
  children: React.ReactNode;
}

const AccessibilityWrapper: React.FC<AccessibilityWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-brand-blue text-white p-4 z-50 rounded-br-lg';
    skipLink.id = 'skip-link';
    
    // Add skip link if it doesn't exist
    if (!document.getElementById('skip-link')) {
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Focus management for modal/dialog elements
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key closes dropdowns/modals
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityWrapper;
