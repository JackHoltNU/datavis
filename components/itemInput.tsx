import { useCallback, useEffect, useMemo, useState } from "react";
import BlockInput from "./blockInput";
import { Block, DragData, Item, KeyItem, LikertKey } from "./types/types";
import { v4 as uuidv4 } from "uuid";
import {
  faGrip,
  faWindowMinimize,
  faWindowMaximize,
  faTrashCan,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  item: Item;
  likertKey: LikertKey;
  updateItems: (item: Item, id: number) => void;
  deleteItem: (position: number) => void;
  id: string;
  position: number;
}

const ItemInput = ({
  item,
  likertKey,
  updateItems,
  deleteItem,
  id,
  position,
}: Props) => {
  const [itemName, setItemName] = useState(item.title);
  const [blockArray, setBlockArray] = useState<Block[]>(item.blocks);
  const [collapseIcon, setCollapseIcon] =
    useState<IconDefinition>(faWindowMinimize);

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

    updateItems(newItem, position);
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

  const onDrag = (event: React.DragEvent<HTMLElement>) => {
    const dragData: DragData = {
      item,
      position,
    };
    const dragJson = JSON.stringify(dragData);
    event.dataTransfer.setData("text/plain", dragJson);
  };

  const toggleAngleIcon = () => {
    if (collapseIcon === faWindowMinimize) {
      setCollapseIcon(faWindowMaximize);
    } else {
      setCollapseIcon(faWindowMinimize);
    }
  };

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
    <section className="data__input--section">
      <div className="data__input--box data__input--boxitem">
        <div
          className="data__input--header"
          draggable
          onDragStart={(event) => onDrag(event)}
        >
          <div className="data__input--cornericon">
            <FontAwesomeIcon
              icon={faTrashCan}
              className="data__input--icon"
              onClick={() => deleteItem(position)}
            />
          </div>
          <h2
            className="data__input--itemtitle"
            draggable
            onDragStart={(event) => onDrag(event)}
          >
            <FontAwesomeIcon icon={faGrip} className="data__input--icon" />
            {itemName}
          </h2>
          <div className="data__input--cornericon"></div>
        </div>

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
