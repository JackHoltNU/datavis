type Item = {
  id: string;
  title: string;
  blocks: Block[];
  collapsedInput: boolean;
};

type DragData = {
  item: Item;
  position: number;
};

type LikertKey = {
  keyItems: KeyItem[];
  fontSize: number;
};

type KeyItem = {
  id: number;
  name: string;
  colour: string;
};

type Block = {
  id?: string;
  value: string | number;
};

type ChartCard = {
  title: string;
  titleFontSize: number;
  subtitle: string;
  items: Item[];
  likertKey: LikertKey;
  likerts: JSX.Element[];
};

export type { Item, DragData, LikertKey, KeyItem, Block, ChartCard };
