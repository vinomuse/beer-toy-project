import { 
  BeerActionType, 
  FetchBeersRequestAction,
  FetchBeersSuccessAction,
  SaveBeerAction,
  RemoveBeerAction,
  ResetBeerCountAction
} from 'types/beer';
import { BeerState } from 'models/beer';

export const fetchBeersRequest = (): FetchBeersRequestAction => ({
  type: BeerActionType.FECTH_BEERS_REQUEST,
});

export const fetchBeersSuccess = (payload: BeerState): FetchBeersSuccessAction => ({
  type: BeerActionType.FECTH_BEERS_SUCCESS,
  payload
});

export const saveBeer = (payload: number): SaveBeerAction => ({
  type: BeerActionType.SAVE_BEER,
  payload
});

export const removeBeer = (payload: number): RemoveBeerAction => ({
  type: BeerActionType.REMOVE_BEER,
  payload
});

export const resetBeerCount = (id: number, count: number): ResetBeerCountAction => ({
  type: BeerActionType.RESET_BEER_COUNT,
  id,
  count
});

