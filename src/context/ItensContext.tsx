/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, ReactNode, useContext, useState } from 'react'

interface Gifts {
  name: string
  value: number
  pathImg: string
  quantity: number
}

interface GiftContextType {
  giftsList: Gifts[]
  addToCart: (data: Gifts) => void
  removeGift: (data: string) => void
}

const GiftsContext = createContext({} as GiftContextType)

export function GiftProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Gifts[]>([])

  function addToCart(data: Gifts) {
    setItems((state) => {
      const giftInCart = state.some((item) => item.name === data.name)

      if (giftInCart) {
        return state.map((item) => {
          if (item.name === data.name) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, data]
      }
    })
  }

  function removeGift(giftName: string) {
    // @ts-expect-error
    setItems((state) => {
      return state
        .map((gift) => {
          if (gift.name === giftName) {
            if (gift.quantity > 1) {
              return { ...gift, quantity: gift.quantity - 1 }
            } else {
              return null
            }
          }
          return gift
        })
        .filter(Boolean)
    })
  }

  return (
    <GiftsContext.Provider value={{ giftsList: items, addToCart, removeGift }}>
      {children}
    </GiftsContext.Provider>
  )
}

export const useItems = () => useContext(GiftsContext)
