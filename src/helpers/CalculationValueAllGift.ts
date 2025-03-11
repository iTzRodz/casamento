import { useItems } from '../context/ItensContext'

export function CalculationValueAllGifts() {
  const { giftsList } = useItems()

  const total = giftsList.reduce((acc, gift) => {
    return acc + gift.value * gift.quantity
  }, 0)

  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
