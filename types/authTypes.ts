export interface User {
    id: string;
    name: string;
    role: "student" | "admin";
  }
  
  export interface AuthState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
  }
  