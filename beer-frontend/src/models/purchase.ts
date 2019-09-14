export interface TotalData {
  totalCount: number;
  totalPrice: number;
}

export interface ErrorMessage {
  title: string;
  reason: string;
}

export interface PurchaseState {
  purchaseList: [];
  totalPrice: number;
}