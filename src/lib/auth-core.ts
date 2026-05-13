export type UserRole = "admin" | "investor";

type UserSession = {
  id: string;
  name: string;
  role: UserRole;
  isLoggedIn: boolean;
};

// TEMP SESSION (frontend-only simulation)
let session: UserSession | null = null;

export function login(role: UserRole) {
  session = {
    id: role === "admin" ? "A-001" : "I-001",
    name: role === "admin" ? "Administrator" : "Investor",
    role,
    isLoggedIn: true,
  };
}

export function logout() {
  session = null;
}

export function getSession(): UserSession | null {
  return session;
}

export function isAdmin() {
  return session?.role === "admin";
}

export function isInvestor() {
  return session?.role === "investor";
}
