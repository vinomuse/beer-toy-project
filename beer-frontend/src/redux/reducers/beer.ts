import { BeerState, BeerItem } from 'models/beer';
import { BeerActionType, BeerActions } from 'types/beer';
import { PurchaseActionType } from 'types/purchase';

const initialState: BeerState = {
  beerList: [],
  totalCount: 0,
  isLoaded: false
};

export default (state = initialState, action: BeerActions): any => {
  switch(action.type) {
    case BeerActionType.FECTH_BEERS_SUCCESS:
      return {
        ...state,
        beerList: action.payload.map((item: BeerItem) => ({ ...item, count: 0 })),
        isLoaded: true,
      }
    case BeerActionType.SAVE_BEER:
      return {
        ...state,
        beerList: state.beerList.map((item: BeerItem) => 
          (item.id === action.payload) 
            ? ({ 
              ...item, 
              stock: item.stock > 0 && item.stock - 1,
              count: item.stock > 0 && item.count + 1
            }) 
            : item
        ),
      }
    // case BeerActionType.UPDATE_TOTAL_COUNT:
    //   return {
    //     ...state,
    //     totalCount: state.beerList.reduce((acc: number, curr: BeerItem) => acc + curr.count, 0), 
    //   }
    case BeerActionType.INCREASE_TOTAL_COUNT:
      return {
        ...state,
        totalCount: state.totalCount + 1
      }

    case BeerActionType.DECREASE_TOTAL_COUNT:
      return {
        ...state,
        totalCount: state.totalCount - 1
      }
      
    case BeerActionType.REMOVE_BEER:
      return {
        ...state,
        beerList: state.beerList.map((item: BeerItem) => 
          (item.id === action.payload) 
            ? ({ 
              ...item, 
              stock: item.count > 0 && item.stock + 1,
              count: item.count > 0 && item.count - 1
            }) 
            : item
        ),
      }
    case BeerActionType.RESET_BEER_COUNT:
      return {
        ...state,
        totalCount: state.totalCount - action.count,
        beerList: state.beerList.map(beer => beer.id === action.id ? ({ ...beer, stock: beer.count + beer.stock, count: 0 }) : beer)
      }
    case PurchaseActionType.PURCHASE_BEERS_SUCCESS:
      return {
        ...state,
        totalCount: 0
      }
    default: 
      return state;
  }
}