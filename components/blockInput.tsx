interface Props {
  inputName: string;
  itemName?: string;
  itemIndex?: number;
  callback: (value: string, optional?: number) => void;
}

const BlockInput = ({ inputName, itemName, callback, itemIndex }: Props) => {
  return (
    <div className="data__input--block">
      <label className="data__input--blocklabel">{inputName}</label>
      <input
        className="data__input--blockinput"
        type="text"
        value={itemName}
        onChange={(e) => {
          if (itemIndex) {
            callback(e.target.value, itemIndex);
          } else {
            callback(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default BlockInput;
