import { Asset } from "contentful";

export type productsType = {
  products: {
    description: string;
    discount?: number | undefined;
    id: string;
    images: Asset[];
    price: number;
    quantity: number;
    summary?: string | undefined;
    unit: string;
    category?: string[] | undefined;
  }[];
};
