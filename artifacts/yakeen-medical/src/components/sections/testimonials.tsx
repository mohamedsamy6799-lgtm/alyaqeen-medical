import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "بعد تركيب الطرف الصناعي رجعت أمارس حياتي بشكل طبيعي. شكراً لفريق يقين ميديكال على احترافيتهم ودعمهم.",
      author: "أحد العملاء",
      role: "مريض تأهيل",
    },
    {
      quote: "الدعم والمتابعة كانوا ممتازين طوال فترة التأهيل. شعرت بأنني في أيدٍ أمينة منذ اليوم الأول.",
      author: "عميل",
      role: "مستفيد من الأجهزة التعويضية",
    },
    {
      quote: "فريق محترف ومتفهم لاحتياجاتي، شكراً جزيلاً لجهودكم في تغيير حياتي للأفضل.",
      author: "مريضة",
      role: "مريضة تأهيل شامل",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">قصص النجاح</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول عملاؤنا
          </h3>
          <p className="text-lg text-muted-foreground">
            نفخر بأننا جزء من قصص نجاح وتحدي لمرضانا الذين استعادوا حيويتهم ونشاطهم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl border border-border shadow-sm relative pt-12"
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <Quote className="h-6 w-6" />
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-8 italic text-lg">
                "{item.quote}"
              </p>
              
              <div className="border-t border-border pt-4 mt-auto">
                <h4 className="font-bold text-foreground text-lg">{item.author}</h4>
                <p className="text-primary text-sm font-medium">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
