import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easeOut * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      {suffix === "+" && "+"}
      {count}
      {suffix !== "+" && suffix}
    </div>
  );
}

export function Statistics() {
  const stats = [
    { label: "مريض تم خدمته", value: 1000, suffix: "+" },
    { label: "سنوات خبرة", value: 10, suffix: "+" },
    { label: "حالة تأهيل ناجحة", value: 500, suffix: "+" },
    { label: "نسبة رضا العملاء", value: 98, suffix: "%" },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#17A2B8] rounded-full mix-blend-overlay filter blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
