import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight, CheckCircle } from "lucide-react";

const SERVICES: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  types: { name: string; desc: string }[];
  image: string;
  color: string;
}> = {
  "lower-prosthetics": {
    title: "الأطراف الصناعية السفلية",
    subtitle: "استعد مشيتك وحياتك الطبيعية",
    description:
      "نقدم أحدث الحلول في الأطراف الصناعية السفلية المصممة بدقة متناهية لتلائم جسمك وأسلوب حياتك. سواء كنت تحت الركبة أو فوق الركبة، لدينا الطرف الصناعي المناسب لك.",
    features: [
      "تصميم مخصص لكل حالة",
      "مواد خفيفة وعالية الجودة",
      "راحة تامة أثناء الارتداء",
      "متابعة دورية مجانية",
      "صيانة وتعديلات مضمونة",
      "أطراف رياضية للنشاط البدني",
    ],
    types: [
      { name: "تحت الركبة (BK)", desc: "أطراف صناعية خفيفة ومرنة مصممة لتعطيك حرية الحركة الكاملة مع الشعور بالطبيعية." },
      { name: "فوق الركبة (AK)", desc: "أطراف متطورة بمفاصل ذكية تحاكي حركة الركبة الطبيعية للراحة القصوى." },
      { name: "الأطراف الرياضية", desc: "مصممة للنشاط البدني المكثف، تمنحك القدرة على الجري والرياضة بكفاءة عالية." },
    ],
    image: "/hero-bg.jpg",
    color: "from-blue-600 to-cyan-500",
  },
  "upper-prosthetics": {
    title: "الأطراف الصناعية العلوية",
    subtitle: "استعد استقلاليتك ويدك الأمينة",
    description:
      "تقنيات متطورة في الأطراف الصناعية العلوية تشمل اليد الذكية والذراع الصناعية. نستخدم أحدث المواد والتقنيات لمنحك يداً صناعية تشبه الطبيعية في الشكل والوظيفة.",
    features: [
      "تحكم دقيق في الحركة",
      "مظهر طبيعي وجمالي",
      "قوة قبضة متعددة المستويات",
      "تقنية التحكم بالعضلات",
      "خفيف الوزن ومريح",
      "قابل للتخصيص حسب الطلب",
    ],
    types: [
      { name: "اليد الصناعية", desc: "يد صناعية بأصابع متحركة تمنحك القدرة على الإمساك والتعامل مع الأشياء اليومية." },
      { name: "الذراع الصناعية", desc: "ذراع متكامل يشمل المرفق والمعصم واليد بتحكم كامل وسلس في الحركة." },
      { name: "الأطراف الذكية", desc: "أحدث جيل من الأطراف المتصلة بالدماغ والعضلات للتحكم الأمثل والأكثر طبيعية." },
    ],
    image: "/hero-bg.jpg",
    color: "from-indigo-600 to-blue-500",
  },
  "orthotics": {
    title: "الأجهزة التعويضية",
    subtitle: "دعم قوي لحركة أفضل",
    description:
      "نصمم ونصنع الأجهزة التعويضية والجبائر الطبية التي تدعم الجسم وتصحح الحركة. كل جهاز يُصنع خصيصاً لحالتك الطبية بأعلى معايير الجودة.",
    features: [
      "تصميم مريح وخفيف",
      "مواد طبية معتمدة",
      "تصحيح الحركة والوضعية",
      "تقليل الألم والضغط",
      "مناسبة للجميع صغاراً وكباراً",
      "ضمان الجودة والمتانة",
    ],
    types: [
      { name: "الجبائر الطبية", desc: "جبائر مخصصة لدعم المفاصل وحمايتها أثناء التعافي والعلاج الطبيعي." },
      { name: "أجهزة دعم الحركة", desc: "أجهزة تساعد على تحسين الحركة وتوزيع الوزن بشكل صحيح على القدمين والركبتين." },
      { name: "أجهزة تقويم الأطراف", desc: "حلول طبية لتصحيح ميلان الأطراف ومشاكل المشي والوضعية عند الأطفال والبالغين." },
    ],
    image: "/hero-bg.jpg",
    color: "from-teal-600 to-cyan-500",
  },
  "rehabilitation": {
    title: "التأهيل والمتابعة",
    subtitle: "معك خطوة بخطوة حتى تعود لحياتك",
    description:
      "برنامج تأهيل شامل يبدأ من لحظة تركيب الطرف الصناعي حتى تعود لممارسة حياتك الطبيعية بثقة واستقلالية كاملة. فريقنا المتخصص معك في كل خطوة.",
    features: [
      "جلسات تدريبية فردية",
      "برنامج تأهيل مخصص",
      "متابعة دورية منتظمة",
      "صيانة وتعديلات فورية",
      "دعم نفسي وتحفيزي",
      "تواصل مستمر مع المريض",
    ],
    types: [
      { name: "جلسات التدريب", desc: "جلسات تدريبية مكثفة لتعليمك استخدام طرفك الصناعي بكفاءة وراحة تامة." },
      { name: "المتابعة الدورية", desc: "زيارات منتظمة لمتابعة تكيفك مع الطرف وإجراء أي تعديلات ضرورية." },
      { name: "الصيانة والتعديلات", desc: "خدمة صيانة شاملة لضمان عمل طرفك الصناعي بأفضل أداء طوال الوقت." },
    ],
    image: "/hero-bg.jpg",
    color: "from-emerald-600 to-teal-500",
  },
  "consultation": {
    title: "الاستشارات الطبية",
    subtitle: "خبرة طبية متخصصة في متناول يدك",
    description:
      "نقدم استشارات طبية متخصصة في مجال الأطراف الصناعية والأجهزة التعويضية. يقوم فريقنا بتقييم حالتك بدقة وتوجيهك نحو الحل الأمثل الذي يناسب احتياجاتك وظروفك.",
    features: [
      "تقييم شامل لحالتك الطبية",
      "خبراء متخصصون في المجال",
      "توصيات علاجية واضحة",
      "شرح مفصل لكل الخيارات",
      "متابعة ما بعد الاستشارة",
      "استشارة بالهاتف وحضورياً",
    ],
    types: [
      { name: "الاستشارة الأولية", desc: "تقييم أولي شامل لحالتك الطبية وتحديد أفضل نوع من الأطراف الصناعية المناسبة لك." },
      { name: "الاستشارة المتخصصة", desc: "استشارة معمقة مع المتخصصين لحالات معقدة تتطلب حلولاً مخصصة ومتقدمة." },
      { name: "استشارة المتابعة", desc: "مراجعة دورية لتقييم تقدمك والتحقق من ملاءمة الطرف الصناعي لتغيرات جسمك." },
    ],
    image: "/hero-bg.jpg",
    color: "from-purple-600 to-indigo-500",
  },
};

