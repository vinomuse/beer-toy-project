import React, { Component } from 'react';
import { connect } from 'react-redux';
import Empty from 'components/Empty';
import PurchaseList from 'components/PurchaseList';
import { StoreState } from 'models';
import { BeerItem } from 'models/beer';
import { clearPurchaseBeerItem, purchaseBeersRequest } from 'redux/actions/purchase';
import { PurchaseBeersRequestAction } from 'types/purchase';
import { TotalData } from 'models/purchase';

interface Props {
  totalCount: number;
  totalPrice: number;
  purchaseList: Array<BeerItem>;
  clearPurchaseBeerItem(id: number, count: number): void;
  purchaseBeersRequest(data: TotalData): PurchaseBeersRequestAction;
}

export class PurchaseContainer extends Component<Props, {}> {
  render() {
    const { handleClear, handlePurchase } = this;
    const { totalCount, totalPrice, purchaseList } = this.props;
    return (
      <>
        {totalCount > 0 
          ? <PurchaseList
              purchaseList={purchaseList}
              totalPrice={totalPrice}
              totalCount={totalCount}
              onClear={handleClear}
              onPurchase={handlePurchase}
            /> 
          : <Empty />
        }
      </>
    );
  }

  handleClear = (id: number, count: number) => {
    this.props.clearPurchaseBeerItem(id, count);
  }

  handlePurchase = ({ totalCount, totalPrice }: TotalData) => {
    this.props.purchaseBeersRequest({ totalCount, totalPrice })
  }
}

export const connected = connect(
  ({ beer, purchase }: StoreState) => ({
    totalCount: beer.totalCount,
    totalPrice: purchase.totalPrice,
    purchaseList: purchase.purchaseList,
    
  }),
  { clearPurchaseBeerItem, purchaseBeersRequest }
)(PurchaseContainer);