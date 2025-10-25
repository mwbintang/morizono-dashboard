"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider>
        {children}
      </LanguageProvider>
      <WhatsAppButton />
    </ThemeProvider>
  );
}
