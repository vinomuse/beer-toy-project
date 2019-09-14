import { ofType, combineEpics } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { TagActionType } from 'types/tag';
import { fetchTagsSuccess } from 'redux/actions/tag';


const fetchTagEpic = (action$: any) => 
  action$.pipe(
    ofType(TagActionType.FETCH_TAGS_REQUEST),
    mergeMap(action =>
      ajax.get('/api/tags').pipe(
        map((data: any) => fetchTagsSuccess(data.response))
      )
    )
  )

export default combineEpics(
  fetchTagEpic
)