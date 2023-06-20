type Item = {
  id: string;
  title: string;
  blockpairs: BlockPair[];
};

type BlockPair = {
  id?: string;
  label: string;
  value: string | number;
  colour: string;
};

export type { Item, BlockPair };
