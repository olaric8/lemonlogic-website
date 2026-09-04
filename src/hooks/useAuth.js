// ============================================================
// LemonLogic Executive Intelligence Platform (LEIP)
// Enterprise Identity Platform
// useAuth Hook
// Version: 2.1
// ============================================================

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider."
    );
  }

  return context;
}