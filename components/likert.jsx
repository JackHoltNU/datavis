import { useState } from "react";
import LikertBlock from "./LikertBlock";

const Likert = (props) => {
  const [blockValues, setBlockValues] = useState({
    stronglyDisagree: props.blockValues.stronglyDisagree,
    disagree: props.blockValues.disagree,
    somewhatDisagree: props.blockValues.somewhatDisagree,
    neutral: props.blockValues.neutral,
    somewhatAgree: props.blockValues.somewhatAgree,
    agree: props.blockValues.agree,
    stronglyAgree: props.blockValues.stronglyAgree,
  });

  const leftNegativeSpace =
    100 -
    blockValues.neutral / 2 -
    (blockValues.stronglyDisagree +
      blockValues.disagree +
      blockValues.somewhatDisagree);

  return (
    <div className="likert">
      <div className="likert__centreline"></div>
      <div className="likert__bar">
        <label className="likert__label">{props.label}</label>
        <div className="likert__outer">
          <div className="likert__inner">
            <LikertBlock
              width={leftNegativeSpace}
              className="likert__block--negative-space"
            />
            <LikertBlock
              label={Math.round(blockValues.stronglyDisagree)}
              width={blockValues.stronglyDisagree}
              className="likert__block--strongly-disagree"
            />
            <LikertBlock
              label={Math.round(blockValues.disagree)}
              width={blockValues.disagree}
              className="likert__block--disagree"
            />
            <LikertBlock
              label={Math.round(blockValues.somewhatDisagree)}
              width={blockValues.somewhatDisagree}
              className="likert__block--somewhat-disagree"
            />
            <LikertBlock
              label={Math.round(blockValues.neutral)}
              width={blockValues.neutral}
              className="likert__block--neutral"
            />
            <LikertBlock
              label={Math.round(blockValues.somewhatAgree)}
              width={blockValues.somewhatAgree}
              className="likert__block--somewhat-agree"
            />
            <LikertBlock
              label={Math.round(blockValues.agree)}
              width={blockValues.agree}
              className="likert__block--agree"
            />
            <LikertBlock
              label={Math.round(blockValues.stronglyAgree)}
              width={blockValues.stronglyAgree}
              className="likert__block--strongly-agree"
            />
          </div>
        </div>
      </div>

      <div className="likert__centreline"></div>
    </div>
  );
};

export default Likert;
