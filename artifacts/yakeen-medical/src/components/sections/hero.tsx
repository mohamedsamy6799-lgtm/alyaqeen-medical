import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="استشارة طبية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/80 to-transparent dark:from-[#0D1B2A]/95 dark:via-[#0D1B2A]/90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium">الرعاية الطبية المتقدمة</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            نساعدك على استعادة <span className="text-primary">الحركة</span> والثقة والحياة الطبيعية
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            حلول متطورة في الأطراف الصناعية والأجهزة التعويضية والتأهيل الحركي بأحدث التقنيات العالمية.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg group">
              <a href="#booking" onClick={(e) => scrollToSection(e, "#booking")}>
                احجز استشارة
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="rounded-full border-[#25D366] text-white bg-[#25D366]/20 hover:bg-[#25D366] hover:text-white backdrop-blur-sm h-14 px-8 text-lg font-bold group border-2">
              <a href="https://wa.me/201008677794" target="_blank" rel="noopener noreferrer">
                تواصل واتساب
                <FaWhatsapp className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
