import { useState } from "react";
import { useListBookings, useUpdateBookingStatus } from "@workspace/api-client-react";
import type { BookingResponse } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { getListBookingsQueryKey } from "@workspace/api-client-react";
import { Lock, Users, CalendarCheck, Phone, Clock, CheckCircle, XCircle, PhoneCall } from "lucide-react";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  new: { label: "جديد", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  contacted: { label: "تم التواصل", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
  confirmed: { label: "مؤكد", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  cancelled: { label: "ملغي", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleString("ar-EG", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

function BookingCard({ booking, adminPin }: { booking: BookingResponse; adminPin: string }) {
  const { toast } = useToast();
  const qc = useQueryClient();
  const updateStatus = useUpdateBookingStatus({
    mutation: {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: getListBookingsQueryKey() });
        toast({ title: "تم تحديث الحالة" });
      },
      onError: () => toast({ title: "خطأ في التحديث", variant: "destructive" }),
    },
  });

  const statusInfo = STATUS_LABELS[booking.status] ?? STATUS_LABELS["new"];

  return (
    <div className="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-bold text-lg text-foreground">{booking.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{booking.service}</p>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.color}`}>
          {statusInfo.label}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Phone className="h-4 w-4 shrink-0" />
        <a href={`tel:${booking.phone}`} className="hover:text-primary transition-colors" dir="ltr">{booking.phone}</a>
      </div>

      {booking.message && (
        <p className="text-sm text-foreground bg-muted/50 rounded-xl p-3 leading-relaxed">{booking.message}</p>
      )}

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="h-3 w-3" />
        <span>{formatDate(booking.createdAt as unknown as string)}</span>
      </div>

      <div className="flex gap-2 flex-wrap pt-1">
        <a
          href={`https://wa.me/${booking.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`مرحباً ${booking.name}، نتواصل معك من يقين ميديكال بخصوص طلب ${booking.service}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <PhoneCall className="h-3.5 w-3.5" />
          واتساب
        </a>
        <Select
          defaultValue={booking.status}
          onValueChange={(val) =>
            updateStatus.mutate({
              id: booking.id,
              data: { status: val as BookingResponse["status"] },
              headers: { "x-admin-pin": adminPin },
            })
          }
          dir="rtl"
        >
          <SelectTrigger className="h-8 text-xs w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent dir="rtl">
            <SelectItem value="new">جديد</SelectItem>
            <SelectItem value="contacted">تم التواصل</SelectItem>
            <SelectItem value="confirmed">مؤكد</SelectItem>
            <SelectItem value="cancelled">ملغي</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Dashboard({ adminPin }: { adminPin: string }) {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { data, isLoading, error } = useListBookings({
    request: { headers: { "x-admin-pin": adminPin } },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-destructive">خطأ في تحميل البيانات</p>
      </div>
    );
  }

  const bookings = data?.bookings ?? [];
  const counts = {
    total: bookings.length,
    new: bookings.filter((b) => b.status === "new").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  const filtered = statusFilter === "all" ? bookings : bookings.filter((b) => b.status === statusFilter);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="bg-primary text-white px-6 py-5 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/yakeen-logo.jpeg" alt="يقين ميديكال" className="h-10 w-10 object-contain rounded-lg" />
            <div>
              <h1 className="text-xl font-bold">لوحة تحكم يقين ميديكال</h1>
              <p className="text-sm text-white/70">إدارة الحجزات والمتابعة</p>
            </div>
          </div>
          <a href="/" className="text-white/80 hover:text-white text-sm underline">العودة للموقع</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "إجمالي الحجزات", value: counts.total, icon: Users, color: "text-primary" },
            { label: "حجزات جديدة", value: counts.new, icon: Clock, color: "text-blue-500" },
            { label: "حجزات مؤكدة", value: counts.confirmed, icon: CheckCircle, color: "text-green-500" },
            { label: "حجزات ملغية", value: counts.cancelled, icon: XCircle, color: "text-red-500" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-2xl p-5 text-center shadow-sm">
              <stat.icon className={`h-7 w-7 mx-auto mb-2 ${stat.color}`} />
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <CalendarCheck className="h-5 w-5 text-primary" />
            قائمة الحجزات
          </h2>
          <Select defaultValue="all" onValueChange={setStatusFilter} dir="rtl">
            <SelectTrigger className="h-9 w-44 text-sm">
              <SelectValue placeholder="تصفية بالحالة" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectItem value="all">جميع الحجزات</SelectItem>
              <SelectItem value="new">جديدة</SelectItem>
              <SelectItem value="contacted">تم التواصل</SelectItem>
              <SelectItem value="confirmed">مؤكدة</SelectItem>
              <SelectItem value="cancelled">ملغية</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <CalendarCheck className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">لا توجد حجزات</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((booking) => (
              <BookingCard key={booking.id} booking={booking} adminPin={adminPin} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [pin, setPin] = useState("");
  const [enteredPin, setEnteredPin] = useState<string | null>(null);
  const { toast } = useToast();

  const { isError, isFetching } = useListBookings(
    { request: { headers: { "x-admin-pin": enteredPin ?? "" } } },
    { query: { enabled: !!enteredPin, retry: false } }
  );

  if (enteredPin && !isFetching && !isError) {
    return <Dashboard adminPin={enteredPin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-cyan-50 dark:from-primary/10 dark:to-background flex items-center justify-center p-4" dir="rtl">
      <div className="bg-card border border-border rounded-3xl p-8 w-full max-w-sm shadow-2xl text-center space-y-6">
        <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">لوحة التحكم</h1>
          <p className="text-muted-foreground mt-1 text-sm">أدخل رمز الدخول للمتابعة</p>
        </div>
        {isError && enteredPin && (
          <p className="text-sm text-destructive">رمز الدخول غير صحيح</p>
        )}
        <div className="space-y-3">
          <Input
            type="password"
            placeholder="رمز الدخول"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="h-12 text-center text-lg tracking-widest"
            onKeyDown={(e) => { if (e.key === "Enter") setEnteredPin(pin); }}
          />
          <Button
            className="w-full h-12 text-base font-bold"
            onClick={() => setEnteredPin(pin)}
            disabled={!pin || isFetching}
          >
            {isFetching ? "جاري التحقق..." : "دخول"}
          </Button>
        </div>
        <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
          العودة للموقع
        </a>
      </div>
    </div>
  );
}
