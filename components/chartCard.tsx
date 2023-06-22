import React, { useRef } from "react";
import { Item, LikertKey, ChartCard } from "./types/types";
import Key from "./key";

const ComponentToPrint = React.forwardRef<HTMLInputElement, ChartCard>(
  ({ title, subtitle, items, likertKey, likerts }: ChartCard, ref) => (
    <div ref={ref} className="chartcard__inner">
      <h1>{title}</h1>
      {items[0] && <Key likertKey={likertKey} />}
      <h2>Subtitle to go here</h2>
      {likerts.map((likert) => {
        return likert;
      })}
    </div>
  )
);
ComponentToPrint.displayName = "ComponentToPrint";

const ChartCard = ({
  title,
  subtitle,
  items,
  likertKey,
  likerts,
}: ChartCard) => {
  const componentRef = useRef();

  return (
    <div className="chartcard__outer">
      <div className="chartcard__btn--container">
        <button
          className="chartcard__btn"
          onClick={async () => {
            const { exportComponentAsPNG } = await import(
              "react-component-export-image"
            );
            exportComponentAsPNG(componentRef);
          }}
        >
          Export As PNG
        </button>
        <button
          className="chartcard__btn"
          onClick={async () => {
            const { exportComponentAsJPEG } = await import(
              "react-component-export-image"
            );
            exportComponentAsJPEG(componentRef);
          }}
        >
          Export As JPEG
        </button>
      </div>

      <ComponentToPrint
        ref={componentRef}
        title={title}
        subtitle={subtitle}
        items={items}
        likertKey={likertKey}
        likerts={likerts}
      />
    </div>
  );
};

export default ChartCard;
