import { 
  TagActionType,
  FetchTagsRequestAction,
  FetchTagsSuccessAction,
  ToggleTagAction
} from 'types/tag';
import { TagState } from 'models/tag'


export const fetchTagsRequest = (): FetchTagsRequestAction => ({
  type: TagActionType.FETCH_TAGS_REQUEST
});

export const fetchTagsSuccess = (payload: TagState): FetchTagsSuccessAction => ({
  type: TagActionType.FETCH_TAGS_SUCCESS,
  payload
});

export const toggleTag = (payload: string): ToggleTagAction => ({
  type: TagActionType.TOGGLE_TAG,
  payload
});