import { useEffect } from 'react';

export default function GoogleAnalytics(): null {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-PJHBTNKQ2D';
    document.head.appendChild(script);

    // Initialize Google Analytics
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-PJHBTNKQ2D');
  }, []);

  return null;
}

