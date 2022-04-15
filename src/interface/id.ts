export interface ReustarantType {
  id: string;
  name: string;
  type: string;
  time: string;
  menu: []
}

export interface ReustarantTypeProps {
  reustarants: [ReustarantType];
}
