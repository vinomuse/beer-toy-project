import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'models';
import { BeerItem } from 'models/beer';
import BeerList from 'components/BeerList';
import { fetchBeersRequest, saveBeer, removeBeer } from 'redux/actions/beer';
import { FetchBeersRequestAction, SaveBeerAction, RemoveBeerAction } from 'types/beer';
import { TagItem } from 'models/tag';

interface Props {
  beerList: Array<BeerItem>;
  isLoaded: boolean;
  tagList: Array<TagItem>;
  fetchBeersRequest(): FetchBeersRequestAction;
  saveBeer(id: number): SaveBeerAction;
  removeBeer(id: number): RemoveBeerAction;
}

interface State {
  showCount: number;
} 

export class BeerContainer extends Component<Props, State> {

  state: State = {
    showCount: 5,
  }

  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.fetchBeersRequest();
    }
  }

  render() {
    const { handleShowMore, handleSave, handleRemove } = this;
    const { showCount } = this.state;
    const { beerList } = this.props;

    return (
      <BeerList 
        onShowMore={handleShowMore}
        onSave={handleSave}
        onRemove={handleRemove}
        showCount={showCount}
        beerList={beerList} 
        tagList={this.activeTags()}
      />
    );
  }

  activeTags = (): string[] => {
    let result: string[] = [];
    this.props.tagList.map(tag => tag.active && result.push(tag.key));
    return result;
  }

  handleShowMore = () => {
    this.setState(prevState => ({
      showCount: prevState.showCount + 5
    }))
  }

  handleSave = (id: number) => {
    this.props.saveBeer(id);
  }

  handleRemove = (id: number) => {
    this.props.removeBeer(id);
  }

  
}

export const connected = connect(
  ({ beer, tag }: StoreState) => ({
    beerList: beer.beerList,
    isLoaded: beer.isLoaded,
    tagList: tag.tagList
  }),
  { fetchBeersRequest, saveBeer, removeBeer }
)(BeerContainer)
