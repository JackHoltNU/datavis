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
    +item.values[3] / 2 -
    (+item.values[0] + +item.values[1] + +item.values[2]);

  return (
    <div className="likert">
      <div className="likert__centreline"></div>
      <div className="likert__bar">
        <label className="likert__label">{item.title}</label>
        <div className="likert__outer">
          <div className="likert__inner">
            <LikertBlock
              width={leftNegativeSpace}
              className="likert__block--negative-space"
            />
            {item.values.map((value) => {
              return (
                <LikertBlock
                  label={Math.round(value)}
                  width={value}
                  className="likert__block--strongly-disagree"
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
