import { useEffect, useState } from "react";
import { Block, KeyItem } from "./types/types";

interface Props {
  inputName: string;
  inputValue: string | number;
  colour: string | null;
  itemName?: string;
  itemIndex?: number;
  callback: (value: Block | string | KeyItem, optional?: number) => void;
}

const BlockInput = ({
  inputName,
  inputValue,
  colour,
  callback,
  itemIndex,
}: Props) => {
  const [blockLabel, setBlockLabel] = useState(inputName);
  const [blockValue, setBlockValue] = useState(inputValue);

  useEffect(() => {
    const block: Block = {
      value: blockValue,
    };

    if (itemIndex) {
      callback(block, itemIndex);
    } else {
      callback(block.value as string);
    }
  }, [blockValue, blockLabel]);

  return (
    <div className="data__block">
      {itemIndex && (
        <>
          <div className="swatch" style={{ backgroundColor: colour }}></div>
        </>
      )}
      <label className="data__blocklabel">{inputName}</label>
      <input
        className="data__blockinput"
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
