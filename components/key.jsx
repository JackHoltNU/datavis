import KeyItem from "./keyItem";

const Key = () => {
  return (
    <div className="key">
      <KeyItem name="Strongly Disagree" category="strongly-disagree" />
      <KeyItem name="Disagree" category="disagree" />
      <KeyItem name="Somewhat Disagree" category="somewhat-disagree" />
      <KeyItem name="Neither Agree Nor Disagree" category="neutral" />
      <KeyItem name="Somewhat Agree" category="somewhat-agree" />
      <KeyItem name="Agree" category="agree" />
      <KeyItem name="Strongly Agree" category="strongly-agree" />
    </div>
  );
};

export default Key;
