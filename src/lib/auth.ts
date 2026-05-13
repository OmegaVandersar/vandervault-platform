export type UserRole = "investor" | "admin";

export function getUserRole(): UserRole {
  // In real systems this comes from backend/JWT
  const role = localStorage.getItem("role");

  if (role === "admin") return "admin";
  return "investor";
}

export function setUserRole(role: UserRole) {
  localStorage.setItem("role", role);
}
