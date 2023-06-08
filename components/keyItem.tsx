interface Props {
  name: string;
  colour: string;
}

const KeyItem = ({ name, colour }: Props) => {
  return (
    <div className="key__item">
      <div
        className={"key__item-colour"}
        style={{ backgroundColor: colour }}
      ></div>
      <span className="key__item-name">{name}</span>
    </div>
  );
};

export default KeyItem;
