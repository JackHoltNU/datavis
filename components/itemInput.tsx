import { useCallback, useEffect, useMemo, useState } from "react";
import BlockInput from "./blockInput";
import { Block, DragData, Item, KeyItem, LikertKey } from "./types/types";
import { v4 as uuidv4 } from "uuid";
import {
  faGrip,
  faAngleRight,
  faAngleDown,
  faTrashCan,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  item: Item;
  likertKey: LikertKey;
  updateItems: (item: Item, id: number) => void;
  deleteItem: (position: number) => void;
  position: number;
}

const ItemInput = ({
  item,
  likertKey,
  updateItems,
  deleteItem,
  position,
}: Props) => {
  const [itemName, setItemName] = useState(item.title);
  const [blockArray, setBlockArray] = useState<Block[]>(item.blocks);
  const [collapseIcon, setCollapseIcon] = useState<IconDefinition>(
    item.collapsedInput ? faAngleRight : faAngleDown
  );
  const [collapsed, setCollapsed] = useState(item.collapsedInput);
  const [grabbed, setGrabbed] = useState(false);

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
      collapsedInput: collapsed,
    };

    updateItems(newItem, position);
  }, [blockArray, itemName, item.id, collapsed]);

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
    setGrabbed(true);
    const dragData: DragData = {
      item,
      position,
    };
    const dragJson = JSON.stringify(dragData);
    event.dataTransfer.setData("text/plain", dragJson);
  };

  const toggleAngleIcon = () => {
    if (collapseIcon === faAngleDown) {
      setCollapseIcon(faAngleRight);
    } else {
      setCollapseIcon(faAngleDown);
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
      <div
        className={grabbed ? "data__input--box grabbed" : "data__input--box"}
      >
        <div
          className="data__input--header"
          draggable
          onDragStart={(event) => onDrag(event)}
          onDragEnd={() => setGrabbed(false)}
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
          <div className="data__input--cornericon">
            <FontAwesomeIcon
              icon={collapseIcon}
              className="data__input--icon"
              onClick={() => {
                toggleAngleIcon();
                setCollapsed(!collapsed);
              }}
            />
          </div>
        </div>
        {!collapsed && (
          <div className="data__input--collapsearea">
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
        )}
      </div>
    </section>
  );
};

export default ItemInput;
