import React from 'react';
import Beer from 'components/Beer';

import './index.scss';
import { BeerItem as BeerItemType } from 'models/beer';
import { TotalData } from 'models/purchase';

interface Props {
  totalCount: number;
  totalPrice: number;
  purchaseList: Array<BeerItemType>;
  onClear(id: number, count: number): void;
  onPurchase(data: TotalData): void;
}

const PurchaseList: React.FC<Props> = ({ purchaseList, onClear, totalCount, totalPrice, onPurchase }) => {
  return (
    <div className="purchase-list">
      <ul>
        {
          purchaseList.map(beer => (
            <Beer 
              key={beer.id}
              beer={beer}
              type="payment"
              onClear={onClear}
            />
          ))
        }
      </ul>

      <div className="total-info">
        <div>총 구매수량 <span>{totalCount}</span>개</div>
        <div>총 결제금액 <span>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원</div>
      </div>
      <button className="btn-purchase" onClick={() => onPurchase({ totalCount, totalPrice })}>구매하기</button>
    </div>
  );
};

export default PurchaseList;