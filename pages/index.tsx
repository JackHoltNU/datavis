import ChartCard from "../components/chartCard";
import Likert from "../components/likert";
import Key from "../components/key";
import { useCallback, useEffect, useRef, useState } from "react";
import BlockInput from "../components/blockInput";
import ItemInput from "../components/itemInput";
import type {
  Item,
  LikertKey,
  ChartCard as Chart,
} from "../components/types/types";
import { v4 as uuidv4 } from "uuid";
import KeyInput from "../components/keyInput";

const defaultItemBlocks = [
  {
    value: 15,
    id: uuidv4(),
  },
  {
    value: 15,
    id: uuidv4(),
  },
  {
    value: 15,
    id: uuidv4(),
  },
  {
    value: 10,
    id: uuidv4(),
  },
  {
    value: 15,
    id: uuidv4(),
  },
  {
    value: 15,
    id: uuidv4(),
  },
  {
    value: 15,
    id: uuidv4(),
  },
];

export default function Home() {
  const [items, setItems] = useState<Item[]>([
    {
      title: "Example",
      id: uuidv4(),
      blocks: defaultItemBlocks,
    },
  ]);
  const [key, setKey] = useState<LikertKey>({
    fontSize: 12,
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
  const [chartTitleFontSize, setChartTitleFontSize] = useState(20);

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
    console.log(`Colour test: ${newKey.keyItems[0].colour}`);

    setKey(newKey);
  }, []);

  const addNewItem = useCallback(() => {
    const tempItems = items;
    tempItems.push({
      id: uuidv4(),
      title: `Item ${items.length + 1}`,
      blocks: defaultItemBlocks,
    });
    setItems([...tempItems]);
  }, [items]);

  useEffect(() => {
    const tempArray = items.map((item) => {
      if (item) {
        return <Likert likertKey={key} item={item} key={item.id} />;
      }
    });

    setLikerts([...tempArray]);
  }, [items, key]);

  return (
    <main className="main">
      <section className="sidebar">
        <div className="chartsetup">
          <h1>Chart Setup</h1>
          <div className="chartsetup__pair">
            <label>Chart Title</label>
            <input
              type="text"
              className="chartsetup__title"
              value={chartTitle}
              onChange={(e) => {
                setChartTitle(e.target.value);
              }}
            />
          </div>
          <div className="chartsetup__pair">
            <label>Title Font Size</label>
            <div className="incrementpair">
              <button
                className="incrementpair__btn"
                onClick={() => {
                  setChartTitleFontSize(chartTitleFontSize - 1);
                }}
              >
                -
              </button>
              <p className="chartsetup__fontsize">{chartTitleFontSize}</p>
              <button
                className="incrementpair__btn"
                onClick={() => {
                  setChartTitleFontSize(chartTitleFontSize + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {key.keyItems && <KeyInput likertKey={key} updateKey={updateKey} />}

        <h2>Likert Items</h2>
        <button className="btn" onClick={addNewItem}>
          Add item
        </button>
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
        <ChartCard
          title={chartTitle}
          titleFontSize={chartTitleFontSize}
          subtitle=""
          items={items}
          likertKey={key}
          likerts={likerts}
        />
      </section>
    </main>
  );
}
