import { Award, Cpu, RefreshCw, UserCheck, BadgeCheck, HeartHandshake } from "lucide-react";

export function WhyUs() {
  const features = [
    { title: "خبرة متخصصة", icon: Award },
    { title: "أحدث التقنيات العالمية", icon: Cpu },
    { title: "متابعة مستمرة بعد التركيب", icon: RefreshCw },
    { title: "تصميم مخصص لكل حالة", icon: UserCheck },
    { title: "جودة عالية وخامات معتمدة", icon: BadgeCheck },
    { title: "دعم وتأهيل كامل للمريض", icon: HeartHandshake },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">لماذا نحن</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              لماذا تختار <span className="text-primary">يقين ميديكال؟</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نلتزم بتقديم أعلى مستويات الرعاية الطبية والدعم المستمر لضمان راحتك واستعادتك لحياتك الطبيعية بأفضل شكل ممكن.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
                >
                  <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">{feature.title}</h4>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
