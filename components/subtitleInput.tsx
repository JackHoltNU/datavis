import { useCallback, useEffect, useState } from "react";
import { DragData, Item, Subtitle } from "./types/types";
import {
  faGrip,
  faAngleRight,
  faAngleDown,
  faTrashCan,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  subtitle: Subtitle;
  updateItems: (item: Item | Subtitle, id: number) => void;
  deleteItem: (position: number) => void;
  position: number;
}

const SubtitleInput = ({
  subtitle,
  updateItems,
  deleteItem,
  position,
}: Props) => {
  const [itemName, setItemName] = useState(subtitle.title);
  const [collapseIcon, setCollapseIcon] = useState<IconDefinition>(
    subtitle.collapsedInput ? faAngleRight : faAngleDown
  );
  const [collapsed, setCollapsed] = useState(subtitle.collapsedInput);
  const [grabbed, setGrabbed] = useState(false);

  useEffect(() => {
    // labels code still to be added
    const newSubtitle: Subtitle = {
      title: itemName,
      id: subtitle.id,
      collapsedInput: collapsed,
    };

    updateItems(newSubtitle, position);
  }, [itemName, subtitle.id, collapsed]);

  const onDrag = (event: React.DragEvent<HTMLElement>) => {
    setGrabbed(true);
    const dragData: DragData = {
      item: subtitle,
      position,
    };
    const dragJson = JSON.stringify(dragData);
    event.dataTransfer.setData("text/plain", dragJson);
  };

  const toggleAngleIcon = () => {
    if (collapseIcon === faAngleDown) {
      setCollapseIcon(faAngleRight);
    } else {
      setCollapseIcon(faAngleDown);
    }
  };

  const setItemTitle = useCallback((title: string) => {
    setItemName(title);
  }, []);

  return (
    <section className="data__section">
      <div
        className={
          grabbed
            ? "data__box data__box--green grabbed"
            : "data__box data__box--green"
        }
      >
        <div
          className="data__header"
          draggable
          onDragStart={(event) => onDrag(event)}
          onDragEnd={() => setGrabbed(false)}
        >
          <div className="data__cornericon">
            <FontAwesomeIcon
              icon={faTrashCan}
              className="data__icon"
              onClick={() => deleteItem(position)}
            />
          </div>
          <h2
            className="data__itemtitle"
            draggable
            onDragStart={(event) => onDrag(event)}
          >
            <FontAwesomeIcon icon={faGrip} className="data__icon" />
            {itemName}
          </h2>
          <div className="data__cornericon">
            <FontAwesomeIcon
              icon={collapseIcon}
              className="data__icon"
              onClick={() => {
                toggleAngleIcon();
                setCollapsed(!collapsed);
              }}
            />
          </div>
        </div>
        {!collapsed && (
          <div className="data__collapsearea">
            <div className="data__titleinput">
              <label className="data__textlabel">Label</label>
              <input
                className="data__textinput"
                type="text"
                value={itemName}
                onChange={(e) => {
                  setItemTitle(e.target.value);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubtitleInput;
