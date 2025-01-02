'use client';

import * as React from 'react';
import { useDrag, useDrop } from 'react-dnd';
// import gsap from 'gsap';

interface ItemProps {
  item: string;
  index: number;
  moveItem: (args : {nowIndex: number, newIndex: number}) => void;
  hoverState: 'enter' | 'over' | 'leave';
  setHoverState: (args: 'enter' | 'over' | 'leave') => void;
}

export function Item({ item, index, moveItem, hoverState, setHoverState } : ItemProps) {
  
  const ref = React.useRef<HTMLDivElement>(null);
  // const [old, setOld] = React.useState<number | null>(null);
  const [onDrag, setOnDrag] = React.useState<boolean>(false);
  // 拖拽物件
  const [, drag] = useDrag(() => ({
    type: 'item',
    item: {item, index},
  }), [index, hoverState])

  // 可拖曳的目標或位置
  const [, drop] = useDrop(() => ({
    accept: 'item',
    // hover: (item: {index: number}) => {
    //     // console.log(item.index, 'item.index', index, 'index')
    //     if (hoverState === 'leave') {
    //       console.log('進入 hover:', item);
    //       moveItem({
    //         nowIndex: item.index,
    //         newIndex: index
    //       })
    //       setHoverState('over'); // 標記進入 hover 狀態
    //     } else if (hoverState === 'enter') {
    //       // console.log('保持 hover:', item);
    //       setHoverState('leave');
    //     }
    //     // if (item.index !== index) {
    //     //   moveItem({
    //     //     nowIndex: item.index,
    //     //     newIndex: index
    //     //   })
    //     //   // item.index = index
    //     //   console.log('hover', item)
    //     // } else {
    //     // }
    // },
    // collect(monitor) {
    //   const currentlyOver = monitor.isOver();
    //   console.log(monitor.getItem())
    //   if (!monitor.getItem() && hoverState !== 'leave') {
    //     console.log('離開 hover');
    //     setHoverState('leave'); // 標記離開 hover 狀態
    //   }

    //   // if (currentlyOver && hoverState !== 'leave') {
    //   //   setHoverState('enter'); // 標記離開 hover 狀態
    //   // } 
    // },
    drop: (item: {index: number}) => {
      // console.log('drop')
      // console.log(item.index, 'item.index', index, 'index')
      moveItem({
        nowIndex: item.index,
        newIndex: index
      })
    }
  }), [index, hoverState])
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
        opacity: onDrag ? 0.5 : 1 ,
      }}
    >
      <div>第{item}.</div>
      {index}
    </div>
  )
}