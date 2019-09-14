import React from 'react';

import * as Beer from 'containers/Beer';
import * as Tag from 'containers/Tag';

const Home: React.FC = () => {
  return (
    <>
      <Tag.connected />
      <Beer.connected />
    </>
  );
};

export default Home;