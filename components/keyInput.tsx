import { useCallback, useEffect, useState } from "react";
import { LikertKey, KeyItem } from "./types/types";
import KeyItemInput from "./keyItemInput";

interface Props {
  likertKey: LikertKey;
  updateKey: (key: LikertKey) => void;
}

const KeyInput = ({ likertKey, updateKey }: Props) => {
  const [fontSize, setFontSize] = useState(likertKey.fontSize);
  const updateKeyItem = useCallback(
    (value: KeyItem, num) => {
      const tempKeyItems = likertKey.keyItems;
      tempKeyItems[num] = value;

      const newKey: LikertKey = {
        keyItems: [...tempKeyItems],
        fontSize: fontSize,
      };

      updateKey(newKey);
    },
    [fontSize]
  );

  useEffect(() => {
    const newKey: LikertKey = {
      keyItems: likertKey.keyItems,
      fontSize: fontSize,
    };
    updateKey(newKey);
  }, [fontSize]);

  return (
    <section className="data__section">
      <div className="data__box data__boxkey">
        <h2 className="data__itemtitle">Key</h2>
        <div className="chartsetup__pair">
          <label className="chartsetup__pair--label">Key Font Size</label>
          <div className="incrementpair">
            <button
              className="incrementpair__btn"
              onClick={() => {
                setFontSize(fontSize - 1);
              }}
            >
              -
            </button>
            <p className="chartsetup__fontsize">{fontSize}</p>
            <button
              className="incrementpair__btn"
              onClick={() => {
                setFontSize(fontSize + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        {likertKey.keyItems.map((keyItem, index) => {
          return (
            <KeyItemInput
              itemIndex={index}
              key={keyItem.id}
              keyitem={keyItem}
              updateKeyItem={updateKeyItem}
            />
          );
        })}
      </div>
    </section>
  );
};

export default KeyInput;
