import { CONTACT } from "@/lib/content";

const SITE = "https://crizgen.com";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#org`,
        name: "Crizgen",
        url: `${SITE}/`,
        logo: `${SITE}/icon-512.png`,
        email: CONTACT.email,
        telephone: "+919092656327",
        sameAs: [CONTACT.github, CONTACT.linkedin],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE}/#service`,
        name: "Crizgen",
        url: `${SITE}/`,
        image: `${SITE}/opengraph-image`,
        description:
          "AI, web and mobile studio building AI solutions, websites, web apps and mobile apps for founders and businesses.",
        email: CONTACT.email,
        telephone: "+919092656327",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 29/14, Anna Nagar West Extension",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600101",
          addressCountry: "IN",
        },
        areaServed: "Worldwide",
        serviceType: [
          "AI solutions and automation",
          "Website development",
          "Web application development",
          "Mobile app development",
          "UI/UX design",
        ],
        parentOrganization: { "@id": `${SITE}/#org` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "Crizgen",
        publisher: { "@id": `${SITE}/#org` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
