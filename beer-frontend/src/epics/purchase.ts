import { ofType, combineEpics } from 'redux-observable';
import { map, mapTo, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { BeerActionType } from 'types/beer';
import { fetchPurchaseBeers, purchaseBeersSuccess } from 'redux/actions/purchase';
import { PurchaseActionType } from 'types/purchase';
import { resetBeerCount } from 'redux/actions/beer';
import { of } from 'rxjs';


const fetchSelectedBeerEpic = (action$: any, state$: any) => 
  action$.pipe(
    ofType(BeerActionType.SAVE_BEER, BeerActionType.REMOVE_BEER),
    map((action: any) => fetchPurchaseBeers(state$.value.beer.beerList, action.payload))
  )

const clearSelectedBeerEpic = (action$: any) =>
  action$.pipe(
    ofType(PurchaseActionType.CLEAR_PURCHASE_BEERITEM),
    map((action: any) => resetBeerCount(action.id, action.count))
  )

const updateTotalPriceEpic = (action$: any) =>
  action$.pipe(
    ofType(BeerActionType.SAVE_BEER, BeerActionType.REMOVE_BEER, BeerActionType.RESET_BEER_COUNT),
    mapTo({ type: PurchaseActionType.UPDATE_TOTAL_PRICE })
  )

const purchaseBeersEpic = (action$: any) =>
  action$.pipe(
    ofType(PurchaseActionType.PURCHASE_BEERS_REQUEST),
    mergeMap((action: any) => 
      ajax.post('/api/purchase', action.data).pipe(
        map((data: any) => purchaseBeersSuccess(data.response)),
        catchError((err => of({
          type: PurchaseActionType.PURCHASE_BEERS_FAILURE,
          message: { title: '서버 에러', reason: '서버 에러입니다. 서버를 점검해주세요.' },
          error: true
        })))
      )
    )
  )

export default combineEpics(
  fetchSelectedBeerEpic,
  clearSelectedBeerEpic,
  updateTotalPriceEpic,
  purchaseBeersEpic
)