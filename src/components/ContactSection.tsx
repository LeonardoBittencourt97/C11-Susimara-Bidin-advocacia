"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { MapPin, Phone, Clock, MessageSquare, Navigation, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const mapColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação de entrada dos cards de contato
      if (cardsColRef.current) {
        const contactCards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { x: -35, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Animação de revelação suave do mapa com zoom out suave
      if (mapColRef.current) {
        gsap.fromTo(
          mapColRef.current,
          { scale: 0.94, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapColRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Rua+Heitor+Alves+Guimar%C3%A3es,+819,+Centro,+Arauc%C3%A1ria+-+PR,+83702-130&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--brand-burgundy-light)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--brand-burgundy)] dark:text-[var(--brand-burgundy-light)] font-bold">
                06 / Canais Oficiais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Contato & Localização
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Sede física no Centro de Araucária/PR com estrutura privativa para atendimento presencial e suporte online para clientes em todo o Paraná e Brasil.
          </p>
        </div>

        {/* Grid: Dados à Esquerda + Google Maps à Direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coluna 1: Informações e Ações */}
          <div ref={cardsColRef} className="lg:col-span-5 flex flex-col justify-between space-y-6 will-change-transform">
            <div className="space-y-4">
              {/* Card WhatsApp */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--brand-burgundy)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-burgundy)] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--brand-burgundy)] dark:text-[var(--brand-burgundy-light)] font-bold block mb-0.5">
                    WhatsApp & Ligação
                  </span>
                  <p className="font-heading text-lg font-bold text-[var(--text-main)]">
                    {OFFICE_INFO.phone}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento ágil para agendamento de consultas e esclarecimentos prévios.
                  </p>
                </div>
              </div>

              {/* Card Endereço com Botão de Rota Traçada */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--brand-burgundy)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--brand-burgundy)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--brand-burgundy)] dark:text-[var(--brand-burgundy-light)] font-bold block mb-0.5">
                    Endereço da Sede
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)]">
                    {OFFICE_INFO.address}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Centro, Araucária - PR • CEP 83702-130
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)]/25">
                    <a
                      href={OFFICE_INFO.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[var(--brand-burgundy)] dark:text-[var(--brand-burgundy-light)] hover:underline transition-colors group/route"
                    >
                      <Navigation className="w-3.5 h-3.5 transition-transform group-hover/route:rotate-12 text-[var(--brand-burgundy-light)]" />
                      <span>Traçar rota no GPS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/route:translate-x-0.5 group-hover/route:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Instagram */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--brand-burgundy)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--brand-burgundy)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--brand-burgundy)] dark:text-[var(--brand-burgundy-light)] font-bold block mb-0.5">
                    Instagram Oficial
                  </span>
                  <a
                    href={OFFICE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-semibold text-[var(--text-main)] hover:text-[var(--brand-burgundy-light)] transition-colors inline-flex items-center gap-1"
                  >
                    <span>@susibidin.adv</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--brand-burgundy-light)]" />
                  </a>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Conteúdo educativo e atualizações do universo trabalhista e de família.
                  </p>
                </div>
              </div>

              {/* Card Horário */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--brand-burgundy)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--brand-burgundy)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--brand-burgundy)] dark:text-[var(--brand-burgundy-light)] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)]">
                    {OFFICE_INFO.workingHours.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    {OFFICE_INFO.workingHours.weekends}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[var(--brand-burgundy)] hover:bg-[var(--brand-burgundy-light)] text-white py-3.5 gap-2 shadow-md text-sm sm:text-base cursor-pointer hover-lift transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Mapa Interativo do Google com Botão Flutuante de Rota */}
          <div ref={mapColRef} className="lg:col-span-7 flex flex-col justify-between will-change-transform">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-xs">
              <iframe
                title="Localização do Escritório Dra. Susimara Teixeira Bidin em Araucária PR"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />
              {/* Badge de Identificação no Topo do Mapa */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md border border-[var(--border-subtle)]/30 text-xs shadow-md">
                <span className="font-heading font-bold text-[var(--text-main)] block">
                  Dra. Susimara Teixeira Bidin
                </span>
                <span className="text-[var(--text-muted)] font-body">
                  R. Heitor Alves Guimarães, 819 - Sala 4 - Araucária/PR
                </span>
              </div>

              {/* Botão de Rota Traçada Flutuante na Base do Mapa */}
              <div className="absolute bottom-4 inset-x-4 sm:left-auto sm:right-4 p-2 sm:p-2.5 rounded-2xl bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md border border-[var(--border-subtle)]/40 shadow-xl flex items-center justify-between sm:justify-start gap-3">
                <div className="hidden sm:block pl-2 pr-1">
                  <span className="font-heading text-xs font-bold text-[var(--text-main)] block">
                    Como Chegar
                  </span>
                  <span className="text-[0.6875rem] text-[var(--text-muted)] font-body block">
                    Araucária e Região Metropolitana de Curitiba
                  </span>
                </div>
                <a
                  href={OFFICE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[var(--brand-burgundy)] hover:bg-[var(--brand-burgundy-light)] hover:scale-105 text-white py-2.5 px-4 text-xs font-semibold gap-2 shadow-md inline-flex items-center justify-center w-full sm:w-auto transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}