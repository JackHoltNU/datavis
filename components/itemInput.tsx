import { useCallback, useEffect, useState } from "react";
import BlockInput from "./blockInput";
import { BlockPair, Item } from "./types/types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  item: Item;
  updateItems: (item: Item, id: number) => void;
  id: number;
}

const ItemInput = ({ item, updateItems, id }: Props) => {
  const [itemName, setItemName] = useState(item.title);
  const [blockNum, setBlockNum] = useState(7);
  //   const defaultBlock: BlockPair = {
  //     label: "Unlabelled",
  //     value: 0,
  //     colour: "CCCCCC",
  //   };
  const [blockArray, setBlockArray] = useState<BlockPair[]>(item.blockpairs);

  useEffect(() => {
    setBlockArray([
      ...blockArray.map((item) => {
        item.id = uuidv4();
        return item;
      }),
    ]);
  }, []);

  useEffect(() => {
    // labels code still to be added
    const newItem: Item = {
      title: itemName,
      blockpairs: blockArray,
      id: item.id,
    };

    updateItems(newItem, id);
  }, [blockArray, itemName, id]);

  const updateBlockValue = useCallback((value: BlockPair, num) => {
    // to add validation of value

    // to add validation of total sum

    // console.log(`blockpair ${value}, num ${num}`);

    const tempArray = blockArray;
    value.id = tempArray[num - 1].id;
    tempArray[num - 1] = value;

    setBlockArray([...tempArray]);
  }, []);

  const setItemTitle = useCallback((title: string) => {
    setItemName(title);
  }, []);

  return (
    <section className="data__input-section">
      <div className="data__input--item">
        <h2 className="data__input--item-title">Item {id + 1}</h2>
        <BlockInput
          inputName="Title"
          colour={null}
          itemName={itemName}
          inputValue={itemName}
          callback={setItemTitle}
        />
        {blockArray.map((blockpair, index) => {
          return (
            <BlockInput
              key={blockpair.id}
              inputName={blockpair.label}
              inputValue={blockpair.value}
              colour={blockpair.colour}
              itemIndex={index + 1}
              callback={updateBlockValue}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ItemInput;
