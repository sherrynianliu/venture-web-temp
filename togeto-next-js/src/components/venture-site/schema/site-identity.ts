import { CONTACT_CHANNELS } from "@/components/venture-site/content/contact-channels";

export const ventureIdentityStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.venture-mfg.com/#organization",
      name: "Venture Electronics",
      legalName: "Venture Electronics Tech Ltd",
      url: CONTACT_CHANNELS.currentMainWebsite,
      email: CONTACT_CHANNELS.generalEmail,
      telephone: CONTACT_CHANNELS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Building 36, Chentian Industrial Area, Xixiang, Bao'an District",
        addressLocality: "Shenzhen",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.venture-mfg.com/#website",
      name: "Venture Electronics",
      url: CONTACT_CHANNELS.currentMainWebsite,
    },
  ],
};
