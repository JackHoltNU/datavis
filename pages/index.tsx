import ChartCard from "../components/chartCard";
import Likert from "../components/likert";
import { useCallback, useEffect, useRef, useState } from "react";
import ItemInput from "../components/itemInput";
import type {
  Item,
  LikertKey,
  ChartCard as Chart,
  Subtitle,
} from "../components/types/types";
import { v4 as uuidv4 } from "uuid";
import KeyInput from "../components/keyInput";
import DropZone from "../components/dropZone";
import SubtitleInput from "../components/subtitleInput";

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

const isItem = (obj: any): obj is Item => obj && obj.blocks;

export default function Home() {
  const [items, setItems] = useState<Array<Item | Subtitle>>([
    {
      title: "Example",
      id: uuidv4(),
      blocks: defaultItemBlocks.slice(),
      collapsedInput: false,
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
    (item: Item | Subtitle, position: number) => {
      const tempArray = [...items];
      tempArray[position] = item;
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
      blocks: defaultItemBlocks.slice(),
      collapsedInput: false,
    });
    setItems([...tempItems]);
  }, [items]);

  const addNewSubtitle = useCallback(() => {
    const tempItems = items;
    tempItems.push({
      id: uuidv4(),
      title: "New Subtitle",
      collapsedInput: false,
    });
    setItems([...tempItems]);
  }, [items]);

  const reorderItems = useCallback(
    (item: Item | Subtitle, oldPosition: number, newPosition: number) => {
      const tempItems = items;
      tempItems.splice(oldPosition, 1);
      tempItems.splice(newPosition, 0, item);
      setItems([...tempItems]);
    },
    [items]
  );

  const deleteItem = useCallback(
    (position: number) => {
      const tempItems = items;
      tempItems.splice(position, 1);
      setItems([...tempItems]);
    },
    [items]
  );

  useEffect(() => {
    const tempArray = items.map((item) => {
      if (item) {
        if (isItem(item)) {
          return <Likert likertKey={key} item={item} key={item.id} />;
        } else {
          return <h2 key={item.id}>{item.title}</h2>;
        }
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

        <h2>Contents</h2>
        <div className="addButtons">
          <button className="btn data__btn--blue" onClick={addNewItem}>
            Add item
          </button>
          <button className="btn data__btn--green" onClick={addNewSubtitle}>
            Add subtitle
          </button>
        </div>

        <DropZone position={0} reorderItems={reorderItems} key={0} />
        {key.keyItems &&
          items.map((item, index) => {
            return (
              <>
                {isItem(item) ? (
                  <ItemInput
                    updateItems={updateItems}
                    deleteItem={deleteItem}
                    item={item}
                    likertKey={key}
                    key={item.id}
                    position={index}
                  />
                ) : (
                  <SubtitleInput
                    updateItems={updateItems}
                    deleteItem={deleteItem}
                    subtitle={item}
                    key={item.id}
                    position={index}
                  />
                )}
                <DropZone
                  position={index + 1}
                  reorderItems={reorderItems}
                  key={index + 1}
                />
              </>
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
