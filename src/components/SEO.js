import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = 'ResumeKraft - #1 Free Professional Resume Builder & CV Maker';
  const defaultDescription = 'Build a professional resume in minutes with ResumeKraft. The best free AI resume builder 2024. Create ATS-friendly CVs, download PDF, and land your dream job. No watermarks, no sign-up needed.';
  const defaultKeywords = 'free resume builder, best resume builder 2024, online cv maker, professional resume templates, pdf resume creator, ats friendly resume, resume maker free, job application tool, cv builder, resume design, google docs resume alternative';
  const siteUrl = 'https://resumekraft.com'; // Replace with actual domain
  const defaultImage = 'https://resumekraft.com/og-image.jpg'; // Replace with actual image

  return (
    <Helmet>
      {/* Basic Tags */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url || siteUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Structured Data (JSON-LD) for SEO Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "ResumeKraft",
          "url": siteUrl,
          "description": defaultDescription,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
             "Real-time Preview",
             "PDF Export",
             "ATS Friendly Templates",
             "Privacy Focused (Local Storage)"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
