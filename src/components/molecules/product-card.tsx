import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { addToCart } from "@/stores/cart-slices";
import { AppDispatch } from "@/stores/store";

interface ProductCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    thumbnail: string;
  };
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};

const formatDiscountPercentage = (discountPercentage: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
  }).format(discountPercentage / 100);
};

const calculateDiscountedPrice = (
  price: number,
  discountPercentage: number,
) => {
  return price * (1 - discountPercentage / 100);
};

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />,
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative h-4 w-4">
          <Star className="absolute h-4 w-4 text-gray-300" />
          <div className="w-1/2 overflow-hidden">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      );
    } else {
      stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
    }
  }
  return stars;
};

function ProductCard({ data }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.title,
        price: data.price,
        thumbnail: data.thumbnail,
        quantity: 1,
      }),
    );
  };
  return (
    <Card className="w-full max-w-sm overflow-hidden py-0 transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative min-h-52">
          <Image
            src={data.thumbnail}
            alt={data.title}
            fill
            className="object-contain"
          />
          {data.discountPercentage > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              -{formatDiscountPercentage(data.discountPercentage)}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          <h3 className="line-clamp-2 text-lg leading-tight font-semibold">
            {data.title}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center">{renderStars(data.rating)}</div>
            <span className="text-sm font-medium">{data.rating}</span>
          </div>

          <p className="text-muted-foreground line-clamp-3 text-sm">
            {data.description}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-primary text-xl font-bold">
              {formatPrice(
                calculateDiscountedPrice(data.price, data.discountPercentage),
              )}
            </span>
            {data.discountPercentage > 0 && (
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(data.price)}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
