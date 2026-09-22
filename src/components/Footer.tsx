"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, MessageSquare, ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#23070B] text-white border-t border-[var(--brand-burgundy-light)]/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-12 w-64">
              <Image
                src="/logo_semfundo_escritabranca_paramodoescuro.png"
                alt="Dra. Susimara Teixeira Bidin Advocacia"
                fill
                className="object-contain object-left"
                sizes="260px"
              />
            </div>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Atuação especializada e personalizada em Direito do Trabalho e Direito de Família. Atendimento humanizado, ético e resolutivo em Araucária/PR e em todo o Brasil.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-burgundy-light)]/40 bg-white/5 text-xs font-heading text-[var(--brand-beige)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-burgundy-light)]" />
              <span>{OFFICE_INFO.lawyerName} • {OFFICE_INFO.oab}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[var(--brand-beige)] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300">
              <li>
                <Link href="#inicio" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">A Advogada</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-white transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-white transition-colors">Conteúdo Jurídico</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-white transition-colors">Como Atuamos</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">Contato & Localização</Link>
              </li>
              <li>
                <Link href="/links" className="text-[var(--brand-burgundy-light)] hover:underline">Link-in-Bio (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[var(--brand-beige)] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading">Endereço:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Instagram:</strong> @susibidin.adv</p>
              <p><strong className="text-white font-heading">Horários:</strong> {OFFICE_INFO.workingHours.weekdays}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Susimara Teixeira Bidin"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--brand-burgundy-light)] flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dra. Susimara Teixeira Bidin"
                className="w-9 h-9 rounded-lg bg-[var(--brand-burgundy-light)] hover:bg-[var(--brand-burgundy)] flex items-center justify-center text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[0.6875rem] text-gray-400 font-body">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} Susimara Teixeira Bidin Advocacia • {OFFICE_INFO.oab}. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 max-w-3xl">
              Este website possui caráter exclusivamente informativo e pedagógico, em estrita observância à Lei nº 8.906/1994, à Resolução CFOAB nº 02/2015 (Código de Ética e Disciplina) e ao Provimento nº 205/2021 do CFOAB.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-[var(--brand-burgundy-light)] text-gray-300 hover:text-white transition-colors flex-shrink-0 cursor-pointer text-xs font-heading"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}