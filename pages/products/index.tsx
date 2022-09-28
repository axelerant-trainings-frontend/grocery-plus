import Image from "next/image";
import React from "react";

import contentfulClient from "../../utils/contentfulClient";
import { productsType } from "../../@types/product.types";

const Products = ({ products }: productsType) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="py-6 text5xl text-center">Products Page</h1>
      {products &&
        products.map((product) => {
          return (
            <article key={product.id}>
              <h3 className="text-2xl">{product.description}</h3>
              <Image
                alt="Grocery Product"
                src={`http:${product.images[0].fields.file.url}`}
                width={200}
                height={200}
              />
              <h6 className="text-2xl">{`Price: ${product.price}`}</h6>
              <h6 className="text-2xl">{`Quantity: ${
                product.quantity + product.unit
              }`}</h6>
              <p className="text-2xl">Product summary: {product.summary}</p>
            </article>
          );
        })}
    </div>
  );
};

export async function getStaticProps() {
  const { getProducts } = contentfulClient();
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}

export default Products;
