import KeyItem from "./keyItem";
import { BlockPair } from "./types/types";

interface Props {
  blockpairs: BlockPair[];
}

const Key = ({ blockpairs }: Props) => {
  return (
    <div className="key">
      {blockpairs.map((pair, index) => {
        return <KeyItem name={pair.label} colour={pair.colour} key={index} />;
      })}
    </div>
  );
};

export default Key;
