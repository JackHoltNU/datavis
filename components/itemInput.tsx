import { useCallback, useEffect, useState } from "react";
import BlockInput from "./blockInput";
import { BlockPair, Item } from "./types/types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  updateItems: (item: Item, id: number) => void;
  id: number;
}

const ItemInput = ({ updateItems, id }: Props) => {
  const [itemName, setItemName] = useState("test");
  const [blockNum, setBlockNum] = useState(7);
  const defaultBlock: BlockPair = {
    label: "Unlabelled",
    value: 0,
    colour: "CCCCCC",
  };
  const [blockArray, setBlockArray] = useState<BlockPair[]>(
    Array(7).fill(defaultBlock)
  );

  useEffect(() => {
    setBlockArray([
      ...blockArray.map((item) => {
        item.id = uuidv4();
        console.log(item.id);
        return item;
      }),
    ]);
  }, []);

  useEffect(() => {
    // labels code still to be added
    const newItem: Item = {
      title: itemName,
      blockpairs: blockArray,
    };

    updateItems(newItem, id);
  }, [blockArray, itemName, id]);

  const updateBlockValue = useCallback((value: BlockPair, num) => {
    // to add validation of value

    // to add validation of total sum

    // console.log(`blockpair ${value}, num ${num}`);

    const tempArray = blockArray;
    tempArray[num - 1] = value;

    setBlockArray([...tempArray]);
  }, []);

  const setItemTitle = useCallback((title: string) => {
    setItemName(title);
  }, []);

  return (
    <section className="data__input-section">
      <h1>Likert Items</h1>
      <button className="btn">Add item</button>

      <div className="data__input--item">
        <h2 className="data__input--item-title">Item 1</h2>
        <BlockInput
          inputName="Title"
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
