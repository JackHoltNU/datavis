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
      <ItemInput updateItems={updateItems} id={0} />

      <ChartCard>
        <h1>Title to go here</h1>
        <Key />
        <h2>Subtitle to go here</h2>
        {likerts.map((likert) => {
          return likert;
        })}
      </ChartCard>
    </main>
  );
}
