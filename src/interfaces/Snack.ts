import { SnackData } from "./snackData"

//? além das propriedades do SnackData, vão ter mais essas
export interface Snack extends SnackData {
  quantity: number
  subtotal: number
}
