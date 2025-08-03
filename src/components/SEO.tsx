import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getEnvConfig } from '../utils/envValidation';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noindex = false,
}) => {
  const location = useLocation();
  const config = getEnvConfig();

  const siteTitle = config.APP_TITLE;
  const siteDescription = config.APP_DESCRIPTION;
  const currentUrl = `${window.location.origin}${location.pathname}`;

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description || siteDescription;
  const defaultImage = `${window.location.origin}/og-image.jpg`;
  const pageImage = image || defaultImage;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', pageDescription);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Open Graph tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:site_name', siteTitle, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage);

    // Additional meta tags for therapy website
    updateMetaTag('author', config.PRACTICE_NAME);
    updateMetaTag('theme-color', '#52d98b'); // Primary color

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
  }, [
    pageTitle,
    pageDescription,
    pageImage,
    currentUrl,
    keywords,
    type,
    noindex,
    config.PRACTICE_NAME,
  ]);

  return null; // This component doesn't render anything
};

export default SEO;
