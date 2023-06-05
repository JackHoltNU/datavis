import { useCallback, useEffect, useState } from "react";
import BlockInput from "./blockInput";
import { Item } from "./types/types";

interface Props {
  updateItems: (item: Item, id: number) => void;
  id: number;
}

const ItemInput = ({ updateItems, id }: Props) => {
  const [itemName, setItemName] = useState("test");
  const [blockNum, setBlockNum] = useState(7);
  const [blockArray, setBlockArray] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [testValues, setTestValues] = useState({
    stronglyDisagree: blockArray[0],
    disagree: blockArray[1],
    somewhatDisagree: blockArray[2],
    neutral: blockArray[3],
    somewhatAgree: blockArray[4],
    agree: blockArray[5],
    stronglyAgree: blockArray[6],
  });

  useEffect(() => {
    // setTestValues({
    //   stronglyDisagree: blockArray[0],
    //   disagree: blockArray[1],
    //   somewhatDisagree: blockArray[2],
    //   neutral: blockArray[3],
    //   somewhatAgree: blockArray[4],
    //   agree: blockArray[5],
    //   stronglyAgree: blockArray[6],
    // });

    // labels code still to be added
    const newItem: Item = {
      title: itemName,
      labels: ["1"],
      values: blockArray,
    };
    updateItems(newItem, id);
  }, [blockArray]);

  const updateBlockValue = useCallback((value, num) => {
    // to add validation of value

    // to add validation of total sum

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
          inputName="Item 1"
          itemName={itemName}
          callback={setItemTitle}
        />
        <BlockInput
          inputName="Strongly Disagree"
          itemIndex={1}
          callback={updateBlockValue}
        />
        <BlockInput
          inputName="Disagree"
          itemIndex={2}
          callback={updateBlockValue}
        />
        <BlockInput
          inputName="Somewhat Disagree"
          itemIndex={3}
          callback={updateBlockValue}
        />
        <BlockInput
          inputName="Neither Agree Nor Disagree"
          itemIndex={4}
          callback={updateBlockValue}
        />
        <BlockInput
          inputName="Somewhat Agree"
          itemIndex={5}
          callback={updateBlockValue}
        />
        <BlockInput
          inputName="Agree"
          itemIndex={6}
          callback={updateBlockValue}
        />
        <BlockInput
          inputName="Strongly Agree"
          itemIndex={7}
          callback={updateBlockValue}
        />
      </div>
    </section>
  );
};

export default ItemInput;
