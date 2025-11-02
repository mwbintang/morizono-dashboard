"use client";

// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { ContentHead } from "@/components/ContentHead";

const awards = [
  {
    year: "2024",
    title: "Best Property Developer Award",
    organization: "Indonesia Property Awards",
    description: "Penghargaan untuk pengembang properti terbaik tahun 2024",
  },
  {
    year: "2023",
    title: "Customer Satisfaction Excellence",
    organization: "Service Quality Institute",
    description: "Penghargaan kepuasan pelanggan dengan rating 4.9/5.0",
  },
  {
    year: "2023",
    title: "Green Building Innovation",
    organization: "Indonesia Green Building Council",
    description: "Inovasi dalam pengembangan bangunan ramah lingkungan",
  },
  {
    year: "2022",
    title: "Top 10 Property Companies",
    organization: "Property Magazine Indonesia",
    description: "Masuk dalam 10 perusahaan properti terbaik di Indonesia",
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Rumah di BSD",
    content:
      "Pelayanan yang sangat memuaskan dari awal konsultasi hingga serah terima. Rumah sesuai dengan yang dijanjikan dan prosesnya sangat transparan.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Siti Nurhaliza",
    role: "Pemilik Rumah di Pondok Indah",
    content:
      "Tim yang profesional dan responsif. Membantu saya menemukan rumah impian dengan lokasi strategis dan harga yang sesuai budget.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Agus Wijaya",
    role: "Pemilik Rumah di Tangerang",
    content:
      "Proses pembelian yang mudah dan cepat. Dokumentasi lengkap dan legal jelas. Sangat puas dengan kualitas bangunannya.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Rina Kusuma",
    role: "Pemilik Rumah di Bekasi",
    content:
      "Fasilitas lengkap dan lingkungan sangat nyaman. After sales service juga sangat baik, selalu siap membantu jika ada pertanyaan.",
    rating: 5,
    image: "/placeholder.svg",
  },
];

const Awards = () => {
  const { t } = useLanguage();
  useEffect(() => {
    // Change the document title
    document.title = `${t("awards.title")} - Morizono - Gardens`;

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
          <ContentHead
            title={t("awards.title")}
            subtitle={t("awards.subtitle")}
          />

          {/* Awards Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  {t("awards.ourAwards")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t("awards.subtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {awards.map((award, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-medium transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-accent">
                            {award.year}
                          </span>
                          <h3 className="text-xl font-bold mt-1 mb-2">
                            {award.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {award.organization}
                          </p>
                          <p className="text-muted-foreground">
                            {award.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  {t("awards.testimonials")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t("awards.subtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-medium transition-all animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      <p className="text-muted-foreground mb-6 italic">
                        &quot;{testimonial.content}&quot;
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-accent/10">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "4.9/5.0", label: "Rating Kepuasan" },
                  { value: "1000+", label: "Keluarga Bahagia" },
                  { value: "15+", label: "Penghargaan" },
                  { value: "10+", label: "Tahun Pengalaman" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="text-4xl font-bold text-accent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
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

export default Awards;
