export type Role = "investor" | "admin";

let currentRole: Role = "investor";

export function getRole(): Role {
  return currentRole;
}

export function setRole(role: Role) {
  currentRole = role;
}
