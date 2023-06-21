type Item = {
  id: string;
  title: string;
  blocks: Block[];
};

type LikertKey = {
  keyItems: KeyItem[];
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

export type { Item, LikertKey, KeyItem, Block };
