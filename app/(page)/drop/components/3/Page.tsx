'use client';
import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from '../../_style/style';
import Option from './Option';
import Drop from './Drop'

export default function Contant() {

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <h1>練習3: 拖拽生成新元素</h1>
        <div className='box'>
          <div className='row'>
            <Option type='image'/>
            <Option type='text'/>  
          </div>
          <div className='row'>
            <Drop />
            <Drop />
          </div>
        </div>
      </Container>
    </DndProvider>
  )
}