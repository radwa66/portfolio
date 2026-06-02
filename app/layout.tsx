
// import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "Radwa Mohamed | Frontend Engineer",
//   description:
//     "Frontend Engineer specializing in Next.js, React, TypeScript, and modern web experiences in Tokyo, Japan.",
//   keywords: [
//     "Frontend Developer",
//     "Frontend Engineer",
//     "Next.js Developer",
//     "React Developer",
//     "TypeScript Developer",
//     "Frontend Portfolio",
//     "Tokyo Developer",
//   ],
//   authors: [{ name: "Radwa Mohamed" }],
//   creator: "Radwa Mohamed",
//   openGraph: {
//     title: "Radwa Mohamed | Frontend Engineer",
//     description:
//       "Frontend Engineer specializing in Next.js, React, TypeScript, and modern web experiences in Tokyo, Japan.",
//     url: "https://yourdomain.com",
//     siteName: "Radwa Mohamed Portfolio",
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const personSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Person",
  //   name: "Radwa Mohamed",
  //   jobTitle: "Frontend Engineer",
  //   url: "https://yourdomain.com",
  //   sameAs: [
  //     "https://github.com/radwa66",
  //     "https://www.linkedin.com/in/radwa-mohamed-558031393",
  //   ],
  //   address: {
  //     "@type": "PostalAddress",
  //     addressLocality: "Tokyo",
  //     addressCountry: "Japan",
  //   },
  // };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        /> */}

        <Header />

        <main className="flex-1 pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
