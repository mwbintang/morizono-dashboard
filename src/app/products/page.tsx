"use client";

// import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    id: 1,
    name: "Rumah Modern Minimalis BSD",
    price: "Rp 1.850.000.000",
    location: "BSD City, Tangerang",
    bedrooms: 3,
    bathrooms: 2,
    landSize: 120,
    buildingSize: 90,
    image: "/placeholder.svg",
    type: "ready",
  },
  {
    id: 2,
    name: "Rumah Eksklusif Pondok Indah",
    price: "Rp 4.500.000.000",
    location: "Pondok Indah, Jakarta Selatan",
    bedrooms: 4,
    bathrooms: 3,
    landSize: 200,
    buildingSize: 180,
    image: "/placeholder.svg",
    type: "ready",
  },
  {
    id: 3,
    name: "Rumah Cluster Summarecon",
    price: "Rp 2.200.000.000",
    location: "Summarecon Bekasi",
    bedrooms: 3,
    bathrooms: 2,
    landSize: 100,
    buildingSize: 85,
    image: "/placeholder.svg",
    type: "indent",
  },
  {
    id: 4,
    name: "Rumah Premium Bintaro",
    price: "Rp 3.100.000.000",
    location: "Bintaro, Tangerang Selatan",
    bedrooms: 4,
    bathrooms: 3,
    landSize: 150,
    buildingSize: 140,
    image: "/placeholder.svg",
    type: "ready",
  },
  {
    id: 5,
    name: "Rumah Strategis Sentul City",
    price: "Rp 1.650.000.000",
    location: "Sentul City, Bogor",
    bedrooms: 3,
    bathrooms: 2,
    landSize: 110,
    buildingSize: 80,
    image: "/placeholder.svg",
    type: "indent",
  },
  {
    id: 6,
    name: "Rumah Mewah PIK",
    price: "Rp 5.200.000.000",
    location: "PIK, Jakarta Utara",
    bedrooms: 5,
    bathrooms: 4,
    landSize: 250,
    buildingSize: 220,
    image: "/placeholder.svg",
    type: "ready",
  },
];

const Products = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
      // Change the document title
      document.title = `${t("products.title")} - Morizono - Gardens`;
  
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

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.type === filter);

  return (
    <>
      {/* <Head>
        <title>{t("products.title")} - PremiumHomes</title>
        <meta name="description" content={t("products.subtitle")} />
      </Head> */}

      <div className="min-h-screen">
        <Navbar />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {t("products.title")}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {t("products.subtitle")}
                </p>
              </div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-8 border-b">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-4 flex-wrap">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                >
                  {t("products.all")}
                </Button>
                <Button
                  variant={filter === "ready" ? "default" : "outline"}
                  onClick={() => setFilter("ready")}
                >
                  {t("products.house")}
                </Button>
                <Button
                  variant={filter === "indent" ? "default" : "outline"}
                  onClick={() => setFilter("indent")}
                >
                  {t("products.commercial")}
                </Button>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover:shadow-medium transition-all animate-scale-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            product.type === "ready"
                              ? "bg-accent text-white"
                              : "bg-secondary text-primary"
                          }`}
                        >
                          {product.type === "ready" ? "Siap Huni" : "Indent"}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{product.location}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y">
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-accent" />
                          <span className="text-sm">{product.bedrooms} KT</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-accent" />
                          <span className="text-sm">{product.bathrooms} KM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4 text-accent" />
                          <span className="text-sm">{product.landSize}m²</span>
                        </div>
                      </div>

                      <p className="text-2xl font-bold text-accent mb-4">
                        {product.price}
                      </p>

                      <Button
                        className="w-full"
                        onClick={() => router.push(`/products/${product.id}`)}
                      >
                        {t("products.viewDetails")}
                      </Button>
                    </CardContent>
                  </Card>
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

export default Products;
