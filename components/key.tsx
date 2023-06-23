import KeyItemView from "./keyItemView";
import { LikertKey } from "./types/types";

interface Props {
  likertKey: LikertKey;
}

const Key = ({ likertKey }: Props) => {
  return (
    <div className="key">
      {likertKey.keyItems.map((keyItem) => {
        return <KeyItemView keyItem={keyItem} fontSize={likertKey.fontSize} />;
      })}
    </div>
  );
};

export default Key;
