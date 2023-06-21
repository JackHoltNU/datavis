import LikertBlock from "./LikertBlock";
import { Item, LikertKey } from "./types/types";

interface Props {
  item: Item;
  likertKey: LikertKey;
}

const Likert = ({ item, likertKey }: Props) => {
  // for now, assuming 7 point scale

  // TODO rewrite to calculate based on num of points
  const leftNegativeSpace =
    100 -
    +item.blocks[3].value / 2 -
    (+item.blocks[0].value + +item.blocks[1].value + +item.blocks[2].value);

  return (
    <div className="likert">
      <div className="likert__centreline"></div>
      <div className="likert__bar">
        <label className="likert__label">{item.title}</label>
        <div className="likert__outer">
          <div className="likert__inner">
            <LikertBlock
              key={`${item.id}_negspace`}
              label={null}
              width={leftNegativeSpace}
              empty={true}
              colour="#000"
            />
            {likertKey &&
              item.blocks.map((blockpair, index) => {
                const id = blockpair.id;
                const value = blockpair.value as number;
                const colour = likertKey.keyItems[index].colour;
                return (
                  <LikertBlock
                    key={id}
                    label={Math.round(value)}
                    width={value}
                    colour={colour}
                  />
                );
              })}
          </div>
        </div>
      </div>

      <div className="likert__centreline"></div>
    </div>
  );
};

export default Likert;
