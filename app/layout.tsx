import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // keep this for Tailwind and gradient

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free AI Prompt Helper",
  description: "Boost your AI prompts with this free optimization tool.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* === Google AdSense Script === */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8477228253401329"
          crossOrigin="anonymous"
        />
        {/* === End Google AdSense Script === */}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#1D0B53] via-[#3E1F7A] to-[#D1C4E9] text-gray-900:text-white`}>
        {children}

        {/* === MailerLite Universal Script === */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '1401395');
            `,
          }}
        ></script>
        {/* === End MailerLite Script === */}

        {/* === Google Analytics Tag === */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4C34Y8VDNT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4C34Y8VDNT');
            `,
          }}
        ></script>
        {/* === End Google Analytics Script === */}
      </body>
    </html>
  );
}

