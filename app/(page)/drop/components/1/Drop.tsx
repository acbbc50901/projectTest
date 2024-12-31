'use client';

import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const DropZones = styled.div<{ $isOver: boolean }>`
  width: 250px;
  height: 100px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.$isOver ? '#e0ffe0' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
`;

export default function DropZone() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState<string>('');
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'CARD', // 接收的類型
    drop: (item: { text: string }) => {
      console.log('Dropped:', item.text);
      setValue(item.text);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const onClick = () => {
    setValue('')
  };

  dropRef(ref);
  return (
    <DropZones
      ref={ref}
      $isOver={isOver}
      onDoubleClick={onClick}
    >
      {isOver ? '放下卡片' : '  將卡片放進裡面!'}
      {value && <div>{value}</div>}
    </DropZones>
  );
}