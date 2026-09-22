import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://susimarabidin.adv.br/#legalservice",
    name: OFFICE_INFO.name,
    alternateName: "Susimara Bidin Advocacia",
    description:
      "Advocacia especializada em Direito do Trabalho e Direito de Família em Araucária/PR. Dra. Susimara Teixeira Bidin OAB/PR 94.840.",
    url: "https://susimarabidin.adv.br",
    telephone: `+${OFFICE_INFO.whatsappNumber}`,
    priceRange: "$$",
    image: "https://susimarabidin.adv.br/logo_semfundo_escritapreta_paramodoclaro.png",
    logo: "https://susimarabidin.adv.br/logo_semfundo_escritapreta_paramodoclaro.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Heitor Alves Guimarães, 819, Sala 4 - Centro",
      addressLocality: "Araucária",
      addressRegion: "PR",
      postalCode: "83702-130",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.5925,
      longitude: -49.4097,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.social.instagram,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.oab}, ${LAWYER_PROFILE.specialties}`,
      },
    ],
  };
}