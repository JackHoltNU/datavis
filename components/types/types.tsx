type Item = {
  id: string;
  title: string;
  blocks: Block[];
  collapsedInput: boolean;
};

type Subtitle = {
  id: string;
  title: string;
  collapsedInput: boolean;
};

type DragData = {
  item: Item | Subtitle;
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
  items: Array<Item | Subtitle>;
  likertKey: LikertKey;
  likerts: JSX.Element[];
};

export type { Item, Subtitle, DragData, LikertKey, KeyItem, Block, ChartCard };
