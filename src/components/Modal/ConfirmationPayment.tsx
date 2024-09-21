import { useEffect } from 'react'
import { Button } from '../Button'
import { CloseIcon } from '../icons/CloseIcon'
import { ListItensSelected } from '../ListItensSelected'
import { useItems } from '../../context/ItensContext'

interface ConfirmationPaymentProps {
  handleCloseModal: () => void
}
export function ConfirmationPayment({
  handleCloseModal,
}: ConfirmationPaymentProps) {
  const { giftsList } = useItems()

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
  return (
    <section className="z-50  h-screen w-full overflow-auto fixed left-0 top-0 flex items-center justify-center px-2">
      <form className="w-[768px] rounded-xl m-auto bg-orange-50 lg:w-[45vw] shadow-md">
        <div className="flex w-full flex-col justify-start px-8 py-4 border border-transparent rounded-lg shadow">
          <span
            className="flex justify-end cursor-pointer "
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </span>

          <h1 className="font-semibold text-black text-4xl mobile:text-5xl mt-4">
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
              className="w-full bg-white text-black"
              arrowIcon={true}
              type="button"
            >
              Continuar compra
            </Button>
          </div>
        </div>
      </form>
    </section>
  )
}
