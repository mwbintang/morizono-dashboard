import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Maximize, MapPin, ArrowLeft, Home } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API/database
  const product = {
    id: id,
    name: "Rumah Modern Minimalis BSD",
    price: "Rp 1.850.000.000",
    location: "BSD City, Tangerang",
    bedrooms: 3,
    bathrooms: 2,
    landSize: 120,
    buildingSize: 90,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    type: "ready",
    description: "Rumah modern minimalis dengan desain kontemporer yang elegan. Terletak di kawasan BSD City yang strategis dengan akses mudah ke berbagai fasilitas. Lingkungan asri dan aman dengan keamanan 24 jam.",
    facilities: [
      "Carport 2 mobil",
      "Taman depan dan belakang",
      "Dapur modern dengan kitchen set",
      "Kamar mandi dengan water heater",
      "Ruang tamu luas",
      "Ruang keluarga",
      "Teras"
    ],
    nearby: [
      "5 menit ke AEON Mall BSD",
      "10 menit ke Sekolah Bina Nusantara",
      "15 menit ke Stasiun Rawa Buntu",
      "Dekat RS Medika BSD"
    ]
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Detail Properti</title>
        <meta name="description" content={`${product.name} - ${product.price}. ${product.description}`} />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/products" className="text-muted-foreground hover:text-accent transition-colors">
                Produk
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{product.name}</span>
            </div>

            {/* Back Button */}
            <Link to="/products">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Daftar
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Images */}
              <div className="space-y-4 animate-fade-in">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-medium">
                  <img 
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      product.type === "ready" 
                        ? "bg-accent text-white" 
                        : "bg-secondary text-primary"
                    }`}>
                      {product.type === "ready" ? "Siap Huni" : "Indent"}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1).map((img, index) => (
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden shadow-soft">
                      <img 
                        src={img}
                        alt={`${product.name} ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                
                <div className="flex items-center text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{product.location}</span>
                </div>

                <p className="text-4xl font-bold text-accent mb-8">{product.price}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-secondary/30 rounded-xl">
                  <div className="text-center">
                    <Bed className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <p className="text-2xl font-bold">{product.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Kamar Tidur</p>
                  </div>
                  <div className="text-center">
                    <Bath className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <p className="text-2xl font-bold">{product.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Kamar Mandi</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <p className="text-2xl font-bold">{product.landSize}</p>
                    <p className="text-sm text-muted-foreground">Luas Tanah (m²)</p>
                  </div>
                  <div className="text-center">
                    <Home className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <p className="text-2xl font-bold">{product.buildingSize}</p>
                    <p className="text-sm text-muted-foreground">Luas Bangunan (m²)</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Deskripsi</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Facilities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Fasilitas</h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {product.facilities.map((facility, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nearby */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Akses Lokasi</h2>
                  <ul className="space-y-3">
                    {product.nearby.map((place, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{place}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full">
                    Hubungi Kami
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    Jadwalkan Kunjungan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
