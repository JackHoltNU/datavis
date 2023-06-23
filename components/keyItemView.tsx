import { KeyItem } from "./types/types";

interface Props {
  keyItem: KeyItem;
  fontSize: number;
}

const KeyItemView = ({ keyItem, fontSize }: Props) => {
  return (
    <div className="key__item">
      <div
        className={"key__item-colour"}
        style={{ backgroundColor: keyItem.colour }}
      ></div>
      <span className="key__item-name" style={{ fontSize: fontSize }}>
        {keyItem.name}
      </span>
    </div>
  );
};

export default KeyItemView;
