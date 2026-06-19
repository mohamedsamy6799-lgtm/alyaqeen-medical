import { Activity, ShieldCheck, HeartPulse, Stethoscope, Dumbbell, Settings } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "الأطراف الصناعية السفلية",
      description: "تحت الركبة، فوق الركبة، أطراف رياضية متخصصة ومصممة بدقة لتلائم أسلوب حياتك.",
      icon: Activity,
    },
    {
      title: "الأطراف الصناعية العلوية",
      description: "اليد الصناعية، الذراع الصناعية، والأطراف الذكية التي تعمل بإشارات العضلات.",
      icon: ShieldCheck,
    },
    {
      title: "الأجهزة التعويضية",
      description: "الجبائر الطبية، أجهزة دعم الحركة، وأجهزة تقويم الأطراف لمعالجة التشوهات.",
      icon: HeartPulse,
    },
    {
      title: "التأهيل والمتابعة",
      description: "جلسات تدريب على استخدام الأطراف، متابعة دورية، صيانة وتعديلات مستمرة.",
      icon: Settings,
    },
    {
      title: "الاستشارات الطبية",
      description: "تقييم شامل للحالة من قبل خبراء متخصصين لتحديد الحل الأمثل والمناسب لك.",
      icon: Stethoscope,
    },
    {
      title: "خدمات التأهيل الشامل",
      description: "برامج تأهيلية متكاملة لضمان اندماجك في المجتمع والعودة لممارسة حياتك الطبيعية.",
      icon: Dumbbell,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">خدماتنا</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            حلول متكاملة لرعايتك
          </h3>
          <p className="text-lg text-muted-foreground">
            نقدم مجموعة واسعة من الخدمات الطبية والتأهيلية المصممة خصيصاً لتلبية احتياجاتك الفريدة باستخدام أحدث التقنيات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                <service.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
