import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import CreateItinerary from "./pages/CreateItinerary";
import ItineraryDetail from "./pages/ItineraryDetail";
import PublicItineraries from "./pages/PublicItineraries";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import { useAuthStore } from "./store/useAuthStore";
import PrivateRoute from "./routes/PrivateRoutes.tsx";
import PublicRoute from "./routes/PublicRoutes.tsx";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/lib/firebase.js';


const queryClient = new QueryClient();

const App = () => {

  const {user,setUser } = useAuthStore();

  useEffect(() => {
    setUser(auth.currentUser)
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); // atualiza o Zustand
    });

    return () => unsubscribe(); // limpa o listener ao desmontar
  }, [setUser]);

  
  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
  {/* Rota pública (visível só quando deslogado) */}
  {/* <Route element={<PublicRoute />}> */}
    <Route path="/auth" element={<AuthPage />} />
  {/* </Route> */}

  {/* Rota pública geral */}
  <Route path="/" element={<LandingPage />} />

  {/* Rotas privadas (precisa estar logado) */}
  {/* <Route element={<PrivateRoute />}> */}
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/create" element={<CreateItinerary />} />
    <Route path="/itinerary/:id" element={<ItineraryDetail />} />
    <Route path="/explore" element={<PublicItineraries />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/payment" element={<Payment />} />
  {/* </Route> */}

  {/* Rota para 404 */}
  <Route path="*" element={<NotFound />} />
</Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
)}

export default App;
