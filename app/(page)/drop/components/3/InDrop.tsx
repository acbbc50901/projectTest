import { typeProps } from "./Drop";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

interface InDropPoprs {
  value: typeProps[];
  setValue: (value: typeProps[]) => void;
  item: typeProps;
  index: number;
}

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
    margin: 10px;
    opacity: 0;
    position: absolute;
    z-index: -1
  }
`

const TextInput = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
  }
`;

export default function InDrop({ value, setValue, item, index }: InDropPoprs) {
  const DrapRef = React.useRef<HTMLDivElement>(null);

  const move = ({
    nowIndex,
    newIndex,
  }: {
    nowIndex: number;
    newIndex: number;
  }) => {
    console.log("nowIndex", nowIndex, "newIndex", newIndex);
    const newItems = [...value];
    const [removeItem] = newItems.splice(nowIndex, 1);
    newItems.splice(newIndex, 0, removeItem);
    setValue(newItems);
  };

  const onUpload = ({
    e,
    index,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    index: number;
  }) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const _value = [...value];
      _value.forEach((item) => {
        if (item.type === "images") {
          _value[index] = {
            ...item,
            images: reader.result as string,
          };
        }
      });
      console.log("_value", _value, reader.result);

      setValue(_value);
    };
  };

  const onChange = ({
    e,
    index,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    index: number;
  }) => {
    console.log("e", e.target.value, index);
    const _value = [...value];
    _value[index].text = e.target.value;
    setValue(_value);
  };

  const [, drapRef] = useDrag(() => ({
    type: "draps",
    collect: (monitor) => ({
      draggedItem: monitor.getItem(),
    }),
  }), [index, value]);

  const [, dropRefs] = useDrop(() => ({
    accept: "draps",
    drop(draggedItem: { index: number }) {
      console.log('hi')
      if (draggedItem.index !== index) {
        move({
          nowIndex: draggedItem.index,
          newIndex: index,
        });
        draggedItem.index = index;
      }
    },
  }), [index, value]);
  drapRef(dropRefs(DrapRef));
  console.log("item", item);
  return (
    <div ref={DrapRef} key={index}>
      {
        !item
        ? 
          <div style={{width: '100%', height: 40}}></div>
        :
          item.type === "images" ? (
            <Images
              onClick={() =>
                document.getElementById(`images_${item.index}`)?.click()
              }
            >
              {item.images ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.images || ""}
                  alt=""
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
              ) : (
                <div>請上傳圖片</div>
              )}
              <input
                id={`images_${item.index}`}
                type="file"
                onChange={(e) => onUpload({ e, index: item.index })}
              />
            </Images>
          ) : (
            <TextInput>
              <input
                type="text"
                onChange={(e) => onChange({ e, index: item.index })}
                value={item.text}
              />
            </TextInput>
          )
      }
    </div>
  );
}
