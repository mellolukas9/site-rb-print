import type { AnchorHTMLAttributes } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-11 px-4 text-sm gap-2 [&_svg]:size-4",
  md: "h-12 px-5 text-[0.95rem] gap-2.5 [&_svg]:size-5",
  lg: "h-14 px-7 text-base gap-3 [&_svg]:size-6",
};

/** Único CTA de compra do site: abre o WhatsApp em nova aba. */
export function WhatsAppButton({ href, size = "md", className, children, ...rest }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-full bg-whatsapp font-bold text-white",
        "transition-[background-color,transform] duration-(--dur-fast) hover:bg-whatsapp-hover active:scale-[0.98]",
        sizes[size],
        className,
      )}
      {...rest}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}
