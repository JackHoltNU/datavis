import ChartCard from "../components/chartCard";
import Likert from "../components/likert";
import Key from "../components/key";
import { useCallback, useEffect, useState } from "react";
import BlockInput from "../components/blockInput";
import ItemInput from "../components/itemInput";
import { Item } from "../components/types/types";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [likerts, setLikerts] = useState<JSX.Element[]>([]);
  const [chartTitle, setChartTitle] = useState("My Likert Chart");

  const updateItems = useCallback(
    (item: Item, id: number) => {
      const tempArray = [...items];
      tempArray[id] = item;
      setItems([...tempArray]);
      console.log(tempArray);
    },
    [items]
  );

  useEffect(() => {
    const tempArray = items.map((item) => {
      return <Likert item={item} key={item.title} />;
    });
    console.log("updating likerts");

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
        <h1>Likert Items</h1>
        <button className="btn">Add item</button>
        <ItemInput updateItems={updateItems} id={0} />
        <ItemInput updateItems={updateItems} id={1} />
      </section>
      <section className="chartArea">
        <ChartCard>
          <h1>{chartTitle}</h1>
          {items[0] && <Key blockpairs={items[0].blockpairs} />}
          <h2>Subtitle to go here</h2>
          {likerts.map((likert) => {
            return likert;
          })}
        </ChartCard>
      </section>
    </main>
  );
}
