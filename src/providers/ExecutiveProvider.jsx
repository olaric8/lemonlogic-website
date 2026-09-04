import { ExecutiveProvider as ContextProvider } from "../context/ExecutiveContext";

export default function ExecutiveProvider({
  children,
}) {
  return (
    <ContextProvider>
      {children}
    </ContextProvider>
  );
}