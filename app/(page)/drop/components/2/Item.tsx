'use client';

import * as React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import gsap from 'gsap';

interface ItemProps {
  item: string;
  index: number;
  moveItem: (args : {nowIndex: number, newIndex: number}) => void;
}

export function Item({ item, index, moveItem } : ItemProps) {
  
  const ref = React.useRef<HTMLDivElement>(null);
  // const [old, setOld] = React.useState<number | null>(null);
  
  const [ok, setOk] = React.useState<boolean>(false);
  console.log('ok', ok);
  // 拖拽物件
  const [, drag] = useDrag(() => ({
    type: 'item',
    item: {item, index},
  }), [index])

  // 可拖曳的目標或位置
  const [, drop] = useDrop(() => ({
    accept: 'item',
    hover: (item: {index: number}) => {
      if (!ok) {
        console.log(item.index, 'item.index', index, 'index')
        if (item.index !== index) {
          // moveItem({
            // nowIndex: item.index,
            // newIndex: index
          // })
          // item.index = index
          // setOld(item.index);
          console.log('hover', item)
        }
        setOk(true);
      }
    },
    // collect(monitor) {
    //   if (!monitor.isOver()) {
    //     setOk(false)
    //   }
    // },
  }), [index, ok])
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
        opacity: 1,
      }}
    >
      {item}
      {index}
    </div>
  )
}