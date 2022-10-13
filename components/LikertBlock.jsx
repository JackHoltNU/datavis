const LikertBlock = (props) => {
  const adjustedWidth = `${props.width / 2}%`;

  let centreLine;
  if (props.neutral) {
    centreLine = <div className="likert__centreLine"></div>;
  }

  return (
    <div
      className={`likert__block ${props.className}`}
      style={{ width: adjustedWidth }}
    >
      {props.label > 1 ? props.label : ""}
    </div>
  );
};

export default LikertBlock;
