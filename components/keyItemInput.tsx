import { useEffect, useState } from "react";
import { KeyItem } from "./types/types";
import { SwatchesPicker } from "react-color";

interface Props {
  itemIndex: number;
  keyitem: KeyItem;
  updateKeyItem: (value: KeyItem, optional?: number) => void;
}

const KeyItemInput = ({ itemIndex, keyitem, updateKeyItem }: Props) => {
  const [blockValue, setBlockValue] = useState(keyitem.name);
  const [pairColour, setPairColour] = useState<string>(keyitem.colour);
  const [displayPicker, setDisplayPicker] = useState(false);

  useEffect(() => {
    const newKeyitem: KeyItem = {
      name: blockValue,
      id: keyitem.id,
      colour: pairColour,
    };

    updateKeyItem(newKeyitem, itemIndex);
  }, [blockValue, pairColour]);

  return (
    <div className="data__input--block">
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
      <input
        className="data__input--keyItemInput"
        type="text"
        value={blockValue}
        onChange={(e) => {
          setBlockValue(e.target.value);
        }}
      />
    </div>
  );
};

export default KeyItemInput;
