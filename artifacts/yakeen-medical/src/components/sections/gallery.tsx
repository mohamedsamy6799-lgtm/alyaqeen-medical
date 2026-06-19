import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/gallery-1.png", alt: "طرف صناعي متطور" },
    { src: "/gallery-2.png", alt: "أجهزة طبية حديثة" },
    { src: "/gallery-3.png", alt: "جلسة تأهيل حركي" },
    { src: "/gallery-4.png", alt: "مريض سعيد ومستقل" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">معرض الصور</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            نظرة من الداخل
          </h3>
          <p className="text-lg text-muted-foreground">
            جانب من التقنيات التي نستخدمها ولحظات نجاح مرضانا في العودة لممارسة حياتهم بثقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white h-10 w-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-1 bg-transparent border-none shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">صورة مكبرة</DialogTitle>
          <DialogDescription className="sr-only">صورة من معرض يقين ميديكال</DialogDescription>
          <div className="relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-colors z-50"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="معرض يقين ميديكال" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
