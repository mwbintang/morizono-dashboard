"use client";

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">PremiumHomes</h3>
            <p className="text-primary-foreground/80 mb-4">
              {t("footer.aboutDesc") || "About our company"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: t("nav.home") },
                { href: "/about", label: t("nav.about") },
                { href: "/products", label: t("nav.products") },
                { href: "/facilities", label: t("nav.facilities") },
                { href: "/awards", label: t("nav.awards") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contactUs")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="text-accent mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-primary-foreground/80">+62 812-3456-7890</p>
                  <p className="text-primary-foreground/80">+62 821-9876-5432</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-accent mt-1 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@premiumhomes.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@premiumhomes.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <p className="text-primary-foreground/80">
                  {t("contact.addressDetail")}
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("nav.contact")}</h4>
            <div className="flex gap-4">
              {[
                { href: "https://facebook.com", icon: <Facebook size={20} /> },
                { href: "https://www.instagram.com/gardens.ula/", icon: <Instagram size={20} /> },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {currentYear} PremiumHomes. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
