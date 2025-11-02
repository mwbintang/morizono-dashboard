"use client";

// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Target, Users, MapPin, CircleDollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import Image from "next/image";

const About = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Change the document title
    document.title = `${t("about.title")} - Morizono - Gardens`;

    // Update the meta description dynamically
    // const metaDesc = document.querySelector('meta[name="description"]');
    // if (metaDesc) {
    //   metaDesc.setAttribute("content", t("about.subtitle"));
    // } else {
    //   // If not exists, create it
    //   const meta = document.createElement("meta");
    //   meta.name = "description";
    //   meta.content = t("about.subtitle");
    //   document.head.appendChild(meta);
    // }
  }, [t]);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
                <p className="text-4xl md:text-5xl font-bold">{t("about.subtitle")}</p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                  {/* <h2 className="text-3xl font-bold mb-6">{t("about.story")}</h2> */}
                  <p className="text-lg font-semibold text-muted-foreground mb-4">{t("about.storyDesc")}</p>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-medium animate-fade-in">
                  <Image
                    src="/slider/brosure-1.jpg"
                    alt={t("about.story")}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">{t("about.whyChoose")}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
                {[
                  {
                    icon: Award,
                    title: t("about.expertise"),
                    description: t("about.expertiseDesc"),
                  },
                  {
                    icon: Target,
                    title: t("about.quality"),
                    description: t("about.qualityDesc"),
                  },
                  {
                    icon: MapPin,
                    title: t("about.location"),
                    description: t("about.locationDesc"),
                  },
                  {
                    icon: Users,
                    title: t("about.service"),
                    description: t("about.serviceDesc"),
                  },
                  {
                    icon: CircleDollarSign,
                    title: t("about.investment"),
                    description: t("about.investmentDesc"),
                  }
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all animate-scale-in text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
