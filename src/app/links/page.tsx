import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Canais Oficiais & Links | Dra. Susimara Teixeira Bidin Advocacia",
  description:
    "Acesse rapidamente o WhatsApp oficial da Dra. Susimara Teixeira Bidin, Instagram, localização em Araucária/PR e website institucional.",
  alternates: {
    canonical: "https://susimarabidin.adv.br/links",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://susimarabidin.adv.br/links",
    title: "Canais Oficiais & Links | Dra. Susimara Teixeira Bidin Advocacia",
    description:
      "Acesse rapidamente o WhatsApp oficial, Instagram e localização da sede em Araucária/PR.",
    siteName: "Dra. Susimara Teixeira Bidin Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Susimara Teixeira Bidin Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canais Oficiais & Links | Dra. Susimara Teixeira Bidin Advocacia",
    description:
      "Acesse rapidamente o WhatsApp oficial, Instagram e localização da sede em Araucária/PR.",
    images: ["/og-image_optimized_300.jpeg"],
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: "(41) 98484-9550 • Fale com a Dra. Susimara",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Áreas de atuação, artigos educativos e biografia",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Siga no Instagram",
      subtitle: "@susibidin.adv • Conteúdo jurídico e orientações",
      href: OFFICE_INFO.social.instagram,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "maps",
      title: "Como Chegar / Traçar Rota no GPS",
      subtitle: "Rua Heitor Alves Guimarães, 819, Sala 4 - Centro, Araucária/PR",
      href: OFFICE_INFO.mapsDirectionsUrl,
      icon: MapPin,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito do Trabalho",
    "Defesa de Empresas",
    "Direitos do Trabalhador",
    "Divórcio & Partilha",
    "Guarda & Alimentos",
    "Adoção & Convivência",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#1F1F1F]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Vinho Escuro com Logo e Identidade Visual */}
        <div className="relative bg-[#23070B] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#6B1D2F]/40">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#A3485E" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#A3485E" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A3485E]/40 bg-white/5 backdrop-blur-md text-xs font-heading tracking-wider text-[#F7F2EC]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A3485E]" />
              <span>{OFFICE_INFO.oab}</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#F7F2EC]/80">
              Araucária - PR
            </span>
          </div>

          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <div className="relative w-full max-w-[560px] xl:max-w-[650px] h-60 xl:h-72 mb-4">
              <Image
                src="/logo_semfundo_escritabranca_paramodoescuro.png"
                alt="Dra. Susimara Teixeira Bidin Advocacia"
                fill
                priority
                className="object-contain object-center drop-shadow-md"
                sizes="(min-width: 1280px) 650px, 560px"
              />
            </div>

            <div className="h-0.5 w-16 bg-[#A3485E]/60 mb-4" />

            <h1 className="font-heading text-xl xl:text-2xl font-semibold max-w-sm leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-xs mt-3 leading-relaxed">
              Atuação estratégica e acolhedora em Direito do Trabalho e Direito de Família.
            </p>
          </div>

          <div className="relative z-10 text-[0.6875rem] font-body text-gray-400 flex items-center justify-between border-t border-white/10 pt-3">
            <span>Sede: Araucária/PR</span>
            <span>© {new Date().getFullYear()} Susimara Teixeira Bidin Advocacia</span>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Ações e Especialidades */}
        <div className="bg-[#FFFFFF] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-3 xl:space-y-3.5 py-4">
            
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full max-w-[460px] xl:max-w-[520px] h-40 xl:h-48 mb-2">
                <Image
                  src="/logo_semfundo_escritapreta_paramodoclaro.png"
                  alt="Dra. Susimara Teixeira Bidin Advocacia"
                  fill
                  priority
                  className="object-contain object-center drop-shadow-xs"
                  sizes="(min-width: 1280px) 520px, 460px"
                />
              </div>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#6B1D2F] block mb-0.5 font-bold">
                Acesso Rápido
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#1F1F1F]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-500 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com a titular.
              </p>
            </div>

            <div className="space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3 xl:p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#6B1D2F] text-white border-[#6B1D2F] hover:bg-[#3D0C11] shadow-sm hover:shadow-md"
                    : "bg-[#FFFFFF] text-[#1F1F1F] border-[#A3485E]/30 hover:border-[#6B1D2F] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/15 text-white" : "bg-[#F7F2EC] text-[#6B1D2F]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm font-bold block leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block ${
                            item.highlight ? "text-white/85" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white/85" : "text-[#6B1D2F]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl border border-[#A3485E]/30 bg-[#F7F2EC]/60">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#6B1D2F] font-bold mb-1.5">
                <Scale className="w-3.5 h-3.5" />
                <span>Especialidades Principais</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-white text-gray-700 border border-[#A3485E]/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.address}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (Bio Instagram Otimizada) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between min-h-[100dvh] w-full px-5 py-6 overflow-y-auto bg-[#FFFFFF]">
        {/* Fundo Geométrico Sofisticado com Linhas e Formas em Vinho/Bege */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="susimara-mobile-geom-pattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0h80v80H0z"
                  fill="none"
                  stroke="#A3485E"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                />
                <path
                  d="M0 0l80 80M80 0L0 80"
                  fill="none"
                  stroke="#6B1D2F"
                  strokeWidth="0.6"
                  strokeOpacity="0.5"
                />
                <path
                  d="M40 0l40 40-40 40-40-40z"
                  fill="none"
                  stroke="#6B1D2F"
                  strokeWidth="0.8"
                  strokeOpacity="0.7"
                />
                <circle cx="40" cy="40" r="2" fill="#6B1D2F" fillOpacity="0.8" />
                <circle cx="0" cy="0" r="1.5" fill="#A3485E" fillOpacity="0.7" />
                <circle cx="80" cy="0" r="1.5" fill="#A3485E" fillOpacity="0.7" />
                <circle cx="0" cy="80" r="1.5" fill="#A3485E" fillOpacity="0.7" />
                <circle cx="80" cy="80" r="1.5" fill="#A3485E" fillOpacity="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#susimara-mobile-geom-pattern)" />
          </svg>

          {/* Gradiente Suave Central */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#A3485E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#6B1D2F]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Cabeçalho Mobile */}
        <div className="relative z-10 flex flex-col items-center text-center pt-5 pb-2">
          <div className="relative w-[92vw] max-w-[380px] h-36 sm:h-40 mb-3">
            <Image
              src="/logo_semfundo_escritapreta_paramodoclaro.png"
              alt="Dra. Susimara Teixeira Bidin Advocacia"
              fill
              priority
              className="object-contain object-center drop-shadow-xs"
              sizes="(max-width: 768px) 380px, 320px"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#A3485E]/40 bg-[#F7F2EC]/90 backdrop-blur-xs text-[0.6875rem] font-heading text-[#6B1D2F] font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A3485E]" />
            <span>{LAWYER_PROFILE.name} • {OFFICE_INFO.oab}</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-sm mx-auto space-y-2.5 my-auto py-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isInternal = item.href.startsWith("/");
            const buttonClasses = `w-full py-2.5 px-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border backdrop-blur-xs ${
              item.highlight
                ? "bg-[#6B1D2F] text-white border-[#6B1D2F] shadow-sm hover:bg-[#3D0C11]"
                : "bg-white/95 text-[#1F1F1F] border-[#A3485E]/35 shadow-2xs hover:border-[#6B1D2F]"
            }`;

            const content = (
              <>
                <div className="flex items-center gap-3 text-left">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#F7F2EC] text-[#6B1D2F]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-heading text-xs font-bold block leading-tight">
                      {item.title}
                    </span>
                    <span
                      className={`font-body text-[0.5625rem] block leading-tight ${
                        item.highlight ? "text-white/85" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    item.highlight ? "text-white/85" : "text-[#6B1D2F]"
                  }`}
                />
              </>
            );

            return isInternal ? (
              <Link key={item.id} href={item.href} className={buttonClasses}>
                {content}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {content}
              </a>
            );
          })}
        </div>

        <div className="relative z-10 text-center space-y-1.5 pt-3 border-t border-gray-100">
          <div className="w-full max-w-xs mx-auto py-1 px-2 rounded-lg bg-[#F7F2EC]/80 backdrop-blur-xs border border-[#A3485E]/30">
            <span className="font-body text-[0.625rem] text-gray-700 block truncate">
              Direito do Trabalho • Defesa Patronal • Família • Divórcio • Guarda
            </span>
          </div>
          <p className="font-body text-[0.625rem] text-gray-500">
            © {new Date().getFullYear()} Susimara Teixeira Bidin Advocacia • Araucária/PR
          </p>
        </div>
      </div>
    </main>
  );
}