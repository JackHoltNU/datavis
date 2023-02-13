const LikertBlock = (props) => {
  const adjustedWidth = `${props.width / 2}%`;
  let label = "";
  if (props.label > 1) {
    label = props.label;
  }
  if (props.label > 5) {
    label += "%";
  }

  let centreLine;
  if (props.neutral) {
    centreLine = <div className="likert__centreLine"></div>;
  }

  return (
    <div
      className={`likert__block ${props.className}`}
      style={{ width: adjustedWidth }}
    >
      {label}
    </div>
  );
};

export default LikertBlock;
