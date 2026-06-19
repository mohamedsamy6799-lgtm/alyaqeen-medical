import { Phone, MapPin, Mail, ChevronLeft } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-white/5 w-max p-2 rounded-xl border border-white/10">
              <img src="/yakeen-logo.jpeg" alt="يقين ميديكال" className="h-14 w-14 rounded-lg object-cover" />
              <div className="flex flex-col pl-2">
                <span className="text-xl font-bold text-white leading-none">يقين ميديكال</span>
                <span className="text-xs text-primary tracking-wider">YAKEEN MEDICAL</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              شركة متخصصة في تصميم وتركيب الأطراف الصناعية والأجهزة التعويضية بأحدث التقنيات العالمية، لمساعدتك على استعادة الحركة والثقة.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/201008677794" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-colors">
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:text-white transition-colors">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E4405F] hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-3">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { name: "الرئيسية", href: "#hero" },
                { name: "من نحن", href: "#about" },
                { name: "خدماتنا", href: "#services" },
                { name: "لماذا نحن", href: "#why-us" },
                { name: "معرض الصور", href: "#gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                    <ChevronLeft className="h-3 w-3 text-primary/0 group-hover:text-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-3">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                "الأطراف الصناعية السفلية",
                "الأطراف الصناعية العلوية",
                "الأجهزة التعويضية",
                "التأهيل والمتابعة",
                "الاستشارات الطبية",
              ].map((service) => (
                <li key={service} className="text-gray-400 text-sm flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-3">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>القاهرة - جمهورية مصر العربية</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+201008677794" className="hover:text-white transition-colors" dir="ltr">
                  +20 10 08677794
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaWhatsapp className="h-5 w-5 text-green-500 shrink-0" />
                <a href="https://wa.me/201008677794" className="hover:text-white transition-colors" dir="ltr">
                  +20 10 08677794
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="h-5 w-5 shrink-0 flex items-center justify-center">
                  <span className="text-primary font-bold">م/</span>
                </div>
                <span>أ. محمد أحمد الزغبي</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} يقين ميديكال - جميع الحقوق محفوظة</p>
          <p>
            تطوير بكل <span className="text-red-500">♥</span> لخدمة المرضى
          </p>
        </div>
      </div>
    </footer>
  );
}
