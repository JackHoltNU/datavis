import { useCallback, useEffect, useState } from "react";
import { LikertKey, KeyItem } from "./types/types";
import KeyItemInput from "./keyItemInput";

interface Props {
  likertKey: LikertKey;
  updateKey: (key: LikertKey) => void;
}

const KeyInput = ({ likertKey, updateKey }: Props) => {
  const updateKeyItem = useCallback((value: KeyItem, num) => {
    const tempKeyItems = likertKey.keyItems;
    tempKeyItems[num] = value;

    const newKey: LikertKey = {
      keyItems: [...tempKeyItems],
    };

    updateKey(newKey);
  }, []);

  return (
    <section className="data__input-section">
      <div className="data__input--box data__input--boxkey">
        <h2 className="data__input--item-title">Key</h2>
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
