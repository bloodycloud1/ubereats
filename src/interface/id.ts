interface Menu {
  name: string;
}

export interface ReustarantType {
  id: string;
  name: string;
  type: string;
  time: string;
  menu: Array<Menu>;
}

export interface ReustarantTypeProps {
  reustarants: [ReustarantType];
}
