import KeyItem from "./keyItem";
import { BlockPair, LikertKey } from "./types/types";

interface Props {
  likertKey: LikertKey;
}

const Key = ({ likertKey }: Props) => {
  return (
    <div className="key">
      {likertKey.keyItems.map((keyItem) => {
        return (
          <KeyItem
            name={keyItem.name}
            colour={keyItem.colour}
            key={keyItem.id}
          />
        );
      })}
    </div>
  );
};

export default Key;
