import { MessageCircle } from "lucide-react";
import { CONTACT } from "./data";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
        "Hi Majid, I'd like to discuss a cloud / DevOps project."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white shadow-purple-glow animate-pulse-glow hover:bg-emerald-400"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
