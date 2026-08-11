import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// Raleway is a variable font (wght 100-900), so no `weight` array is needed.
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const ogImage = {
  url: "/pic_2.jpeg",
  alt: "Suzan Owembabazi, Marketing & Communications Specialist",
};

export const metadata: Metadata = {
  title: "Suzan Owembabazi — Marketing & Communications Portfolio",
  description:
    "Marketing and Communications specialist in Kampala, Uganda. Brand storytelling, public relations, digital marketing, and experience design.",
  openGraph: {
    title: "Suzan Owembabazi — Marketing & Communications Portfolio",
    description:
      "Creating meaningful connections between brands and their audiences through strategy, creativity, and impactful communication.",
    type: "website",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suzan Owembabazi — Marketing & Communications Portfolio",
    description:
      "Creating meaningful connections between brands and their audiences through strategy, creativity, and impactful communication.",
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream font-sans text-ink-soft">
        {children}
      </body>
    </html>
  );
}
