'use client';
import * as React from 'react';
import { DndProvider, 
  // useDragLayer 
} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from '../../_style/style';
import { Item } from './Item';

// 拖曳預覽
// const CustomDragLayer = () => {

//   const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
//     itemType: monitor.getItemType(),
//     isDragging: monitor.isDragging(),
//     item: monitor.getItem(),
//     initialOffset: monitor.getInitialSourceClientOffset(),
//     currentOffset: monitor.getSourceClientOffset(),
//   })); 

//   console.log(
//     'item',
//     item,
//     'initialOffset',
//     initialOffset,
//     'currentOffset',
//     currentOffset,
//     'isDragging',
//     isDragging,
//     'itemType',
//     itemType
//   )

//   if (!isDragging) {
//     return null;
//   }

//   const transform = currentOffset ? `translate(${currentOffset.x}px, ${currentOffset.y}px)` : '';

//   return (
//     <div style={{ position: 'fixed', pointerEvents: 'none', zIndex: 100, left: 0, top: 0, transform }}>
//       <div style={{ padding: '8px', border: '1px solid gray', backgroundColor: 'white' }}>
//         {item.text}
//       </div>
//     </div>
//   );
// }

export default function Contant() {

  const itemsRef = React.useRef(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'])
  const [items, setItems] = React.useState(itemsRef.current);
  const [hoverState, setHoverState] = React.useState<'enter' | 'over' | 'leave'>('leave');
  
  const move = ({nowIndex, newIndex}: {nowIndex: number, newIndex: number}) => {
    console.log('nowIndex', nowIndex, 'newIndex', newIndex)
    const newItems = [...items]
    const [removeItem] = newItems.splice(nowIndex, 1)
    newItems.splice(newIndex, 0, removeItem)
    setItems(newItems)
    itemsRef.current = newItems
  }

  React.useEffect(() => {
    itemsRef.current = items
  }, [items])

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <h1>練習2: 列表排序</h1>
        <div className='box'>
          <div className='row'>
            {
              items.map((item, index) => 
                <Item
                  key={item}
                  moveItem={move}
                  index={index}
                  item={item}
                  hoverState={hoverState}
                  setHoverState={setHoverState}
                />
              )
            }
            {/* <CustomDragLayer /> */}
          </div>
        </div>
      </Container>
    </DndProvider>
  )
}