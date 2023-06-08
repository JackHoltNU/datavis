import { useEffect, useState } from "react";
import LikertBlock from "./LikertBlock";
import { Item } from "./types/types";

interface Props {
  item: Item;
}

const Likert = ({ item }: Props) => {
  // for now, assuming 7 point scale

  // TODO rewrite to calculate based on num of points
  const leftNegativeSpace =
    100 -
    +item.blockpairs[3].value / 2 -
    (+item.blockpairs[0].value +
      +item.blockpairs[1].value +
      +item.blockpairs[2].value);

  return (
    <div className="likert">
      <div className="likert__centreline"></div>
      <div className="likert__bar">
        <label className="likert__label">{item.title}</label>
        <div className="likert__outer">
          <div className="likert__inner">
            <LikertBlock
              label={null}
              width={leftNegativeSpace}
              empty={true}
              colour="#000"
            />
            {item.blockpairs.map((blockpair) => {
              const id = blockpair.id;
              const value = blockpair.value as number;
              return (
                <LikertBlock
                  key={id}
                  label={Math.round(value)}
                  width={value}
                  colour={blockpair.colour}
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
