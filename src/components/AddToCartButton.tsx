"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Check, Divide } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/payload-types";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddedToCart(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [addedToCart]);
  return (
    <Button
      onClick={() => {
        addItem(product);
        setAddedToCart(true);
      }}
      size="lg"
      className="w-full"
    >
      {addedToCart ? (
        <div className="flex items-center gap-2">
          <span>Added to cart!</span>{" "}
          <Check className="h-5 w-5 flex-shrink-0" />
        </div>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
};

export default AddToCartButton;
