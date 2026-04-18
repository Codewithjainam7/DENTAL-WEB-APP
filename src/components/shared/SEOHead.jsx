import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, image, url }) {
  const siteName = 'Dr. Smile Dental Clinic';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Expert dental care with a gentle touch in Palghar, Maharashtra. Dr. Smile Dental Clinic offers world-class treatments for the whole family.';
  const defaultImage = '/og-image.jpg';
  const siteUrl = window.location.origin;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Schema.org for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dr. Smile Dental Clinic",
          "image": image || defaultImage,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "+91XXXXXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Railway Station",
            "addressLocality": "Palghar",
            "addressRegion": "Maharashtra",
            "postalCode": "401404",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.6936,
            "longitude": 72.7655
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
