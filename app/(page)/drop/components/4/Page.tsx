'use client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Container } from '../../_style/style';

export default function Contant() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <h1>練習4: 到處放置位置</h1>
        <div className='box'>
          {/* 卡片 */}
          <div className='row'>
            
          </div>

          {/* 放置區域 */}
          <div className='row'>
            
          </div>
        </div>
      </Container>
    </DndProvider>
  );
}
