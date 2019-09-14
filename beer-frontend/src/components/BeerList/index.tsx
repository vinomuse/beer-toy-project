import React, { Component } from 'react';
import { BeerItem } from 'models/beer';
import { TagItem } from 'models/tag';
import Beer from 'components/Beer';

import './index.scss';

interface Props {
  showCount: number;
  beerList: Array<BeerItem>;
  tagList: string[];
  onShowMore(): void;
  onSave(id: number): void;
  onRemove(id: number): void;
}

class BeerList extends Component<Props> {
  render() {

    const { onShowMore } = this.props;
    
    return (
      <div className="beer-list">
        <ul>
          {this.sortList()}
        </ul>
        <button className="btn-more" onClick={onShowMore}>+ 더보기</button>
      </div>
    )
  }

  sortList = () => {
    const { beerList, tagList, showCount, onSave, onRemove } = this.props;
    // 일치하는 태그수가 많은 순으로 정렬
    return beerList.sort((a: BeerItem, b: BeerItem) => {
      const bTags = b.tags.filter(item => tagList.includes(item.key));
      const aTags = a.tags.filter(item => tagList.includes(item.key));
      return bTags.length - aTags.length;
    }).map((beer: BeerItem, idx: number) => {
      // 각 beer 안에 있는 태그들이 존재하는지 체크...
      const isExisted = beer.tags.find((tag: TagItem) => tagList.includes(tag.key));

      return (idx < showCount) && isExisted && (
        <Beer 
          key={beer.id}
          beer={beer}
          onSave={onSave}
          onRemove={onRemove}
          type="shopping"
        />
      )
    })
  }
}

export default BeerList;