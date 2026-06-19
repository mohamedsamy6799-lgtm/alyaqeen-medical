import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Moon, Sun, Menu, X, Phone } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "لماذا نحن", href: "#why-us" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0D1B2A]/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <img src="/yakeen-logo.jpeg" alt="يقين ميديكال" className="h-12 w-12 rounded-full object-cover border border-primary/20" />
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none ${isScrolled ? "text-foreground" : "text-white md:text-foreground"}`}>يقين ميديكال</span>
              <span className={`text-xs tracking-wider ${isScrolled ? "text-primary" : "text-white/80 md:text-primary"}`}>YAKEEN MEDICAL</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isScrolled ? "text-foreground/80" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-r border-border/50 pr-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button asChild className="rounded-full px-6 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#booking" onClick={(e) => scrollToSection(e, "#booking")}>
                  احجز استشارة
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden z-50">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full mr-2">
              <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${isScrolled ? "" : "text-white"}`} />
              <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${isScrolled ? "" : "text-white"}`} />
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background dark:bg-[#0D1B2A] z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-xl font-medium mt-8">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-border/50 pb-4">
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4">
          <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground font-bold">
            <a href="#booking" onClick={(e) => scrollToSection(e, "#booking")}>
              احجز استشارة
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full rounded-full border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 font-bold">
            <a href="https://wa.me/201008677794" target="_blank" rel="noopener noreferrer">
              تواصل واتساب
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