const SLUGS: Record<string, string> = {
  "lower-prosthetics": "الأطراف الصناعية السفلية",
  "upper-prosthetics": "الأطراف الصناعية العلوية",
  "orthotics": "الأجهزة التعويضية",
  "rehabilitation": "التأهيل والمتابعة",
  "consultation": "الاستشارات الطبية",
};

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const service = SERVICES[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center p-8" dir="rtl">
        <h1 className="text-2xl font-bold text-foreground">الخدمة غير موجودة</h1>
        <Link href="/">
          <Button>العودة للرئيسية</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className={`bg-gradient-to-br ${service.color} text-white py-20 px-4`}>
        <div className="max-w-4xl mx-auto">
          <Link href="/#services">
            <button className="flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors">
              <ArrowRight className="h-4 w-4 rotate-180" />
              العودة للخدمات
            </button>
          </Link>
          <p className="text-white/70 text-sm font-medium mb-3 tracking-wide uppercase">يقين ميديكال</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{service.title}</h1>
          <p className="text-xl text-white/90 font-light">{service.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        <section>
          <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">المميزات والفوائد</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">الأنواع المتاحة</h2>
          <div className="space-y-4">
            {service.types.map((t) => (
              <div key={t.name} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-2">{t.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center space-y-5">
          <h2 className="text-2xl font-bold text-foreground">هل تريد معرفة المزيد؟</h2>
          <p className="text-muted-foreground">تواصل معنا الآن واحجز استشارتك المجانية مع متخصصينا</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`https://wa.me/201008677794?text=${encodeURIComponent(`أريد الاستفسار عن خدمة: ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 gap-2 h-12 px-6">
                <MessageCircle className="h-5 w-5" />
                تواصل واتساب
              </Button>
            </a>
            <a href="tel:+201008677794">
              <Button size="lg" variant="outline" className="gap-2 h-12 px-6 border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="h-5 w-5" />
                اتصل الآن
              </Button>
            </a>
            <Link href="/#booking">
              <Button size="lg" className="gap-2 h-12 px-6">
                احجز استشارة
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
