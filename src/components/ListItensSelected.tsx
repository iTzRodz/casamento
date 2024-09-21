import { useItems } from '../context/ItensContext'
import { ArrowLeftIcon } from './icons/ArrowLeftIcon'
import { ArrowRightIcon } from './icons/ArrowRightIcon'
import { Gifts } from './AddGiftToCart'

export function ListItensSelected() {
  const { giftsList, removeGift, addToCart } = useItems()
  function totalQuantityGifts() {
    const total = giftsList.reduce((acc, gift) => {
      return acc + gift.value * gift.quantity
    }, 0)

    return total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function handleRemoveItem(giftName: string) {
    removeGift(giftName)
  }

  function handleAddGift(gift: Gifts) {
    addToCart(gift)
  }
  return (
    <>
      <h3 className="text-start text-black font-semibold text-xl mobile:text-2xl mt-6">
        Meu carrinho
      </h3>
      <div className="flex text-black/80 font-medium text-base w-full justify-between flex-col">
        <div className="mt-2 h-px w-full bg-black/30" />
        <div className="mobile:max-h-[500px] max-h-[400px] overflow-y-auto modal-content">
          {giftsList?.map((gift, index) => (
            <div key={index} className=" flex flex-col  gap-2 mt-5 w-full pr-2">
              <div className="flex gap-10 justify-start items-start">
                <img
                  src={gift.pathImg}
                  alt=""
                  srcSet=""
                  height={100}
                  width={100}
                  className="rounded-lg max-w-28 max-h-28"
                />
                <div className="flex flex-col items-start  text-sm  mobile:text-base gap-4">
                  <p className="text-start font-semibold text-black leading-4 text-base">
                    {gift.name}
                  </p>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center text-sm gap-2 ">
                      <div className="flex items-end gap-1">
                        <span
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(gift.name)}
                        >
                          <ArrowLeftIcon
                            className={`size-4 ${gift.quantity === 1 ? 'cursor-not-allowed' : ''}`}
                            disabled={gift.quantity === 1}
                          />
                        </span>
                        <p className="text-black font-bold">{gift.quantity}</p>
                        <span
                          className="cursor-pointer"
                          onClick={() => handleAddGift(gift)}
                        >
                          <ArrowRightIcon className="size-4" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium  text-black">
                        Total:{' '}
                        {(gift.value * gift.quantity).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-black/30" />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-auto text-black mt-4">
        <span className="font-semibold text-lg">Total</span>{' '}
        <span className="font-medium">{totalQuantityGifts()}</span>
      </div>
    </>
  )
}
