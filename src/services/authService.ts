// services/authService.ts
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const login = async (email: string, password: string) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error: any) {
    console.error("Erro ao fazer login:", error);
    throw new Error(error.message || "Erro ao fazer login");
  }
};

export const register = async (email: string, password: string) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error: any) {
    console.error("Erro ao registrar:", error);
    throw new Error(error.message || "Erro ao registrar");
  }
};
