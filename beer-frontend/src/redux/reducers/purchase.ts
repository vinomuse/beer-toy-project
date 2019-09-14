import { PurchaseState } from 'models/purchase';
import { PurchaseActionType, PurchaseActions } from 'types/purchase';

const initialState: PurchaseState = {
  purchaseList: [],
  totalPrice: 0
};

export default (state = initialState, action: PurchaseActions): any => {
  switch(action.type) {
    case PurchaseActionType.FETCH_PURCHASE_BEERS:
      return {
        ...state,
        purchaseList: [
          ...state.purchaseList,
          ...action.payload.filter((beer: any) => beer.id === action.id)
        ].reduce((acc: any, curr: any) => {
          const existing = acc.filter((x: any) => x.id === curr.id);
          // 같은거 없으면 새 데이터 삽입하기
          if (existing.length === 0) {
            acc.push(curr)
          } else {  // 같은거 있으면 덮어씌우기
            const existingIndex = acc.indexOf(existing[0]);
              acc[existingIndex] = curr;
              // 수량이 다시 0이 되었을 경우 해당 배열 삭제
              acc[existingIndex].count === 0 && acc.splice(existingIndex, 1);
          }
          return acc;
        }, []),
      }
    case PurchaseActionType.CLEAR_PURCHASE_BEERITEM:
      return {
        ...state,
        purchaseList: state.purchaseList.filter((item: any) => item.id !== action.id)
      }
    case PurchaseActionType.UPDATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.purchaseList.reduce((acc: number, curr: any) => (acc + curr.price) * curr.count, 0),
      }

    case PurchaseActionType.PURCHASE_BEERS_SUCCESS:
      console.log('구매 되었습니다.', action.data)
      return {
        ...state,
        purchaseList: [],
        totalPrice: 0
      }
    case PurchaseActionType.PURCHASE_BEERS_FAILURE:
      console.log('에러 메세지', action.message)
      return {
        ...state
      }
    default: 
      return state;
  }
}