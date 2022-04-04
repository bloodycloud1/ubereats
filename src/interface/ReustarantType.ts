export interface ReustarantProps {
  id?: string;
  name?: string;
  type?: string;
  time?: string;
}

export interface ReustarantType {
  id: string;
  name: string;
  type: string;
  time: string;
}

export interface ReustarantTypeProps {
  reustarants: [ReustarantType];
}
