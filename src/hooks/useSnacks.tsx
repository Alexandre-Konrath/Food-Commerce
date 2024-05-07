import { useContext } from "react";
import { SnackContext } from "../contexts/SnackContext";

export function useSnacks() {
  // pego os dados do contexto dos snacks
  return useContext(SnackContext)
}
