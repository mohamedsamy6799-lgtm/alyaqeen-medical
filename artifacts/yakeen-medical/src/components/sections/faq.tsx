import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const faqs = [
    {
      question: "ما هي مدة تصنيع الطرف الصناعي؟",
      answer: "تختلف مدة التصنيع حسب نوع الطرف الصناعي، وعادةً ما تتراوح بين أسبوعين إلى شهر لضمان أعلى درجات الدقة والجودة في التصميم.",
    },
    {
      question: "هل يوجد متابعة بعد التركيب؟",
      answer: "نعم، نقدم متابعة دورية مجانية لضمان راحة المريض وملاءمة الطرف الصناعي، ونتأكد من قدرتك على استخدامه بكفاءة.",
    },
    {
      question: "هل يمكن صيانة الطرف الصناعي؟",
      answer: "بالتأكيد، نقدم خدمات الصيانة والتعديل لجميع أنواع الأطراف الصناعية في مركزنا المتخصص.",
    },
    {
      question: "ما أنواع الأطراف المتوفرة؟",
      answer: "نوفر الأطراف السفلية والعلوية بمختلف المواصفات، بما فيها الأطراف الذكية والرياضية التي تلبي احتياجات مختلف الفئات العمرية وأساليب الحياة.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">الأسئلة الشائعة</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            إجابات لاستفساراتك
          </h3>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-5 text-right">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
