import { BeerState } from './beer';
import { TagState } from './tag';
import { PurchaseState } from './purchase';


export interface StoreState {
  beer: BeerState;
  tag: TagState;
  purchase: PurchaseState;
}