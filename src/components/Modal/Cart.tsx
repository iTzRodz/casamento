import { useEffect, useState } from "react";
import { Button } from "../Button";
import { CloseIcon } from "../icons/CloseIcon";
import { ListItensSelected } from "../ListItensSelected";
import { useItems } from "../../context/ItensContext";
import { OrderSummary } from "./OrderSummary";

interface ConfirmationPaymentProps {
  handleCloseModal: () => void;
}
export function Cart({ handleCloseModal }: ConfirmationPaymentProps) {
  const { giftsList } = useItems();
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (giftsList.length === 0) {
      handleCloseModal();
    }
  }, [giftsList, handleCloseModal]);

  function handleCloseModalOrderSummary() {
    setShowOrderSummary((prevState) => !prevState);
  }

  return (
    <section className="fixed  left-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-auto px-2">
      <form className="m-auto w-[768px] rounded-xl border-[#515E6C8C] bg-[#1D212A] shadow-md">
        {!showOrderSummary ? (
          <div className="flex w-full flex-col justify-start rounded-lg border border-transparent px-8 py-4 shadow">
            <span
              className="flex cursor-pointer justify-end hover:opacity-80"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </span>

            <h1 className="mt-4 text-4xl font-semibold text-white mobile:text-5xl">
              Lista de presentes
            </h1>
            <ListItensSelected />
            <div className="mt-10 flex flex-col items-center justify-center gap-5 mobile:flex-row">
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
                className={`w-full bg-white text-black ${showOrderSummary && "hidden"}`}
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
  );
}
