import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Home from "@/pages/Home";

// Lazy load secondary pages
const BasicCheatsheets = lazy(() => import("@/pages/BasicCheatsheets"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const VonguulFuture = lazy(() => import("@/pages/VonguulFuture"));
const Catalog = lazy(() => import("@/pages/Catalog"));
const History = lazy(() => import("@/pages/History"));
const Health = lazy(() => import("@/pages/Health"));
const Music = lazy(() => import("@/pages/Music"));
const Resources = lazy(() => import("@/pages/Resources"));
const ArticleDetail = lazy(() => import("@/pages/ArticleDetail"));
const NotFound = lazy(() => import("@/pages/not-found"));

const PageLoadingFallback = () => (
  <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading page...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/basic-cheatsheets" component={BasicCheatsheets} />
        <Route path="/about" component={AboutUs} />
        <Route path="/future" component={VonguulFuture} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/history" component={History} />
        <Route path="/health" component={Health} />
        <Route path="/music" component={Music} />
        <Route path="/resources" component={Resources} />
        <Route path="/resources/:slug" component={ArticleDetail} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
