import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AdminPage from "@/pages/admin";
import ServicePage from "@/pages/service";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/services/:slug" component={ServicePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {children}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="yakeen-medical-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Switch>
              <Route path="/admin">
                <AppShell>
                  <AdminPage />
                </AppShell>
              </Route>
              <Route path="/services/:slug">
                {(params) => (
                  <AppShell>
                    <Navbar />
                    <main className="flex-1">
                      <ServicePage />
                    </main>
                    <Footer />
                    <FloatingWhatsapp />
                  </AppShell>
                )}
              </Route>
              <Route>
                <AppShell>
                  <Navbar />
                  <main className="flex-1">
                    <Router />
                  </main>
                  <Footer />
                  <FloatingWhatsapp />
                </AppShell>
              </Route>
            </Switch>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
