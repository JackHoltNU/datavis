import KeyItem from "./keyItem";
import { BlockPair } from "./types/types";

interface Props {
  blockpairs: BlockPair[];
}

const Key = ({ blockpairs }: Props) => {
  return (
    <div className="key">
      {blockpairs.map((pair) => {
        return <KeyItem name={pair.label} colour={pair.colour} />;
      })}
    </div>
  );
};

export default Key;
