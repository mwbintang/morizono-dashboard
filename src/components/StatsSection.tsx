import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Stat {
  value: number;
  suffix: string;
  labelKey: string;
}

const StatsSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stats: Stat[] = [
    { value: 200, suffix: "+", labelKey: "stats.properties" },
    { value: 10, suffix: "+", labelKey: "stats.experience" },
    { value: 500, suffix: "+", labelKey: "stats.clients" },
    { value: 50, suffix: "+", labelKey: "stats.team" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              stat={stat}
              label={t(stat.labelKey)}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCounterProps {
  stat: Stat;
  label: string;
  isVisible: boolean;
  delay: number;
}

const StatCounter = ({ stat, label, isVisible, delay }: StatCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, stat.value, delay]);

  return (
    <div className="text-center animate-fade-in-up">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-accent">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm sm:text-base text-primary-foreground/80 font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatsSection;
