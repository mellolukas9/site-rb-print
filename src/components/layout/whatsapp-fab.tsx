import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${site.whatsapp.display} (abre em nova aba)`}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-8px_rgb(15_122_61/0.7)] transition-[background-color,transform] duration-(--dur-fast) hover:scale-105 hover:bg-whatsapp-hover sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
