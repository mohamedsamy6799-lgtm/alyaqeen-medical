import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">تواصل معنا</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            نحن دائماً في خدمتك
          </h3>
          <p className="text-lg text-muted-foreground">
            لا تتردد في التواصل معنا لأي استفسار أو لحجز موعد. فريقنا مستعد للإجابة على جميع تساؤلاتك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">الموقع</h4>
                <p className="text-muted-foreground">القاهرة - جمهورية مصر العربية</p>
              </div>
            </div>

            <a href="tel:+201008677794" className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 hover:border-primary/30 transition-colors group block">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">الهاتف</h4>
                <p className="text-muted-foreground" dir="ltr">+20 10 08677794</p>
                <p className="text-sm text-primary mt-1">أ/ محمد أحمد الزغبي</p>
              </div>
            </a>

            <a href="https://wa.me/201008677794" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 hover:border-[#25D366]/50 transition-colors group block">
              <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">واتساب</h4>
                <p className="text-muted-foreground" dir="ltr">+20 10 08677794</p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-2 h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-sm border border-border relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185012586!2d31.25846435!3d30.05961849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1709600000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="موقع يقين ميديكال على الخريطة"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
