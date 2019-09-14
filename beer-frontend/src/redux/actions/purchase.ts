import { 
  PurchaseActionType, 
  FetchPurchaseBeersAction, 
  FetchPurchaseBeerItemAction,
  PurchaseBeersRequestAction,
  PurchaseBeersSuccessAction
} from 'types/purchase';

import { TotalData } from 'models/purchase';
import { BeerItem } from 'models/beer';

export const fetchPurchaseBeers = (payload: Array<BeerItem>, id: number): FetchPurchaseBeersAction => ({
  type: PurchaseActionType.FETCH_PURCHASE_BEERS,
  payload,
  id
});

export const clearPurchaseBeerItem = (id: number, count: number): FetchPurchaseBeerItemAction => ({
  type: PurchaseActionType.CLEAR_PURCHASE_BEERITEM,
  id,
  count
});

export const purchaseBeersRequest = (data: TotalData): PurchaseBeersRequestAction => ({
  type: PurchaseActionType.PURCHASE_BEERS_REQUEST,
  data
});

export const purchaseBeersSuccess = (data: TotalData): PurchaseBeersSuccessAction => ({
  type: PurchaseActionType.PURCHASE_BEERS_SUCCESS,
  data
});