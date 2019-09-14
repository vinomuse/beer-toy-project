import { TagState, TagItem } from 'models/tag';
import { TagActionType, TagActions } from 'types/tag';

const initialState: TagState = {
  tagList: [],
  isLoaded: false
};

export default (state = initialState, action: TagActions): any => {
  switch(action.type) {
    case TagActionType.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tagList: action.payload.map((item: TagItem) => ({ ...item, active: true })),
        isLoaded: true
      }
    case TagActionType.TOGGLE_TAG:
      return {
        ...state,
        tagList: state.tagList.map((item: TagItem) => 
          item.name === action.payload
            ? ({ ...item, active: !item.active })
            : item
        )
      }
    default: 
      return state;
  }
}