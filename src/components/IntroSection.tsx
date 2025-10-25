"use client";

import { Building2, Award, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("intro.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t("intro.desc")}
          </p>
        </div>

        {/* 3 Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="text-accent" size={32} />,
              title: t("intro.mission"),
              desc: t("intro.missionDesc"),
            },
            {
              icon: <Award className="text-accent" size={32} />,
              title: t("intro.vision"),
              desc: t("intro.visionDesc"),
            },
            {
              icon: <Users className="text-accent" size={32} />,
              title: t("intro.values"),
              desc: t("intro.valuesDesc"),
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
