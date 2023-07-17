import { useState } from "react";
import { DragData, Item, Subtitle } from "./types/types";

interface Props {
  position: number;
  reorderItems: (
    item: Item | Subtitle,
    oldPosition: number,
    newPosition: number
  ) => void;
}

const DropZone = ({ position, reorderItems }: Props) => {
  const [showDropArea, setShowDropArea] = useState(false);

  const dropReady = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowDropArea(true);
  };

  const dropCancelled = () => {
    setShowDropArea(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const dragDataRaw = event.dataTransfer.getData("text/plain");
    const dragData: DragData = JSON.parse(dragDataRaw);

    const oldPosition = dragData.position;
    let newPosition = position;

    if (newPosition > oldPosition) {
      newPosition -= 1;
    }

    if (oldPosition != newPosition) {
      reorderItems(dragData.item, oldPosition, newPosition);
    }

    setShowDropArea(false);
  };

  return (
    <div
      className={
        showDropArea
          ? "data__dropzone data__dropzone--active"
          : "data__dropzone"
      }
      onDragOver={(event) => dropReady(event)}
      onDragLeave={() => dropCancelled()}
      onDrop={(event) => onDrop(event)}
    ></div>
  );
};

export default DropZone;
