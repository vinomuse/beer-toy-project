import { ofType, combineEpics } from 'redux-observable';
import { map, mergeMap, mapTo } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { BeerActionType } from 'types/beer';
import { fetchBeersSuccess } from 'redux/actions/beer';

const fetchBeersEpic = (action$: any) => 
  action$.pipe(
    ofType(BeerActionType.FECTH_BEERS_REQUEST),
    mergeMap(action =>
      ajax.get('/api/beers').pipe(
        map((data: any) => fetchBeersSuccess(data.response))
      )
    )
  )

const saveBeerEpic = (action$: any) => 
  action$.pipe(
    ofType(BeerActionType.SAVE_BEER),
    mapTo({type: BeerActionType.INCREASE_TOTAL_COUNT})
  )

const removeBeerEpic = (action$: any) => 
  action$.pipe(
    ofType(BeerActionType.REMOVE_BEER),
    mapTo({type: BeerActionType.DECREASE_TOTAL_COUNT})
  )

export default combineEpics(
  fetchBeersEpic,
  saveBeerEpic,
  removeBeerEpic
)