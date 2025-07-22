// publicRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const PublicRoute = () => {
  const { user } = useAuthStore();
  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
