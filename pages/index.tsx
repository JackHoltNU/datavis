import ChartCard from "../components/chartCard";
import Likert from "../components/likert";
import Key from "../components/key";
import { useCallback, useEffect, useRef, useState } from "react";
import BlockInput from "../components/blockInput";
import ItemInput from "../components/itemInput";
import { Item, LikertKey } from "../components/types/types";
import { v4 as uuidv4 } from "uuid";
import KeyInput from "../components/keyInput";

export default function Home() {
  const [items, setItems] = useState<Item[]>([
    {
      title: "Example",
      id: uuidv4(),
      blockpairs: [
        {
          label: "Strongly Disagree",
          value: 15,
          colour: "#b71c1c",
          id: uuidv4(),
        },
        {
          label: "Disagree",
          value: 15,
          colour: "#d32f2f",
          id: uuidv4(),
        },
        {
          label: "Somewhat Disagree",
          value: 15,
          colour: "#f44336",
          id: uuidv4(),
        },
        {
          label: "Neutral",
          value: 10,
          colour: "#525252",
          id: uuidv4(),
        },
        {
          label: "Somewhat Agree",
          value: 15,
          colour: "#3f51b5",
          id: uuidv4(),
        },
        {
          label: "Agree",
          value: 15,
          colour: "#303f9f",
          id: uuidv4(),
        },
        {
          label: "Strongly Agree",
          value: 15,
          colour: "#1a237c",
          id: uuidv4(),
        },
      ],
    },
  ]);
  const [key, setKey] = useState<LikertKey>({
    keyItems: [
      {
        name: "Strongly Disagree",
        colour: "#b71c1c",
        id: uuidv4(),
      },
      {
        name: "Disagree",
        colour: "#d32f2f",
        id: uuidv4(),
      },
      {
        name: "Somewhat Disagree",
        colour: "#f44336",
        id: uuidv4(),
      },
      {
        name: "Neutral",
        colour: "#525252",
        id: uuidv4(),
      },
      {
        name: "Somewhat Agree",
        colour: "#3f51b5",
        id: uuidv4(),
      },
      {
        name: "Agree",
        colour: "#303f9f",
        id: uuidv4(),
      },
      {
        name: "Strongly Agree",
        colour: "#1a237c",
        id: uuidv4(),
      },
    ],
  });
  const [likerts, setLikerts] = useState<JSX.Element[]>([]);
  const [chartTitle, setChartTitle] = useState("My Likert Chart");

  const updateItems = useCallback(
    (item: Item, id: number) => {
      const tempArray = [...items];
      // if (item.id === undefined) {
      //   item.id = uuidv4();
      // } else {
      // }
      tempArray[id] = item;
      setItems([...tempArray]);
    },
    [items]
  );

  const updateKey = useCallback((newKey: LikertKey) => {
    setKey(newKey);
  }, []);

  useEffect(() => {
    const tempArray = items.map((item) => {
      if (item) {
        return <Likert item={item} key={item.id} />;
      }
    });

    setLikerts([...tempArray]);
  }, [items]);

  return (
    <main className="main">
      <section className="sidebar">
        <div className="chartSetup">
          <h1>Chart Setup</h1>
          <label>Chart Title</label>
          <input
            type="text"
            className="chartSetupTitle"
            value={chartTitle}
            onChange={(e) => {
              setChartTitle(e.target.value);
            }}
          />
        </div>
        <KeyInput likertKey={key} updateKey={updateKey} />
        <h2>Likert Items</h2>
        <button className="btn">Add item</button>
        {key.keyItems &&
          items.map((item, index) => {
            return (
              <ItemInput
                updateItems={updateItems}
                id={index}
                item={item}
                likertKey={key}
                key={index}
              />
            );
          })}
      </section>
      <section className="chartArea">
        <ChartCard>
          <h1>{chartTitle}</h1>
          {items[0] && <Key likertKey={key} />}
          <h2>Subtitle to go here</h2>
          {likerts.map((likert) => {
            return likert;
          })}
        </ChartCard>
      </section>
    </main>
  );
}
