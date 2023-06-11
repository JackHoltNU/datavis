import { useEffect, useState } from "react";
import { BlockPair } from "./types/types";
import { v4 as uuidv4 } from "uuid";
import { SwatchesPicker } from "react-color";

interface Props {
  inputName: string;
  inputValue: string | number;
  colour: string | null;
  itemName?: string;
  itemIndex?: number;
  callback: (value: BlockPair | string, optional?: number) => void;
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
  const [pairColour, setPairColour] = useState<string>(colour);
  const [displayPicker, setDisplayPicker] = useState(false);

  useEffect(() => {
    const blockpair: BlockPair = {
      label: blockLabel,
      value: blockValue,
      colour: pairColour,
    };

    if (itemIndex) {
      callback(blockpair, itemIndex);
      console.log("change registered");
    } else {
      callback(blockpair.value as string);
    }
  }, [blockValue, blockLabel, pairColour]);

  return (
    <div className="data__input--block">
      {itemIndex && (
        <>
          <div
            className="swatch"
            onMouseDown={() => setDisplayPicker(true)}
            style={{ backgroundColor: pairColour }}
          >
            {displayPicker && (
              <div
                className="colorpicker"
                onMouseLeave={() => {
                  setDisplayPicker(false);
                }}
              >
                <SwatchesPicker
                  onChangeComplete={(color) => setPairColour(color.hex)}
                />
              </div>
            )}
          </div>
        </>
      )}
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
