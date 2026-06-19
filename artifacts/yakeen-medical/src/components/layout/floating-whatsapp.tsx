import { FaWhatsapp } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/201008677794"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:scale-110 transition-transform relative group"
            aria-label="تواصل معنا على واتساب"
          >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>
            <FaWhatsapp className="h-7 w-7 relative z-10" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-white text-gray-900 border-none shadow-md font-medium px-3 py-2 text-sm rounded-lg">
          <p>تواصل معنا على واتساب</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
