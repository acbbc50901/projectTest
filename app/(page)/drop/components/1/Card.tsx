'use client';

import React from 'react';
import { useDrag } from 'react-dnd';

export interface CardProps {
  text: string;
}

export default function Card({ text }: CardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'CARD', // 定義拖拽類型
    item: { text }, // 傳遞的數據
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  dragRef(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        margin: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        cursor: 'move',
      }}
    >
      {text}
    </div>
  );
}
