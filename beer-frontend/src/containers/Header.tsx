import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header';
import { StoreState } from 'models';

interface Props {
  totalCount: number
}

export class HeaderContainer extends Component<Props, {}> {
  render() {

    const { totalCount } = this.props;
    return (
      <Header 
        totalCount={totalCount}
      />
    );
  }
}

export const connected = connect(
  ({ beer }: StoreState) => ({
    totalCount: beer.totalCount
  }),
  { }
)(HeaderContainer);