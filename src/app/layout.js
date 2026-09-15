import "../index.css";
import { LangProvider } from "../hooks/useLang";

export const metadata = {
  title: "Apex — Construction & Contracting",
  description: "Apex construction and contracting services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
