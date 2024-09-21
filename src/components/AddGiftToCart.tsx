import { useItems } from '../context/ItensContext'
import { Button } from './Button'

export type Gifts = {
  name: string
  value: number
  pathImg: string
  quantity: number
}

export function AddGiftToCard(props: Gifts) {
  const { addToCart } = useItems()

  function handleAddProductToCart() {
    addToCart(props)
  }

  return (
    <Button
      variant="primary"
      className="w-40 h-12 rounded-lg  mt-2 ease-in-out  text-center items-center p-2 font-medium"
      onClick={handleAddProductToCart}
    >
      Presentear
    </Button>
  )
}
