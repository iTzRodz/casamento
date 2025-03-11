import { useEffect, useState } from 'react'
import { Button } from '../Button'
import { CloseIcon } from '../icons/CloseIcon'
import { ListItensSelected } from '../ListItensSelected'
import { useItems } from '../../context/ItensContext'
import { OrderSummary } from './OrderSummary'

interface ConfirmationPaymentProps {
  handleCloseModal: () => void
}
export function Cart({ handleCloseModal }: ConfirmationPaymentProps) {
  const { giftsList } = useItems()
  const [showOrderSummary, setShowOrderSummary] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    if (giftsList.length === 0) {
      handleCloseModal()
    }
  }, [giftsList, handleCloseModal])

  function handleCloseModalOrderSummary() {
    setShowOrderSummary(prevState => !prevState)
  }

  return (
    <section className="z-50  h-screen w-full overflow-auto fixed left-0 top-0 flex items-center justify-center px-2">
      <form className="w-[768px] rounded-xl m-auto border-[#515E6C8C] bg-[#1D212A] shadow-md">
        {!showOrderSummary ? (
          <div className="flex w-full flex-col justify-start px-8 py-4 border border-transparent rounded-lg shadow">
            <span
              className="flex justify-end cursor-pointer hover:opacity-80"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </span>

            <h1 className="font-semibold text-white text-4xl mobile:text-5xl mt-4">
              Lista de presentes
            </h1>
            <ListItensSelected />
            <div className="flex flex-col mobile:flex-row justify-center items-center gap-5 mt-10">
              <Button
                variant="primary"
                className="w-full"
                onClick={handleCloseModal}
                type="button"
              >
                Adicionar mais itens
              </Button>
              <Button
                variant="primary"
                className={`w-full bg-white text-black ${showOrderSummary && 'hidden'}`}
                arrowIcon
                type="button"
                onClick={() => setShowOrderSummary(true)}
              >
                Continuar compra
              </Button>
            </div>
          </div>
        ) : (
          <OrderSummary
            handleCloseModalOrderSummary={handleCloseModalOrderSummary}
          />
        )}
      </form>
    </section>
  )
}
