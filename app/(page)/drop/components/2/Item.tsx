'use client';

import * as React from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface ItemProps {
  item: string;
  index: number;
  moveItem: (args : {nowIndex: number, newIndex: number}) => void;
  hoverState: 'enter' | 'over' | 'leave';
  setHoverState: (args: 'enter' | 'over' | 'leave') => void;
}



// 列表
export function Item({ item, index, moveItem, hoverState } : ItemProps) {
  
  const ref = React.useRef<HTMLDivElement>(null);
  // 拖拽物件
  const [{ draggedItem }, drag] = useDrag(() => ({
    type: 'item',
    item: {index},
    collect: (monitor) => ({
      draggedItem: monitor.getItem(),
      
    }),
  }), [index, hoverState])

  // 可拖曳的目標或位置
  const [, drop] = useDrop(() => ({
    accept: 'item',
    hover(draggedItem: {index: number}) {
      if (draggedItem.index !== index) {
        moveItem({
          nowIndex: draggedItem.index,
          newIndex: index,
        });
        draggedItem.index = index;
      }
    },
  }), [index, moveItem]);


  // 可拖曳的物件 包住 目標
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        padding: '10px',
        margin: '5px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        cursor: 'move',
        opacity: draggedItem?.index === index ? 0.1 : 1,
      }}
    >
      <div>第{item}.</div>
      {index}
    </div>
  )
}