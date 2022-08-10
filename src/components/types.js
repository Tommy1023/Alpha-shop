export type Product = {
  id: Number,
  name: String,
  img: String,
  price: Number,
  quantity: Number,
};

export type Transport = {
  id: String,
  trans: String,
  price: Number,
  workDay: String,
};

export type State = {
  lineItems: LineItems[],
  totalAmount: Number,
  transport: Object,
};
