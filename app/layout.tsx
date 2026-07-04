import type { Metadata } from "next";
import { Outfit, Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Bonjour avec Phoebe",
  description:
    "Platform belajar Bahasa Prancis untuk pengguna berbahasa Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${nunito.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="aurora-bg" aria-hidden="true">
          <div className="aurora-orb aurora-orb-pink" />
          <div className="aurora-orb aurora-orb-cyan" />
          <div className="aurora-orb aurora-orb-lav" />
        </div>
        {children}
      </body>
    </html>
  );
}
