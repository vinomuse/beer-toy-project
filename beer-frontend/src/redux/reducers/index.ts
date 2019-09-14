import { combineReducers } from 'redux';
import beer from './beer';
import tag from './tag';
import purchase from './purchase';


export default combineReducers({
  beer,
  tag,
  purchase
});
