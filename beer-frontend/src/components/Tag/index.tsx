import React from 'react';
import Swiper from 'react-id-swiper';

import { TagItem } from 'models/tag';

import './index.scss';

interface Props {
  tagList: Array<TagItem>;
  onToggle(name: string): void;
}

const Tag: React.FC<Props> = ({ tagList, onToggle }) => {
  const swiperConfig = {
    slidesPerView: 'auto',
    spaceBetween: 6,
    freeMode: true,
    shouldSwiperUpdate: true,
  };

  return (
    <div className="tag">
      <Swiper {...swiperConfig}>
        {
          tagList.map(item => (
            <div 
              key={item.key} 
              className={`${item.active ? 'active' : ''}`} 
              onClick={() => onToggle(item.name)}
            >
              {item.name}
            </div>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Tag;