import ChartCard from "../components/chartCard";
import Likert from "../components/likert";
import Key from "../components/key";
import { useEffect, useState } from "react";

export default function Home() {
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
    setTestValues({
      stronglyDisagree: blockArray[0],
      disagree: blockArray[1],
      somewhatDisagree: blockArray[2],
      neutral: blockArray[3],
      somewhatAgree: blockArray[4],
      agree: blockArray[5],
      stronglyAgree: blockArray[6],
    });
  }, [blockArray]);

  const updateBlockValue = (num, value) => {
    // to add validation of value

    // to add validation of total sum

    const tempArray = blockArray;
    tempArray[num - 1] = value;
    setBlockArray([...tempArray]);
  };

  return (
    <main className="main">
      <section className="data__input-section">
        <h1> Test</h1>
        <div className="data__input--item">
          <label className="data__input--label">Item 1</label>
          <input
            className="data__input--block"
            type="text"
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <label className="data__input--label">Strongly disagree</label>
          <input
            className="data__input--block"
            type="text"
            onChange={(e) => updateBlockValue(1, e.target.value)}
          />
          <label className="data__input--label">Disagree</label>
          <input
            className="data__input--block"
            type="text"
            onChange={(e) => updateBlockValue(2, e.target.value)}
          />
          <label className="data__input--label">Somewhat disagree</label>
          <input
            className="data__input--block"
            type="text"
            onChange={(e) => updateBlockValue(3, e.target.value)}
          />
          <label className="data__input--label">
            Neither agree nor disagree
          </label>
          <input
            className="data__input--block"
            type="text"
            onChange={(e) => updateBlockValue(4, e.target.value)}
          />
          <label className="data__input--label">Somewhat agree</label>
          <input
            className="data__input--block"
            type="text"
            onChange={(e) => updateBlockValue(5, e.target.value)}
          />
          <label className="data__input--label">Agree </label>
          <input
            className="data__input--block"
            type="text"
            onChange={(e) => updateBlockValue(6, e.target.value)}
          />
          <label className="data__input--label">Strongly agree</label>
          <input
            className="data__input--block"
            type="text"
            onChange={(e) => updateBlockValue(7, e.target.value)}
          />
        </div>
      </section>
      <ChartCard>
        <h1>Title to go here</h1>
        <Key />
        <h2>Subtitle to go here</h2>
        <Likert blockValues={testValues} label={itemName} />
      </ChartCard>
    </main>
  );
}
