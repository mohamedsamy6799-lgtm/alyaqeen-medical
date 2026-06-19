import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, PhoneCall } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  service: z.string({ required_error: "يرجى اختيار نوع الخدمة" }),
  message: z.string().optional(),
});

export function Booking() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const lines = [
      "🏥 *طلب حجز جديد - يقين ميديكال*",
      "",
      `👤 *الاسم:* ${values.name}`,
      `📞 *الهاتف:* ${values.phone}`,
      `🔧 *الخدمة المطلوبة:* ${values.service}`,
      values.message ? `💬 *الرسالة:* ${values.message}` : "",
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/201008677794?text=${encodeURIComponent(lines)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, "_blank");
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سيتم فتح واتساب لإتمام الحجز مع فريقنا.",
        variant: "default",
      });
      form.reset();
    }, 800);
  }

  return (
    <section id="booking" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              احجز موعدك الآن
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نحن هنا لمساعدتك. املأ النموذج وسنقوم بالتواصل معك لتحديد موعد يناسبك لتقديم الاستشارة الطبية وتقييم حالتك.
            </p>
            
            <div className="bg-white dark:bg-[#0D1B2A] border border-border p-6 rounded-2xl shadow-sm mt-8 flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                <PhoneCall className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">تفضل بالاتصال المباشر</h4>
                <a href="tel:+201008677794" className="text-xl font-bold text-foreground hover:text-primary transition-colors" dir="ltr">
                  +20 10 08677794
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-xl">
            <h3 className="text-2xl font-bold mb-6">تفاصيل الحجز</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">الاسم الكريم</FormLabel>
                      <FormControl>
                        <Input placeholder="أدخل اسمك بالكامل" className="h-12 bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">رقم الهاتف</FormLabel>
                      <FormControl>
                        <Input placeholder="أدخل رقم هاتفك للتواصل" type="tel" className="h-12 bg-background" dir="ltr" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">نوع الخدمة</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} dir="rtl">
                        <FormControl>
                          <SelectTrigger className="h-12 bg-background">
                            <SelectValue placeholder="اختر الخدمة المطلوبة" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent dir="rtl">
                          <SelectItem value="الأطراف الصناعية السفلية">الأطراف الصناعية السفلية</SelectItem>
                          <SelectItem value="الأطراف الصناعية العلوية">الأطراف الصناعية العلوية</SelectItem>
                          <SelectItem value="الأجهزة التعويضية">الأجهزة التعويضية</SelectItem>
                          <SelectItem value="التأهيل والمتابعة">التأهيل والمتابعة</SelectItem>
                          <SelectItem value="استشارة طبية">استشارة طبية</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">رسالتك (اختياري)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="اكتب أي تفاصيل إضافية عن حالتك" 
                          className="min-h-[120px] bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl" disabled={isSubmitting}>
                  {isSubmitting ? "جاري الإرسال..." : "احجز الآن"}
                </Button>
              </form>
            </Form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
