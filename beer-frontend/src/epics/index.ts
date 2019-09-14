import { combineEpics } from 'redux-observable';

import beerEpic from './beer';
import tagEpic from './tag';
import purchaseEpic from './purchase';

export default combineEpics(
  beerEpic,
  tagEpic,
  purchaseEpic
);
