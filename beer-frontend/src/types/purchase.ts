import { Action } from 'redux';
import { TotalData, ErrorMessage } from 'models/purchase';
import { BeerItem } from 'models/beer';

export enum PurchaseActionType {
  FETCH_PURCHASE_BEERS = 'purchase/FETCH_PURCHASE_BEERS',
  CLEAR_PURCHASE_BEERITEM = 'purchase/CLEAR_PURCHASE_BEERITEM',
  UPDATE_TOTAL_PRICE = 'purchase/UPDATE_TOTAL_PRICE',
  PURCHASE_BEERS_REQUEST = 'purchase/PURCHASE_BEERS_REQUEST',
  PURCHASE_BEERS_SUCCESS = 'purchase/PURCHASE_BEERS_SUCCESS',
  PURCHASE_BEERS_FAILURE = 'purchase/PURCHASE_BEERS_FAILURE',
}

type PurchaseAction = Action<PurchaseActionType>;

export interface FetchPurchaseBeersAction extends PurchaseAction {
  type: PurchaseActionType.FETCH_PURCHASE_BEERS;
  payload: Array<BeerItem>;
  id: number;
}

export interface FetchPurchaseBeerItemAction extends PurchaseAction {
  type: PurchaseActionType.CLEAR_PURCHASE_BEERITEM;
  id: number;
  count: number;
}

export interface UpdateTotalPriceAction extends PurchaseAction {
  type: PurchaseActionType.UPDATE_TOTAL_PRICE;
}

export interface PurchaseBeersRequestAction extends PurchaseAction {
  type: PurchaseActionType.PURCHASE_BEERS_REQUEST;
  data: TotalData;
}

export interface PurchaseBeersSuccessAction extends PurchaseAction {
  type: PurchaseActionType.PURCHASE_BEERS_SUCCESS;
  data: TotalData;
}

export interface PurchaseBeersFailureAction extends PurchaseAction {
  type: PurchaseActionType.PURCHASE_BEERS_FAILURE;
  message: ErrorMessage;
}

export type PurchaseActions = 
  | FetchPurchaseBeersAction
  | FetchPurchaseBeerItemAction
  | UpdateTotalPriceAction
  | PurchaseBeersRequestAction
  | PurchaseBeersSuccessAction
  | PurchaseBeersFailureAction