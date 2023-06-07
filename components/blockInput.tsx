import { useEffect, useState } from "react";
import { BlockPair } from "./types/types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  inputName: string;
  inputValue: string | number;
  itemName?: string;
  itemIndex?: number;
  callback: (value: BlockPair | string, optional?: number) => void;
}

const BlockInput = ({
  inputName,
  inputValue,
  itemName,
  callback,
  itemIndex,
}: Props) => {
  const [blockLabel, setBlockLabel] = useState(inputName);
  const [blockValue, setBlockValue] = useState(inputValue);

  useEffect(() => {
    const blockpair: BlockPair = {
      label: blockLabel,
      value: blockValue,
    };

    if (itemIndex) {
      callback(blockpair, itemIndex);
      console.log("change registered");
    } else {
      callback(blockpair.value as string);
    }
  }, [blockValue, blockLabel]);

  return (
    <div className="data__input--block">
      <input
        className="data__input--blocklabel"
        value={blockLabel}
        onChange={(e) => {
          setBlockLabel(e.target.value);
        }}
      />
      <input
        className="data__input--blockinput"
        type="text"
        value={blockValue}
        onChange={(e) => {
          setBlockValue(e.target.value);
        }}
      />
    </div>
  );
};

export default BlockInput;
