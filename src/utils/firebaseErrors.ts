export const firebaseErrorMessages: Record<string, string> = {
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/invalid-email": "E-mail inválido.",
    "auth/email-already-in-use": "Este e-mail já está em uso.",
    "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
    "auth/missing-password": "Informe uma senha.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
    // Adicione mais conforme necessário
  };

export const getFirebaseErrorMessage = (code: string): string => {
  return firebaseErrorMessages[code] || "Ocorreu um erro. Tente novamente.";
};
