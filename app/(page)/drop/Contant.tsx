'use client';

import React from 'react';
import styled from 'styled-components';
import Test1 from './components/1/Page';
import Test2 from './components/2/Page';

const Container = styled.div`
  dispaly: flex;
  flex-driction: column;
  gap: 20px;
`;

export default function Contant() {
  return (
    <div>
      <Test1 />
      <Test2 />
    </div>
  );
}
