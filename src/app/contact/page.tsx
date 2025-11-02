"use client";

// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useLanguage();
  useEffect(() => {
      // Change the document title
      document.title = `${t("contact.title")} - Morizono - Gardens`;
  
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {t("contact.title")}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {t("contact.subtitle")}
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {/* Phone */}
                  <Card className="animate-fade-in-up">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {t("contact.phone")}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {t("contact.reachOut")}
                      </p>
                      <a
                        href="tel:+6281234567890"
                        className="text-accent font-semibold hover:underline"
                      >
                        +62 812-3456-7890
                      </a>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{t("contact.email")}</h3>
                      <p className="text-muted-foreground mb-2">
                        {t("contact.sendMessage")}
                      </p>
                      <a
                        href="mailto:info@properti.com"
                        className="text-accent font-semibold hover:underline"
                      >
                        info@properti.com
                      </a>
                    </CardContent>
                  </Card>

                  {/* Address */}
                  <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {t("contact.address")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("contact.addressDetail")}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Hours */}
                  <Card className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{t("contact.hours")}</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>{t("contact.hoursDetail")}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="animate-fade-in">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">
                        {t("contact.sendMessage")}
                      </h2>

                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {t("contact.name")}
                            </label>
                            <Input placeholder={t("contact.name")} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {t("contact.email")}
                            </label>
                            <Input type="email" placeholder={t("contact.emailPlaceholder")} />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {t("contact.phone")}
                            </label>
                            <Input type="tel" placeholder="+62 812-3456-7890" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {t("contact.subject")}
                            </label>
                            <Input placeholder={t("contact.subject")} />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t("contact.message")}
                          </label>
                          <Textarea placeholder={t("contact.message")} rows={6} />
                        </div>

                        <Button size="lg" className="w-full">
                          {t("contact.send")}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Map */}
                  <Card className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <CardContent className="p-0">
                      <div className="h-[300px] bg-muted rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.23326108092!2d106.68942925!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Lokasi Kantor Kami"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
