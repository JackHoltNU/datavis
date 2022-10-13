const KeyItem = (props) => {
  return (
    <div className="key__item">
      <div
        className={`key__item-colour likert__block--${props.category}`}
      ></div>
      <span className="key__item-name">{props.name}</span>
    </div>
  );
};

export default KeyItem;
