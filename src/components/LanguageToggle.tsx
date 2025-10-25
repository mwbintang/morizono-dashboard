"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageToggleProps {
  isDark?: boolean;
}

const LanguageToggle = ({ isDark = false }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  const baseButtonClasses = `
    px-3 py-1 text-sm rounded-md transition-all duration-300
    hover:text-accent hover:bg-accent/10
  `;

  const activeClasses = `
    bg-accent/20 text-accent font-semibold
  `;

  const inactiveClasses = isDark
    ? "text-white/80"
    : "text-foreground/80";

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("id")}
        className={`${baseButtonClasses} ${language === "id" ? activeClasses : inactiveClasses
          }`}
      >
        ID
      </Button>

      <span
        className={`${isDark ? "text-white/50" : "text-muted-foreground"
          }`}
      >
        |
      </span>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`${baseButtonClasses} ${language === "en" ? activeClasses : inactiveClasses
          }`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
