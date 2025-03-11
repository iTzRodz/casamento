import { useState } from 'react'
import { useItems } from '../../context/ItensContext'
import { CalculationValueAllGifts } from '../../helpers/CalculationValueAllGift'
import { Button } from '../Button'
import { CloseIcon } from '../icons/CloseIcon'
import { MethodPayment } from './MethodPayment'

interface ConfirmationPaymentProps {
  handleCloseModalOrderSummary?: () => void
}

export function OrderSummary({
  handleCloseModalOrderSummary
}: ConfirmationPaymentProps) {
  const { giftsList } = useItems()
  const [showMethodPayment, setShowMethodPayment] = useState<boolean>(true)

  return (
    <div className="flex w-full flex-col justify-start px-8 py-4 border border-transparent rounded-lg shadow">
      <span
        className="flex justify-end cursor-pointer "
        onClick={handleCloseModalOrderSummary}
      >
        <CloseIcon />
      </span>

      <h3 className="font-semibold text-white text-4xl mobile:text-5xl mt-4">
        Resumo da compra
      </h3>

      <div className="mt-4 flex flex-col justify-start text-start space-y-1">
        {giftsList.map((gift, index) => (
          <p className="text-white" key={index}>
            {gift.name} - <strong>{gift.quantity}x</strong>
          </p>
        ))}

        <hr />
        <p className="text-white ml-auto">
          Total: <strong>{CalculationValueAllGifts()}</strong>{' '}
        </p>
      </div>
      <div className="flex flex-col mobile:flex-row justify-center items-center gap-5 mt-10">
        <Button
          variant="primary"
          className="w-full"
          onClick={handleCloseModalOrderSummary}
          type="button"
        >
          Editar carrinho
        </Button>
        <Button
          variant="primary"
          className={`w-full bg-white text-black`}
          arrowIcon={true}
          type="button"
          onClick={() => setShowMethodPayment(true)}
        >
          Concluir compra
        </Button>
      </div>

      {showMethodPayment && (
        <div className="flex flex-col mobile:flex-row justify-center items-center gap-5 mt-10">
          <MethodPayment />
        </div>
      )}
    </div>
  )
}
