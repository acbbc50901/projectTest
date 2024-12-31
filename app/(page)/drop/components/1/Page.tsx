'use client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from '../1/Card'
import DropZone  from '../1/Drop'
import { Container } from '../../_style/style';

export default function Contant() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <h1>練習1: 拖拽卡片到目標區域</h1>
        <div className='box'>
          {/* 卡片 */}
          <div className='row'>
            <Card text="Card 1" />
            <Card text="Card 2" />
            <Card text="Card 3" />
          </div>

          {/* 放置區域 */}
          <div className='row'>
            <DropZone />
            <DropZone />
            <DropZone />
          </div>
        </div>
      </Container>
    </DndProvider>
  );
}
