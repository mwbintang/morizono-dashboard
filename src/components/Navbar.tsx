"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext"; // adjust import if needed
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.facilities"), href: "/facilities" },
    { name: t("nav.awards"), href: "/awards" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const isDark = isHome && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/logo-morizono.png"
              alt="Morizono Logo"
              className="h-full w-auto object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-all duration-200 ${
                  isDark ? "text-white" : "text-foreground"
                } hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-[2px]
                  after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full
                  ${
                    pathname === link.href
                      ? "text-accent after:w-full"
                      : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <LanguageToggle isDark={isDark} />
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isDark ? "text-white" : "text-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-foreground/80 hover:text-accent transition-colors duration-200 ${
                  pathname === link.href ? "text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-2 py-2">
              <LanguageToggle isDark={false} />
            </div>

            <Link href="/contact" className="block">
              <Button
                variant="default"
                size="lg"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
