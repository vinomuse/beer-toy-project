import React from 'react';
import { Link } from 'react-router-dom';
import EmptyImage from 'images/empty-cart.png';

import './index.scss';

const Empty = () => {
  return (
    <div className="empty">
      <div className="container">
        <div className="img">
          <img width="100%" src={EmptyImage} alt="empty cart"/>
        </div>
        <div className="text">
          <p>카트가 비었습니다.</p>
          <p>목록에서 원하는 맥주를<br />카트에 담아보세요.</p>
        </div>
        <Link to="/">목록으로 가기</Link>
      </div>
    </div>
  );
};

export default Empty;