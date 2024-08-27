export type ProductTypes = {
  quantity: number;
  category: string;
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CardProduct = {
    title: string,
    price: number,
    image: string,
}