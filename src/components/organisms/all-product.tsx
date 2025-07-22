"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setProducts } from "@/stores/product-slices";
import { AppDispatch, RootState } from "@/stores/store";

import ProductCard from "../molecules/product-card";

export function AllProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.list);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const data = await response.json();
        dispatch(setProducts(data.products));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  console.log(products);

  if (products.length === 0 || !products) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
