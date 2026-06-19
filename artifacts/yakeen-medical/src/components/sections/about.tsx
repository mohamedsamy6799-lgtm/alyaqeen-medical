import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">من نحن</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                رواد التكنولوجيا الطبية و التأهيل الحركي
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              شركة <span className="font-bold text-foreground">يقين ميديكال</span> هي شركة متخصصة في تصميم وتركيب الأطراف الصناعية والأجهزة التعويضية وأجهزة التأهيل الحركي باستخدام أحدث التقنيات العالمية، بهدف مساعدة المرضى على استعادة استقلاليتهم وتحسين جودة حياتهم.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">رؤيتنا</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  أن نكون من الشركات الرائدة في مجال الأطراف الصناعية والتأهيل الطبي في مصر والشرق الأوسط.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[#17A2B8]/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-[#17A2B8]" />
                </div>
                <h4 className="text-xl font-bold mb-2">رسالتنا</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تقديم حلول طبية متطورة تجمع بين الجودة والراحة والدقة لتحسين حياة المرضى.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/about.png" 
              alt="مختبر يقين ميديكال" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-xl object-cover"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-background rounded-2xl p-6 shadow-xl border border-border flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                +10
              </div>
              <div>
                <p className="font-bold text-foreground">سنوات من الخبرة</p>
                <p className="text-sm text-muted-foreground">في خدمة المرضى</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
