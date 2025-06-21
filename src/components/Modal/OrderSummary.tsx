import { useItems } from "../../context/ItensContext";
import { CalculationValueAllGifts } from "../../helpers/CalculationValueAllGift";
import { Button } from "../Button";
import { CloseIcon } from "../icons/CloseIcon";
import { MethodPayment } from "./MethodPayment";

interface ConfirmationPaymentProps {
  handleCloseModalOrderSummary?: () => void;
}

export function OrderSummary({
  handleCloseModalOrderSummary,
}: ConfirmationPaymentProps) {
  const { giftsList } = useItems();

  return (
    <div className="flex w-full flex-col justify-start rounded-lg border border-transparent px-5 py-4 shadow">
      <span
        className="flex cursor-pointer justify-end "
        onClick={handleCloseModalOrderSummary}
      >
        <CloseIcon />
      </span>

      <h3 className="mt-4 text-2xl font-bold text-white mobile:text-5xl">
        Resumo da compra
      </h3>

      <div className="mt-4 flex flex-col justify-start space-y-1 text-start">
        {giftsList.map((gift, index) => (
          <p className="text-sm font-normal text-white" key={index}>
            {gift.name} - <strong>{gift.quantity}x</strong>
          </p>
        ))}

        <hr />
        <p className="ml-auto text-white">
          Total: <strong>{CalculationValueAllGifts()}</strong>{" "}
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-5 mobile:flex-row">
        <Button
          variant="secondary"
          className="flex w-full items-center justify-center mobile:w-1/2"
          onClick={handleCloseModalOrderSummary}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-pencil-icon lucide-pencil"
          >
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
          Editar carrinho
        </Button>
      </div>

      <div className="mt-4 flex flex-col items-center justify-center gap-5 mobile:flex-row">
        <MethodPayment />
      </div>
    </div>
  );
}
