import { useItems } from "../context/ItensContext";
import { Button } from "./Button";

export type Gifts = {
  name: string;
  value: number;
  pathImg: string;
  quantity: number;
};

export function AddGiftToCard(props: Gifts) {
  const { addToCart } = useItems();

  function handleAddProductToCart() {
    addToCart(props);
  }

  return (
    <Button
      variant="primary"
      className="mt-2 h-12 w-40  items-center rounded-lg  p-2 text-center font-medium ease-in-out"
      onClick={handleAddProductToCart}
    >
      Presentear
    </Button>
  );
}
