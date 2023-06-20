type Item = {
  id: string;
  title: string;
  blockpairs: BlockPair[];
};

type LikertKey = {
  keyItems: KeyItem[];
};

type KeyItem = {
  id: number;
  name: string;
  colour: string;
};

type BlockPair = {
  id?: string;
  label: string;
  value: string | number;
  colour: string;
};

export type { Item, LikertKey, KeyItem, BlockPair };
