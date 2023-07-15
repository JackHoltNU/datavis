import { useState } from "react";
import { DragData, Item } from "./types/types";

interface Props {
  position: number;
  reorderItems: (item: Item, oldPosition: number, newPosition: number) => void;
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

    reorderItems(dragData.item, dragData.position, position);

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
