import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp yang sebenarnya
  const message = "Halo, saya tertarik dengan properti yang Anda tawarkan.";
  
  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-hard flex items-center justify-center transition-all hover:scale-110 animate-fade-in group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-3 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat dengan kami
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" style={{ animationDuration: "2s" }} />
    </button>
  );
};

export default WhatsAppButton;
