'use client';

import React from 'react';
import styled from 'styled-components';
import Test1 from './components/1/Page';
import Test2 from './components/2/Page';
import Test3 from './components/3/Page';
import Test4 from './components/4/Page';

const Container = styled.div`
  dispaly: flex;
  flex-driction: column;
  gap: 20px;
`;

export default function Contant() {
  return (
    <Container>
      <Test1 />
      <Test2 />
      <Test3 />
      <Test4 />
    </Container>
  );
}
