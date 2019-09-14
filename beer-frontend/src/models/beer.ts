import { TagItem } from './tag';

export interface BeerItem {
  id: number;
  name: string;
  image: string;
  tags: Array<TagItem>;
  price: number;
  stock: number;
  count: number;
}

export interface BeerState {
  [x: string]: any;
  beerList: Array<BeerItem>;
  totalCount: number;
  isLoaded: boolean;
}