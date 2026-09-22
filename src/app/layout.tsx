import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://susimarabidin.adv.br"),
  title: {
    default: "Susimara Teixeira Bidin | Advocacia em Araucária - PR (Trabalho e Família)",
    template: "%s | Susimara Teixeira Bidin Advocacia",
  },
  description:
    "Escritório de advocacia em Araucária/PR especializado em Direito do Trabalho e Direito de Família. Dra. Susimara Teixeira Bidin OAB/PR 94.840. Mais de 8 anos de experiência com atendimento humanizado e estratégico.",
  keywords: [
    "advogada araucaria pr",
    "susimara bidin advocacia",
    "advogado trabalhista araucaria",
    "divorcio e pensao araucaria",
    "guarda compartilhada araucaria",
    "rescisao trabalhista araucaria pr",
    "horas extras araucaria",
    "direito de familia araucaria pr",
    "oab pr 94840",
  ],
  authors: [{ name: "Dra. Susimara Teixeira Bidin" }],
  creator: "Dra. Susimara Teixeira Bidin",
  publisher: "Susimara Teixeira Bidin Advocacia",
  alternates: {
    canonical: "https://susimarabidin.adv.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://susimarabidin.adv.br",
    title: "Susimara Teixeira Bidin | Advocacia em Araucária - PR",
    description:
      "Atuação jurídica estratégica e humanizada em Direito do Trabalho e Direito de Família. Dra. Susimara Teixeira Bidin OAB/PR 94.840.",
    siteName: "Susimara Teixeira Bidin Advocacia",
    images: [
      {
        url: "/logo_semfundo_escritapreta_paramodoclaro.png",
        width: 1200,
        height: 630,
        alt: "Susimara Teixeira Bidin Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Susimara Teixeira Bidin | Advocacia em Araucária - PR",
    description:
      "Atuação jurídica estratégica e humanizada em Direito do Trabalho e Direito de Família. Dra. Susimara Teixeira Bidin OAB/PR 94.840.",
    images: ["/logo_semfundo_escritapreta_paramodoclaro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon_32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${philosopher.variable} ${mulish.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}