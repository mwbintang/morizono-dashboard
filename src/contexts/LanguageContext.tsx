"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.products': 'Properti',
    'nav.facilities': 'Fasilitas',
    'nav.awards': 'Penghargaan',
    'nav.contact': 'Kontak',

    // Hero
    'hero.title1': 'Temukan Rumah Impian Anda',
    'hero.desc1': 'Properti premium dengan lokasi strategis dan desain modern',
    'hero.title2': 'Investasi Properti Terpercaya',
    'hero.desc2': 'Nilai investasi terbaik dengan return maksimal',
    'hero.title3': 'Hunian Berkualitas Tinggi',
    'hero.desc3': 'Kualitas konstruksi terbaik dengan sertifikat lengkap',
    'hero.cta': 'Lihat Properti',

    // Intro
    'intro.title': 'Solusi Properti Terpercaya Anda',
    'intro.desc': `Hadir sebagai bagian dari kawasan Gardens at Candi Sawangan, Morizono menawarkan hunian yang memadukan ketenangan alam dan kemudahan akses kota.
Dikembangkan oleh PT Graha Perdana Indah (GPI) dan Sumitomo Forestry — pengembang terpercaya dengan pengalaman lebih dari dua dekade — kawasan ini dirancang untuk memberikan kenyamanan, keamanan, dan gaya hidup modern bagi keluarga masa kini.`,
    'intro.mission': 'Misi Kami',
    'intro.missionDesc': 'Menyediakan properti berkualitas tinggi dengan pelayanan terbaik dan harga yang kompetitif.',
    'intro.vision': 'Visi Kami',
    'intro.visionDesc': 'Menjadi perusahaan properti terpercaya dan pilihan utama untuk investasi properti Anda.',
    'intro.values': 'Nilai Kami',
    'intro.valuesDesc': 'Integritas, profesionalisme, dan kepuasan pelanggan adalah prioritas utama kami.',

    // Stats
    'stats.properties': 'Properti Terjual',
    'stats.experience': 'Tahun Pengalaman',
    'stats.clients': 'Klien Puas',
    'stats.team': 'Tim Profesional',

    // Footer
    'footer.about': 'Tentang Kami',
    'footer.aboutDesc': 'Perusahaan properti terpercaya dengan pengalaman lebih dari 10 tahun.',
    'footer.quickLinks': 'Link Cepat',
    'footer.contactUs': 'Hubungi Kami',
    'footer.rights': 'Hak Cipta Dilindungi',

    // About Page
    'about.title': 'Selamat datang di Morizono',
    'about.subtitle': 'The Art of Japanese Living',
    'about.story': 'Cerita Kami',
    'about.storyDesc': 'Temukan harmoni, keindahan, dan kesederhanaan dalam setiap aspek kehidupan. Morizono mengajak Anda menyelami filosofi hidup Jepang yang autentik melalui desain, budaya, dan pengalaman yang menyatu dengan alam dan ketenangan batin.',
    'about.whyChoose': 'Mengapa Memilih Kami?',
    'about.expertise': 'Reputasi Global & Kualitas Jepang',
    'about.expertiseDesc': `Dikembangkan oleh Sumitomo Forestry—perusahaan Jepang dengan pengalaman lebih dari 300 tahun—bekerja sama dengan Graha Perdana Indah. Proyek ini mengedepankan standar tinggi dalam desain, material, dan konstruksi.`,
    'about.quality': 'Desain Hunian Bergaya Jepang yang Eksklusif',
    'about.qualityDesc': 'Morizono mengusung filosofi hidup ala Jepang yang menyatu dengan alam. Setiap unit dirancang dengan elemen khas seperti taman belakang, teras engawa, dan ruang multifungsi bergaya tatami—menciptakan suasana yang tenang dan harmonis.',
    'about.location': 'Lokasi Strategis & Berkembang Pesat',
    'about.locationDesc': 'Berada di kawasan Gardens at Candi Sawangan, hanya 10 menit dari Tol Pamulang, dan memiliki akses mudah ke Jakarta, Depok, dan BSD. Lokasinya menawarkan keseimbangan antara ketenangan hunian dan konektivitas urban.',
    'about.service': 'Teknologi Modern & Ramah Lingkungan',
    'about.serviceDesc': 'Setiap rumah dilengkapi sistem smart home, panel surya, dan fitur keamanan pintar. Morizono juga meraih sertifikasi EDGE Advanced berkat efisiensi energi dan air—pilihan ideal untuk gaya hidup berkelanjutan.',
    'about.investment': 'Investasi Masa Depan yang Menjanjikan',
    'about.investmentDesc': 'Dengan total 346 unit (305 rumah & 41 ruko), kawasan ini dirancang untuk tumbuh bersama perkembangan kota. Potensi nilai properti yang terus meningkat menjadikan Morizono bukan hanya tempat tinggal, tapi juga aset investasi.',

    // Products Page
    'products.title': 'Properti Kami',
    'products.subtitle': 'Pilihan Properti Berkualitas Tinggi',
    'products.all': 'Semua',
    'products.house': 'Rumah',
    'products.apartment': 'Apartemen',
    'products.commercial': 'Komersial',
    'products.bedrooms': 'Kamar Tidur',
    'products.bathrooms': 'Kamar Mandi',
    'products.landSize': 'Luas Tanah',
    'products.buildingSize': 'Luas Bangunan',
    'products.viewDetails': 'Lihat Detail',

    // Product Detail
    'detail.overview': 'Gambaran Umum',
    'detail.features': 'Fitur',
    'detail.location': 'Lokasi',
    'detail.contact': 'Hubungi Kami',
    'detail.interested': 'Tertarik dengan properti ini?',
    'detail.whatsapp': 'Hubungi via WhatsApp',

    // Facilities Page
    'facilities.title': 'Fasilitas',
    'facilities.subtitle': 'Nikmati Fasilitas Lengkap di Area Properti Kami',
    'facilities.security': 'Keamanan 24/7',
    'facilities.securityDesc': 'Sistem keamanan 24 jam dengan CCTV dan petugas keamanan profesional.',
    'facilities.park': 'Taman & Area Hijau',
    'facilities.parkDesc': 'Taman luas dengan area hijau untuk relaksasi dan aktivitas keluarga.',
    'facilities.pool': 'Kolam Renang',
    'facilities.poolDesc': 'Kolam renang modern dengan area khusus untuk anak-anak dan dewasa.',
    'facilities.fitness': 'Pusat Kebugaran',
    'facilities.fitnessDesc': 'Gym lengkap dengan peralatan modern dan instruktur profesional.',
    'facilities.playground': 'Area Bermain Anak',
    'facilities.playgroundDesc': 'Area bermain yang aman dan menyenangkan untuk anak-anak.',
    'facilities.parking': 'Area Parkir Luas',
    'facilities.parkingDesc': 'Parkir luas dan aman untuk kendaraan penghuni dan tamu.',

    // Awards Page
    'awards.title': 'Penghargaan & Testimoni',
    'awards.subtitle': 'Kepercayaan dan Penghargaan yang Kami Terima',
    'awards.ourAwards': 'Penghargaan Kami',
    'awards.best2023': 'Perusahaan Properti Terbaik 2023',
    'awards.best2023Desc': 'Penghargaan dari Asosiasi Properti Indonesia untuk kualitas dan pelayanan terbaik.',
    'awards.trusted': 'Developer Terpercaya',
    'awards.trustedDesc': 'Sertifikat kepercayaan dari konsumen dan mitra bisnis.',
    'awards.service': 'Pelayanan Pelanggan Terbaik',
    'awards.serviceDesc': 'Penghargaan untuk komitmen kami terhadap kepuasan pelanggan.',
    'awards.testimonials': 'Apa Kata Klien Kami',
    'awards.client1': 'Pelayanan sangat memuaskan! Tim profesional dan membantu kami menemukan rumah impian dengan mudah.',
    'awards.client2': 'Proses pembelian sangat mudah dan transparan. Sangat merekomendasikan!',
    'awards.client3': 'Properti berkualitas tinggi dengan harga yang sangat kompetitif. Investasi terbaik!',

    // Contact Page
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Kami Siap Membantu Anda',
    'contact.getInTouch': 'Hubungi Kami',
    'contact.reachOut': 'Jangan ragu untuk menghubungi kami dengan pertanyaan atau konsultasi properti.',
    'contact.phone': 'Telepon',
    'contact.email': 'Email',
    'contact.address': 'Alamat',
    'contact.addressDetail': 'Jl. Cinangka Raya, Curug, Kec. Bojongsari, Kota Depok, Jawa Barat 16517',
    'contact.hours': 'Jam Operasional',
    'contact.hoursDetail': 'Senin - Minggu: 08:00 - 17:00',
    'contact.sendMessage': 'Kirim Pesan',
    'contact.name': 'Nama',
    'contact.emailPlaceholder': 'halomorizono@gmail.com',
    'contact.subject': 'Subjek',
    'contact.message': 'Pesan',
    'contact.send': 'Kirim Pesan',
    'contact.visitUs': 'Kunjungi Kantor Kami',

    // Not Found
    'notfound.title': 'Halaman Tidak Ditemukan',
    'notfound.desc': 'Maaf, halaman yang Anda cari tidak dapat ditemukan.',
    'notfound.back': 'Kembali ke Beranda',

    // WhatsApp
    'whatsapp.aria': 'Hubungi kami di WhatsApp',
    'whatsapp.tooltip': 'Chat dengan kami di WhatsApp',
    'whatsapp.message': 'Halo, saya tertarik dengan properti yang Anda tawarkan.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Properties',
    'nav.facilities': 'Facilities',
    'nav.awards': 'Awards',
    'nav.contact': 'Contact',

    // Hero
    'hero.title1': 'Find Your Dream Home',
    'hero.desc1': 'Premium properties with strategic locations and modern design',
    'hero.title2': 'Trusted Property Investment',
    'hero.desc2': 'Best investment value with maximum returns',
    'hero.title3': 'High Quality Residences',
    'hero.desc3': 'Top construction quality with complete certificates',
    'hero.cta': 'View Properties',

    // Intro
    'intro.title': 'Your Trusted Property Solution',
    'intro.desc': 'We are a leading property company dedicated to helping you find the perfect home. With over 10 years of experience in the real estate industry, we offer a variety of high-quality property options with strategic locations and competitive prices.',
    'intro.mission': 'Our Mission',
    'intro.missionDesc': 'Providing high-quality properties with the best service and competitive prices.',
    'intro.vision': 'Our Vision',
    'intro.visionDesc': 'To become a trusted property company and the top choice for your property investments.',
    'intro.values': 'Our Values',
    'intro.valuesDesc': 'Integrity, professionalism, and customer satisfaction are our top priorities.',

    // Stats
    'stats.properties': 'Properties Sold',
    'stats.experience': 'Years Experience',
    'stats.clients': 'Happy Clients',
    'stats.team': 'Professional Team',

    // Footer
    'footer.about': 'About Us',
    'footer.aboutDesc': 'Trusted property company with over 10 years of experience.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All Rights Reserved',

    // About Page
    'about.title': 'Welcome to Morizono',
    'about.subtitle': 'The Art of Japanese Living',
    'about.story': 'Our Story',
    'about.storyDesc': `Discover harmony, beauty, and simplicity in every aspect of life. Morizono invites you to explore the authentic philosophy of Japanese living through design, culture, and experiences that connect you with nature and inner peace.`,
    'about.whyChoose': 'Why Choose MORIZONO?',
    'about.expertise': 'Japanese Craftsmanship & Global Reputation',
    'about.expertiseDesc': `Developed by Japan’s prestigious Sumitomo Forestry in collaboration with Graha Perdana Indah, Morizono reflects centuries of expertise, attention to detail, and uncompromising quality.`,
    'about.quality': 'Exclusive Japanese-Inspired Design',
    'about.qualityDesc': 'Each home is thoughtfully designed with authentic Japanese elements — such as private gardens, engawa terraces, and flexible tatami-style rooms — offering a serene and refined living experience.',
    'about.location': 'Prime Location with Seamless Connectivity',
    'about.locationDesc': 'Situated within Gardens at Candi Sawangan, just 10 minutes from Pamulang Toll Access, Morizono offers effortless access to Jakarta, Depok, and major city centers — while maintaining the calm of a suburban retreat.',
    'about.service': 'Smart, Sustainable Living',
    'about.serviceDesc': 'Homes come equipped with smart home technology, solar panels, and modern security features. Certified EDGE Advanced, Morizono promotes eco-friendly living through energy and water efficiency.',
    'about.investment': 'Long-Term Value & Investment Potential',
    'about.investmentDesc': 'With only 346 exclusive units, Morizono combines lifestyle with opportunity. Its premium concept, strategic location, and limited supply make it a smart choice for both homeowners and investors.',

    // Products Page
    'products.title': 'Our Properties',
    'products.subtitle': 'High Quality Property Selection',
    'products.all': 'All',
    'products.house': 'House',
    'products.apartment': 'Apartment',
    'products.commercial': 'Commercial',
    'products.bedrooms': 'Bedrooms',
    'products.bathrooms': 'Bathrooms',
    'products.landSize': 'Land Size',
    'products.buildingSize': 'Building Size',
    'products.viewDetails': 'View Details',

    // Product Detail
    'detail.overview': 'Overview',
    'detail.features': 'Features',
    'detail.location': 'Location',
    'detail.contact': 'Contact Us',
    'detail.interested': 'Interested in this property?',
    'detail.whatsapp': 'Contact via WhatsApp',

    // Facilities Page
    'facilities.title': 'Facilities',
    'facilities.subtitle': 'Enjoy Complete Facilities in Our Property Areas',
    'facilities.security': '24/7 Security',
    'facilities.securityDesc': '24-hour security system with CCTV and professional security officers.',
    'facilities.park': 'Park & Green Areas',
    'facilities.parkDesc': 'Spacious park with green areas for relaxation and family activities.',
    'facilities.pool': 'Swimming Pool',
    'facilities.poolDesc': 'Modern swimming pool with dedicated areas for children and adults.',
    'facilities.fitness': 'Fitness Center',
    'facilities.fitnessDesc': 'Complete gym with modern equipment and professional instructors.',
    'facilities.playground': "Children's Playground",
    'facilities.playgroundDesc': 'Safe and fun play area for children.',
    'facilities.parking': 'Spacious Parking Area',
    'facilities.parkingDesc': 'Large and secure parking for residents and guests vehicles.',

    // Awards Page
    'awards.title': 'Awards & Testimonials',
    'awards.subtitle': 'Trust and Recognition We Receive',
    'awards.ourAwards': 'Our Awards',
    'awards.best2023': 'Best Property Company 2023',
    'awards.best2023Desc': 'Award from Indonesian Property Association for best quality and service.',
    'awards.trusted': 'Trusted Developer',
    'awards.trustedDesc': 'Certificate of trust from consumers and business partners.',
    'awards.service': 'Best Customer Service',
    'awards.serviceDesc': 'Award for our commitment to customer satisfaction.',
    'awards.testimonials': 'What Our Clients Say',
    'awards.client1': 'Very satisfying service! Professional team helped us find our dream home easily.',
    'awards.client2': 'Very easy and transparent purchasing process. Highly recommended!',
    'awards.client3': 'High quality property with very competitive prices. Best investment!',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We Are Ready to Help You',
    'contact.getInTouch': 'Get In Touch',
    'contact.reachOut': "Don't hesitate to contact us with any questions or property consultations.",
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.addressDetail': 'Jl. Cinangka Raya, Curug, Kec. Bojongsari, Kota Depok, Jawa Barat 16517',
    'contact.hours': 'Business Hours',
    'contact.hoursDetail': 'Monday - Sunday: 08:00 - 17:00',
    'contact.sendMessage': 'Send Message',
    'contact.name': 'Name',
    'contact.emailPlaceholder': 'halomorizono@gmail.com',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.visitUs': 'Visit Our Office',

    // Not Found
    'notfound.title': 'Page Not Found',
    'notfound.desc': 'Sorry, the page you are looking for could not be found.',
    'notfound.back': 'Back to Home',

    // WhatsApp
    'whatsapp.aria': 'Contact us on WhatsApp',
    'whatsapp.tooltip': 'Chat with us on WhatsApp',
    'whatsapp.message': "Hello, I'm interested in the property you are offering.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("id");

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("language") as Language | null;
    if (storedLang) setLanguage(storedLang);
  }, []);

  // Persist language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => (translations[language] as Record<string, string>)[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};