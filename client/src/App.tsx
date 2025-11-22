import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import BasicCheatsheets from "@/pages/BasicCheatsheets";
import AboutUs from "@/pages/AboutUs";
import VonguulFuture from "@/pages/VonguulFuture";
import Catalog from "@/pages/Catalog";
import History from "@/pages/History";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/basic-cheatsheets" component={BasicCheatsheets} />
      <Route path="/about" component={AboutUs} />
      <Route path="/future" component={VonguulFuture} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/history" component={History} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
