'use client';
import * as React from 'react';
import styled from "styled-components";
import { useDrop } from "react-dnd";

interface typeProps {
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

const Images = styled.div`
  height: 100px;
  background-color: white;
  margin: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    z-index: -1
  }
`

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

  const onUpload = ({e, index} : {e: React.ChangeEvent<HTMLInputElement>, index: number}) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const _value = [...value];
      _value.forEach(item => {
        if (item.type === 'images') {
          _value[index] = {
            ...item,
            images: reader.result as string,
          }
        }
      })
      console.log('_value', _value, reader.result)

      setValue(_value);
    }
  }

  const onChange = ({e, index} : {e: React.ChangeEvent<HTMLInputElement>, index: number}) => {
    console.log('e', e.target.value, index);
    const _value = [...value];
    _value[index].text = e.target.value;
    setValue(_value);
  }

  const Component = React.useCallback(({item} : {item : typeProps}) => {
    switch (item.type) {
      case 'text':
        return (
          <div>
            <input type="text"  onChange={(e) => onChange({e, index: item.index})} value={item.text}/>
          </div>
        );
      case 'images':
        console.log('item', item.images)
        return (
          <Images onClick={() => document.getElementById(`images_${item.index}`)?.click()}>
            {
              item.images
              ? 
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.images || ''} alt="" style={{objectFit: 'cover', height: '100%', width:'100%'}}/>
              :
                <div>請上傳圖片</div>
            }
            <input id={`images_${item.index}`} type='file' onChange={(e) => onUpload({e, index: item.index})}/>
          </Images>
        )
      default:
        return;
    }

  }, [onUpload])

  dropRef(ref);
  return (
    <DropZones
      $isOver={isOver}
      ref={ref}
    >
      {
        value.map((item, index) => (
          <div key={index}>
            <Component item={item}/>
          </div>
        ))
      }
    </DropZones>
  )
}