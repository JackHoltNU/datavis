import { useCallback, useEffect, useMemo, useState } from "react";
import BlockInput from "./blockInput";
import { Block, Item, KeyItem, LikertKey } from "./types/types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  item: Item;
  likertKey: LikertKey;
  updateItems: (item: Item, id: number) => void;
  id: number;
}

const ItemInput = ({ item, likertKey, updateItems, id }: Props) => {
  const [itemName, setItemName] = useState(item.title);
  const [blockArray, setBlockArray] = useState<Block[]>(item.blocks);

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
      blocks: blockArray,
      id: item.id,
    };

    updateItems(newItem, id);
  }, [blockArray, itemName, id]);

  const updateBlockValue = useCallback((value: Block, num) => {
    // to add validation of value

    // to add validation of total sum

    // console.log(`blockpair ${value}, num ${num}`);

    const tempArray = blockArray;
    value.id = tempArray[num - 1].id;
    tempArray[num - 1] = value;

    setBlockArray([...tempArray]);
  }, []);

  const blockInputs = useMemo(() => {
    return blockArray.map((blockpair, index) => {
      const keyItem: KeyItem = likertKey.keyItems[index];
      return (
        <BlockInput
          key={blockpair.id}
          inputName={keyItem.name}
          inputValue={blockpair.value}
          colour={keyItem.colour}
          itemIndex={index + 1}
          callback={updateBlockValue}
        />
      );
    });
  }, [likertKey, blockArray]);

  const setItemTitle = useCallback((title: string) => {
    setItemName(title);
  }, []);

  return (
    <section className="data__input-section">
      <div className="data__input--box data__input--boxitem">
        <h2 className="data__input--itemtitle">{itemName}</h2>
        <div className="data__input--settitle">
          <label className="data__input--textlabel">Label</label>
          <input
            className="data__input--textinput"
            type="text"
            value={itemName}
            onChange={(e) => {
              setItemTitle(e.target.value);
            }}
          />
        </div>
        {blockInputs}
      </div>
    </section>
  );
};

export default ItemInput;
