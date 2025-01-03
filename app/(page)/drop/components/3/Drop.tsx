'use client';
import * as React from 'react';
import styled from "styled-components";
import { useDrop } from "react-dnd";
import InDrop from './InDrop';

export interface typeProps {
  index: number;
  type: string;
  text?: string;
  images?: string;
}

const DropZones = styled.div<{ $isOver: boolean }>`
  width: 80vw;
  height: 40vh;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.$isOver ? '#e0ffe0' : '#f9f9f9')};
  overflow-y: auto;
`;



export default function Drop () {
  const ref = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState<Array<typeProps>>([]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'OPTION',
    drop: (item: { type: string }) => {
      console.log('Dropped:', item.type);
      const _value = [...value];
      switch (item.type) {
        case 'text':
          _value.push({
            index: _value.length,
            type: 'text',
            text: '文字',
          });
          break;
        case 'image':
          _value.push({
            index: _value.length,
            type: 'images',
            images: '',
          });
          break;
        default:
          break;
      }
      setValue(_value);

    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [value]);



  // const move = ({nowIndex, newIndex}: {nowIndex: number, newIndex: number}) => {
  //   console.log('nowIndex', nowIndex, 'newIndex', newIndex)
  //   const newItems = [...value]
  //   const [removeItem] = newItems.splice(nowIndex, 1)
  //   newItems.splice(newIndex, 0, removeItem)
  //   setValue(newItems)
  // }

  

  dropRef(ref);
  return (
    <DropZones
      $isOver={isOver}
      ref={ref}
    >
      {
        value.map((item, index) => (
          <InDrop
            key={index}
            value={value}
            setValue={setValue}
            item={item}
            index={index}
          />
        ))
      }
    </DropZones>
  )
}