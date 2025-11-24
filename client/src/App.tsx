import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import BasicCheatsheets from "@/pages/BasicCheatsheets";
import AboutUs from "@/pages/AboutUs";
import VonguulFuture from "@/pages/VonguulFuture";
import Catalog from "@/pages/Catalog";
import History from "@/pages/History";
import Health from "@/pages/Health";
import Music from "@/pages/Music";
import Resources from "@/pages/Resources";
import NotFound from "@/pages/not-found";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
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
