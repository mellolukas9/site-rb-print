import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";
import "./globals.css";

// Poppins ExtraBold ecoa o peso geométrico do lettering "RB PRINT" do logo; Inter para leitura
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Defina NEXT_PUBLIC_SITE_URL com o domínio final no deploy
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "RB Print | Gráfica rápida em Nilópolis",
  description:
    "Gráfica rápida em Nilópolis há 20 anos. Cartões, panfletos, banners, camisas DTF, canecas, azulejos e fotos. Peça seu orçamento pelo WhatsApp.",
  openGraph: {
    title: "RB Print — a sua gráfica em Nilópolis",
    description: "Catálogo de impressos e personalizados. Escolha o produto e peça pelo WhatsApp.",
    locale: "pt_BR",
    type: "website",
    images: [asset("/images/marca/logo-perfil.webp")],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-full bg-tinta px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: site.name,
              slogan: site.slogan,
              telephone: `+${site.whatsapp.number}`,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                postalCode: "26225-060",
                addressLocality: "Nilópolis",
                addressRegion: "RJ",
                addressCountry: "BR",
              },
              sameAs: [site.instagram.url],
            }),
          }}
        />
      </body>
    </html>
  );
}
