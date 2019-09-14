import { Action } from 'redux';
import { BeerState } from 'models/beer';
import { PurchaseBeersSuccessAction } from './purchase';

export enum BeerActionType {
  FECTH_BEERS_REQUEST = 'beer/FECTH_BEERS_REQUEST',
  FECTH_BEERS_SUCCESS = 'beer/FECTH_BEERS_SUCCESS',
  UPDATE_INFO = 'beer/UPDATE_INFO',
  SAVE_BEER = 'beer/SAVE_BEER',
  REMOVE_BEER = 'beer/REMOVE_BEER',
  INCREASE_TOTAL_COUNT = 'beer/INCREASE_TOTAL_COUNT',
  DECREASE_TOTAL_COUNT = 'beer/DECREASE_TOTAL_COUNT',
  RESET_BEER_COUNT = 'beer/RESET_BEER_COUNT',
}

type BeerAction = Action<BeerActionType>

export interface FetchBeersRequestAction extends BeerAction {
  type: BeerActionType.FECTH_BEERS_REQUEST
}

export interface FetchBeersSuccessAction extends BeerAction {
  type: BeerActionType.FECTH_BEERS_SUCCESS,
  payload: BeerState
}

export interface SaveBeerAction extends BeerAction {
  type: BeerActionType.SAVE_BEER,
  payload: number
}

export interface RemoveBeerAction extends BeerAction {
  type: BeerActionType.REMOVE_BEER,
  payload: number
}

export interface IncreaseTotalCountAction extends BeerAction {
  type: BeerActionType.INCREASE_TOTAL_COUNT
}

export interface DecreaseTotalCountAction extends BeerAction {
  type: BeerActionType.DECREASE_TOTAL_COUNT,
  payload: number
}

export interface ResetBeerCountAction extends BeerAction {
  type: BeerActionType.RESET_BEER_COUNT;
  id: number;
  count: number;
}

export type BeerActions = 
  | FetchBeersRequestAction
  | FetchBeersSuccessAction
  | SaveBeerAction
  | RemoveBeerAction
  | IncreaseTotalCountAction
  | DecreaseTotalCountAction
  | ResetBeerCountAction
  | PurchaseBeersSuccessAction
