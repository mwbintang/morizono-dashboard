import Image from "next/image";

interface ContentHeadProps {
  title: string;
  subtitle?: string
}

export const ContentHead = ({ title, subtitle }: ContentHeadProps) => {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/slider/brosure-2.jpg"
        alt="Jakarta Philharmonic Orchestra"
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-white">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
