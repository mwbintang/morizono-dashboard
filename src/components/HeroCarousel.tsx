"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroCarousel = () => {
  const { t } = useLanguage();

  const slides = [
    {
      type: "video", // 👈 identify it's a video
      src: "https://res.cloudinary.com/dumhs9t1a/video/upload/v1760985395/20250915_Progress_Morizono_1_mo8fem.mp4",
      title: t("hero.title1"),
      subtitle: t("hero.desc1"),
      cta: t("hero.cta"),
    },
    {
      type: "image",
      src: "/slider/brosure-1.jpg",
      title: t("hero.title2"),
      subtitle: t("hero.desc2"),
      cta: t("hero.cta"),
    },
    {
      type: "image",
      src: "/slider/brosure-2.jpg",
      title: t("hero.title3"),
      subtitle: t("hero.desc3"),
      cta: t("hero.cta"),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 10000);
  //   return () => clearInterval(timer);
  // }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Media */}
          {slide.type === "video" ? (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-primary-foreground">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
                  {slide.title}
                </h1>
                <p
                  className="text-lg sm:text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.subtitle}
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Button
                    size="lg"
                    variant="default"
                    className="text-lg px-8 py-6 bg-accent hover:bg-accent/90"
                  >
                    {slide.cta}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg text-black px-8 py-6 border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    {t("nav.about")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary-foreground p-3 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary-foreground p-3 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-12 bg-accent"
                : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
