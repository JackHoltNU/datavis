type Item = {
  title: string;
  blockpairs: BlockPair[];
};

type BlockPair = {
  id?: string;
  label: string;
  value: string | number;
};

export type { Item, BlockPair };
