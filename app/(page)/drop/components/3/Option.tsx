'use strict';

import React from 'react';
import { useDrag } from 'react-dnd';

interface OptionProps {
  type: string;
}

export default function Option({ type } : OptionProps) {
  
  const ref = React.useRef<HTMLDivElement>(null);
  const option = React.useCallback(() => {
    switch (type) {
      case 'image':
        
        return '圖片';
      case 'text':

        return '文字';
      default:
        break;
    }
  }, [type])

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'OPTION',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  dragRef(ref)
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
      {option()}
    </div>
  )
}