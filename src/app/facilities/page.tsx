import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, School, ShoppingBag, Heart, Trees, Building2, Car, Dumbbell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const facilities = [
  {
    icon: Shield,
    title: "Keamanan 24 Jam",
    description: "Sistem keamanan terpadu dengan CCTV dan petugas keamanan profesional yang berjaga selama 24 jam untuk kenyamanan dan ketenangan Anda."
  },
  {
    icon: School,
    title: "Sekolah & Universitas",
    description: "Akses mudah ke berbagai institusi pendidikan berkualitas mulai dari TK hingga universitas ternama dalam radius dekat."
  },
  {
    icon: ShoppingBag,
    title: "Pusat Perbelanjaan",
    description: "Dekat dengan mall, supermarket, dan berbagai pusat perbelanjaan untuk memenuhi kebutuhan sehari-hari Anda."
  },
  {
    icon: Heart,
    title: "Fasilitas Kesehatan",
    description: "Rumah sakit, klinik, dan apotek tersedia di sekitar area untuk kemudahan akses layanan kesehatan."
  },
  {
    icon: Trees,
    title: "Taman & Ruang Hijau",
    description: "Taman bermain anak, jogging track, dan ruang terbuka hijau untuk gaya hidup sehat dan rekreasi keluarga."
  },
  {
    icon: Building2,
    title: "Area Komersial",
    description: "Kawasan bisnis dan perkantoran yang terintegrasi memberikan kemudahan aksesibilitas untuk bekerja."
  },
  {
    icon: Car,
    title: "Akses Transportasi",
    description: "Lokasi strategis dengan akses mudah ke tol, stasiun kereta, dan berbagai moda transportasi publik."
  },
  {
    icon: Dumbbell,
    title: "Fasilitas Olahraga",
    description: "Dilengkapi dengan fasilitas olahraga seperti kolam renang, lapangan basket, dan fitness center."
  }
];

const Facilities = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t('facilities.title')} - PremiumHomes</title>
        <meta name="description" content={t('facilities.subtitle')} />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('facilities.title')}</h1>
                <p className="text-lg text-muted-foreground">
                  {t('facilities.subtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Main Facilities */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {facilities.map((facility, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-medium transition-all animate-scale-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <facility.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                      <p className="text-muted-foreground">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Infrastruktur Berkualitas</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="animate-fade-in-up">
                    <h3 className="text-xl font-bold mb-4">Utilitas Lengkap</h3>
                    <ul className="space-y-3">
                      {[
                        "Air bersih PDAM",
                        "Listrik PLN dengan daya memadai",
                        "Internet fiber optik",
                        "Sistem drainase modern",
                        "Jalan beraspal mulus",
                        "Penerangan jalan umum"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <h3 className="text-xl font-bold mb-4">Lingkungan Nyaman</h3>
                    <ul className="space-y-3">
                      {[
                        "Cluster tertutup dengan gerbang utama",
                        "Jalur pejalan kaki yang aman",
                        "Tempat parkir luas",
                        "Area hijau yang terawat",
                        "Sistem pengelolaan sampah terpadu",
                        "Bebas banjir"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

export default Facilities;
