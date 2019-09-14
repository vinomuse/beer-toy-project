import { Action } from 'redux';
import { TagState } from 'models/tag';

export enum TagActionType {
  FETCH_TAGS_REQUEST = 'tag/FETCH_TAGS_REQUEST',
  FETCH_TAGS_SUCCESS = 'tag/FETCH_TAGS_SUCCESS',
  FETCH_TAGS_FAILURE = 'tag/FETCH_TAGS_FAILURE',
  TOGGLE_TAG = 'tag/TOGGLE_TAG'
}

type TagAction = Action<TagActionType>;

export interface FetchTagsRequestAction extends TagAction {
  type: TagActionType.FETCH_TAGS_REQUEST
}

export interface FetchTagsSuccessAction extends TagAction {
  type: TagActionType.FETCH_TAGS_SUCCESS
  payload: TagState
}

export interface FetchTagsFailureAction extends TagAction {
  type: TagActionType.FETCH_TAGS_FAILURE
}

export interface ToggleTagAction extends TagAction {
  type: TagActionType.TOGGLE_TAG
  payload: string
}

export type TagActions = 
  | FetchTagsRequestAction
  | FetchTagsSuccessAction
  | FetchTagsFailureAction
  | ToggleTagAction