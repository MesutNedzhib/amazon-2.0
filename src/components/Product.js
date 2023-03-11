import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ product }) {
  // const [rating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING - 1)) + MIN_RATING
  // );

  // Rating from API
  const [rating] = useState(Math.floor(product.rating.rate));

  // Math random give values from 0 to 1 0.1, 0.7, 0.5...
  const [hasPrime] = useState(Math.floor(Math.random() < 0.2));

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic color-gray-400">
        Category
      </p>

      <Image src={product.image} width={200} height={200} objectFit="contain" />

      <h4 className="my-3">{product.title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-sm my-2 line-clamp-2">{product.description}</p>

      <div className="mb-5">
        <Currency quantity={product.price} currency="EUR" />
      </div>

      {hasPrime > 0 && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            loading="lazy"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
