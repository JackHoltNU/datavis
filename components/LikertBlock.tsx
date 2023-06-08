import Color from "color";

interface Props {
  colour: string;
  label: number | null;
  width: number;
  empty?: boolean;
}

const LikertBlock = ({ colour, label, width, empty }: Props) => {
  const adjustedWidth = `${width / 2}%`;
  let labelstring = "";
  if (label > 1) {
    labelstring = label.toString();
  }
  if (label > 5) {
    labelstring += "%";
  }
  const colourObj = Color(colour);
  const fontColour = colourObj.isLight() ? "black" : "white";

  return (
    <>
      {empty ? (
        <div
          className="likert__block--negative-space"
          style={{
            width: adjustedWidth,
          }}
        >
          {" "}
        </div>
      ) : (
        <div
          className="likert__block"
          style={{
            width: adjustedWidth,
            backgroundColor: colour,
            color: fontColour,
          }}
        >
          {labelstring}
        </div>
      )}
    </>
  );
};

export default LikertBlock;
